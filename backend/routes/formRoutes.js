const express = require('express');
const router = express.Router();

const Form = require('../models/Form');
const Response = require("../models/Response");
const generateFields = require('../utils/index');
const validateForm = require('../middleware/formValidation');
const { connectToGoogleSheets, createNewSheet, getSheetData, setSheetHeaders, deleteSheet } = require('../googleSheets');
require("dotenv").config();

//GET ALL FORMS
router.get("/all", async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json({ forms: forms });
    } catch (error) {
        res.status(200).json({ message: error });
    }
})

//GETS FORM FIELDS FOR A SPECIFIC FORM
router.get("/:form_id", async (req, res) => {
    try {
        const form = await Form.findOne({ form_id: req.params.form_id });
        if (!form) {
            return res.status(404).json({ message: "Form not found!" });
        }
        if (form.status !== "published") {
            return res.status(200).json({ message: "Form is not accepting responses!" });
        }
        res.status(200).json({ form: form });
    } catch (error) {
        res.status(200).json({ message: error });
    }
})

//POSTS FORM 
router.post("/", validateForm, async (req, res) => {
    try {
        const { form_title, team, status, input_fields } = req.body;
        const spreadSheetId = process.env.GSHEET_ID;
        let sheetId;
        if (await Form.findOne({ form_title: form_title })) {
            return res.status(409).json({ message: "Form already exists!" });
        }
        let content = generateFields(input_fields);
        const sheets = await connectToGoogleSheets();
        let newForm = await Form.create({ form_title: form_title, team: team, status: status, input_fields: content });
        try {
            sheetId = await createNewSheet(sheets, spreadSheetId, form_title);
            newForm.sheet_id = sheetId;
            await newForm.save();
            await setSheetHeaders(sheets, spreadSheetId, sheetId, input_fields);
        } catch (error) {
            await Form.deleteOne({ _id: newForm._id });
            await deleteSheet(sheets, spreadSheetId, sheetId);
            throw error;
        }
        res.status(200).json({ message: newForm });
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
});

router.post("/test", async (req, res) => {
    try {
        const sheets = await connectToGoogleSheets();
        const data = await setSheetHeaders(sheets, "1B7b8Zljx4JqKYYifHOrn-VcwSboS3h00_HsL-YWlxTI", 553256054);
        res.status(200).json({ message: data });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

//UPDATES FORM 
router.put("/", async (req, res) => {
    try {
        const { form_id, form_title, team, fields } = req.body;
        let content = generateFields(fields);
        const filter = { "form_id": form_id };
        const update = { "form_title": form_title, "team": team, "input_fields": content };
        const updatedForm = await Form.findOneAndUpdate(filter, update, { new: true });
        if (!updatedForm) {
            return res.status(404).json({ message: "Form not found. Invalid form id." })
        }
        return res.status(200).json({ updatedDoc: updatedForm });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

//DELETE FORM (ALSO DELETES RESPONSES ALLOCATED TO A SPECIFIC FORM)
router.delete("/:form_id", async (req, res) => {
    try {
        const form_id = req.params.form_id;
        await Form.deleteOne({ "form_id": form_id });
        await Response.deleteMany({ "form_id": form_id });
        return res.status(200).json({ message: "Deleted form." });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
})


//DELTES ALL FORMS AND RESPONSES FROM DATABASE (USE WITH CAUTION)
router.delete("/", async (req, res) => {
    try {
        await Form.deleteMany();
        await Response.deleteMany();
        return res.status(200).json({ message: "Deleted all forms." });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = router;