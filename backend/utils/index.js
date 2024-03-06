const TextField = require('../components/Input/Textfield');
const RadioField = require("../components/Input/RadioField");
const TextareaField = require ("../components/Input/TextareaField");
const TelephoneField = require('../components/Input/TelephoneField');
const SelectField = require('../components/Input/SelectField');
const NumberField = require('../components/Input/NumberField');
const FileField = require('../components/Input/FileField');
const EmailField = require('../components/Input/EmailField');
const DatalistField = require('../components/Input/DatalistField');
const CheckboxField = require('../components/Input/CheckboxField');

function generateFields(fields) {
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
            content.push(new CheckboxField(field.name,field.options, field.label, field.required));
        }
    });
    return content;
}

module.exports = generateFields;