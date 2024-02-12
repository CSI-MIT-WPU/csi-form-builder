const express = require('express');
const router = express.Router();

const Form = require('../models/Form');
const TextField = require('../components/Textfield');

router.get("/", async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json({forms:forms});
    } catch (error) {
        res.status(200).json({message:error});
    }
})

router.post("/", async(req, res) => {
    try {
        const {form_title, team, fields} = req.body;
        let content = [];
        fields.forEach(field => {
            if (field.type == "textfield") {
                content.push(new TextField(
                    field.name,
                    field.minLen, 
                    field.maxLen, 
                    field.label, 
                    field.placeholder, 
                    field.required
                ));
            }
        });
        const newForm = await Form.create({form_title:form_title, team:team, input_fields:content});
        res.status(200).json({message:newForm});
    } catch (error) {
        res.status(500).json({message:error});
    }
});


module.exports = router;