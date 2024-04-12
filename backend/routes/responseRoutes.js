const express = require('express');
const router = express.Router();

const Response = require('../models/Response');
const validateResponse = require('../middleware/responseValidation');
const { connectToGoogleSheets, appendResponse } = require('../googleSheets');
const Form = require('../models/Form');

//GET ALL RESPONSES FOR ALL FORMS
router.get("/all", async(req, res)=>{
    try {
        const responses = await Response.find();
        res.status(200).json({"responses": responses});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
});

// GET RESPONSES FOR A SPECIFIC FORM
router.get("/:form_id", async (req, res) => {
    try {
        const form_id = req.params.form_id;
        const responses = await Response.find({form_id:form_id});
        res.status(200).json({responses:responses});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
})

//POST A NEW RESPONSE TO A FORM
router.post("/submit", validateResponse, async(req, res) => {
    try {
        const {user_email, form_id, content} = req.body;
        const form = await Form.findOne({
            form_id: form_id
        });
        if (!form) {
            return res.status(400).json({message: "Form not found"});
        }
        const formName = form.form_title;
        const sheets = await connectToGoogleSheets();
        const newResponse = await Response.create({
            user_email: user_email,
            form_id: form_id,
            content:content
        });
        try {
            await appendResponse(sheets, process.env.GSHEET_ID, formName, content);
        } catch (error) {
            await Response.deleteOne({_id: newResponse._id});
            throw error;
        }
        res.status(200).json({message: newResponse});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.post("/", async (req, res) => {
    try {
        const {user_email, form_id, content} = req.body;  
        const sheets = await connectToGoogleSheets();
        const response = await appendResponse(sheets, process.env.GSHEET_ID, "Samit", content);
        console.log(response);
        res.status(200).json({message: response});
    } catch (error) {
        console.log(error)
    }
});

//DELETE BY RESPONSE ID
router.delete("/response/:res_id", async (req, res) => {
    try {
        const res_id = req.params.res_id;
        const result = await Response.deleteOne({"res_id":res_id});
        console.log(result);
        res.status(200).json({message: result})
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
});

//DELETE BY FORM ID (DELETES ALL RESPONSES FOR A FORM)
router.delete("/form/:form_id", async (req, res)=>{
    try {
        const form_id = req.params.form_id;
        const result = await Response.deleteMany({"form_id":form_id});
        res.status(200).json({message: result});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports = router;