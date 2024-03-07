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
    console.log(`${fields}`)
    fields.forEach(field => {
        if (field.inputType == "textfield") {
            content.push(new TextField(field._name,field.minLen, field.maxLen, field.label, field.placeholder, field.required));
        }
        else if (field.inputType == "textarea") {
            content.push(new TextareaField(field._name, field.minLen, field.maxLen, field.label, field.placeholder, field.required));
        }
        else if (field.inputType == "telephone") {
            content.push(new TelephoneField(field._name, field.label,  field.placeholder,  field.required));
        }
        else if (field.inputType == "select") {
            content.push(new SelectField(field._name, field.options, field.label, field.required));
        }
        else if (field.inputType == "radio") {
            content.push(new RadioField(field._name, field.options, field.label, field.required));
        }
        else if (field.inputType == "number") {
            content.push(new NumberField( field._name, field.minVal,  field.maxVal,  field.label,  field.placeholder,  field.required));
        }
        else if (field.inputType == "file") {
            content.push(new FileField(field._name,field.maxSize, field.label, field.required));
        }
        else if (field.inputType == "email") {
            content.push(new EmailField(field._name,field.label, field.placeholder, field.required));
        }
        else if (field.inputType == "datalist") {
            content.push(new DatalistField(field._name,field.options, field.label, field.required));
        }
        else if (field.inputType == "checkbox") {
            content.push(new CheckboxField(field._name,field.options, field.label, field.required));
        }
    });
    console.log(content);
    return content;
}

module.exports = generateFields;