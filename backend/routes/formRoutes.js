const express = require('express');
const Response = require('../models/Response');
const router = express.Router();

//GET ALL RESPONSES FOR ALL FORMS
router.get("/responses", async(req, res)=>{
    try {
        const responses = await Response.find();
        res.status(200).json({"responses": responses});
    } catch (error) {
        res.status(500).json({message: error});
    }
});


// GET RESPONSES FOR A SPECIFIC FORM
router.get("/responses/:form_id", async (req, res) => {
    try {
        const form_id = req.params.form_id;
        const responses = await Response.find({form_id:form_id});
        res.status(200).json({responses:responses});
    } catch (error) {
        res.status(500).json({message:error});
    }
})

//POST A NEW RESPONSE TO A FORM
router.post("/submit", async(req, res) => {
    try {
        const {user_email, form_id, content} = req.body;
        const newResponse = await Response.create({
            user_email: user_email,
            form_id: form_id,
            content:content
        });
        res.status(200).json({message: newResponse});
    } catch (error) {
        res.status(500).json({message: error});
    }
});


module.exports = router;