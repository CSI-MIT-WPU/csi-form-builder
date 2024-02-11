const express = require('express');
const router = express.Router();

const Form = require('../models/Form');
const TextField = require('../components/Textfield');

router.get("/", (req, res) => {
    res.status(200).json({message: "buildiong forms"});
})

router.post("/", async(req, res) => {
    const {form_title, team, fields} = req.body;
    let content = [];
    fields.forEach(field => {
        if (field.type == "textfield") {
            content.push(new TextField(
                field.minLen, 
                field.maxLen, 
                field.label, 
                field.placeholder, 
                field.required
            ));
        }
    });
    const newForm = await Form.create({form_title:form_title, team:team, content:content});
    console.log(newForm);
    res.status(200).json({message:newForm});
});


module.exports = router;