const express = require('express');
const router = express.Router();

const Response = require('../models/Response');
const validateResponse = require('../middleware/responseValidation');

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
        const newResponse = await Response.create({
            user_email: user_email,
            form_id: form_id,
            content:content
        });
        res.status(200).json({message: newResponse});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
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