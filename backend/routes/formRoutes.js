const express = require('express');
const router = express.Router();

const Form = require('../models/Form');
const Response = require("../models/Response");
const generateFields = require('../utils/index');

//GET ALL FORMS
router.get("/all", async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json({forms:forms});
    } catch (error) {
        res.status(200).json({message:error});
    }
})

//POSTS FORM 
router.post("/", async(req, res) => {
    try {
        const {form_title, team, fields} = req.body;
        let content = generateFields(fields);
        const newForm = await Form.create({form_title:form_title, team:team, input_fields:content});
        res.status(200).json({message:newForm});
    } catch (error) {
        res.status(500).json({error:"An error occured"});
    }
});

//UPDATES FORM 
router.put("/", async(req, res) => {
    try {
        const{form_id, form_title, team, fields} = req.body;
        let content = generateFields(fields);
        const filter = {"form_id":form_id};
        const update = {"form_title":form_title, "team":team ,"input_fields":content};
        const updatedForm = await Form.findOneAndUpdate(filter, update, {new:true});
        if (!updatedForm) {
            return res.status(404).json({message:"Form not found. Invalid form id."})
        }
        return res.status(200).json({updatedDoc: updatedForm});
    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
});

//DELETE FORM (ALSO DELETES RESPONSES ALLOCATED TO A SPECIFIC FORM)
router.delete("/:form_id", async (req, res)=>{
    try {
        const form_id = req.params.form_id;
        await Form.deleteOne({"form_id":form_id});
        await Response.deleteMany({"form_id":form_id});
        return res.status(200).json({message: "Deleted form."});
    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
})


module.exports = router;