const express = require('express');
const router = express.Router();

const Form = require('../models/Form');
const TextField = require('../components/Input/Textfield');
const RadioField = require("../components/Input/RadioField");
const TextareaField = require ("../components/Input/TextareaField");
const TelephoneField = require('../components/Input/TelephoneField');
const SelectField = require('../components/Input/SelectField');
const NumberField = require('../components/Input/NumberField');
const FileField = require('../components/Input/FileField');
const EmailField = require('../components/Input/EmailField');
const DatalistField = require('../components/Input/DatalistField');

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
                content.push(new TextField(field.name,field.minLen, field.maxLen, field.label, field.placeholder, field.required));
            }
            else if (field.type == "textarea") {
                content.push(new TextareaField(field.name, field.minLen, field.maxLen, field.label, field.placeholder, field.required));
            }
            else if (field.type == "telephone") {
                content.push(new TelephoneField(field.name, field.label,  field.placeholder,  field.required));
            }
            else if (field.type == "select") {
                content.push(new SelectField(field.name, field.options, field.label, field.required));
            }
            else if (field.type == "radio") {
                content.push(new RadioField(field.name, field.options, field.label, field.required));
            }
            else if (field.type == "number") {
                content.push(new NumberField( field.name, field.minVal,  field.maxVal,  field.label,  field.placeholder,  field.required));
            }
            else if (field.type == "file") {
                content.push(new FileField(field.name,field.maxSize, field.label, field.required));
            }
            else if (field.type == "email") {
                content.push(new EmailField(field.name,field.label, field.placeholder, field.required));
            }
            else if (field.type == "datalist") {
                content.push(new DatalistField(field.name,field.options, field.label, field.required));
            }
            else if (field.type == "checkbox") {
                content.push(new DatalistField(field.name,field.value, field.label, field.required));
            }
        });
        const newForm = await Form.create({form_title:form_title, team:team, input_fields:content});
        res.status(200).json({message:newForm});
    } catch (error) {
        res.status(500).json({message:error});
    }
});


module.exports = router;