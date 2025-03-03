const CheckboxField = require("../components/Input/CheckboxField");
const DatalistField = require("../components/Input/DatalistField");
const EmailField = require("../components/Input/EmailField");
const FileField = require("../components/Input/FileField");
const NumberField = require("../components/Input/NumberField");
const RadioField = require("../components/Input/RadioField");
const SelectField = require("../components/Input/SelectField");
const TelephoneField = require("../components/Input/TelephoneField");
const TextareaField = require("../components/Input/TextareaField");
const TextField = require("../components/Input/Textfield");
const Form = require("../models/Form");
const Response = require("../models/Response");


/*

    This middleware function validates the response submitted by the user. It checks if the response is valid or not.

    fields is an array of objects where each object represents a response field.
    inputFields is an array of objects where each object represents a formField.

    inputField and fields are mapped together using their indices.

*/


const validateResponse = async (req, res, next) => {
    try {
    const fields = req.body.content;
    const form_id = req.body.form_id;
    const form = await Form.find({ "form_id": form_id });
    if (!form[0]) {
        return res.status(404).json({ message: "Form id invalid. Form not found." })
    }
    if (form[0].status !== "published") {
        return res.status(200).json({ message: "Form is not accepting responses." });
    }
    //the 2 lines below are part of a major bug fix that was ignored in the original code.
    //they get rid of the h1, h2, separator and paragraph fields from the form object so that responses can be mapped properly.
    let inputFields = form[0].input_fields;
    inputFields = inputFields.filter((field) => field.type !== "separator" && field.type !== "h1" && field.type !== "h2" && field.type !== "paragraph");
    if (inputFields.length != fields.length) {
        return res.status(400).json({message: `Improper input format`});
    }
    for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        if (field.type === "textfield") {
            // value is the actual response value of a specific form field for a given form.
            const value = field[inputFields[i].name];            
            const isValid = TextField.checkValidity(value, inputFields[i].minLength, inputFields[i].maxLength, inputFields[i].required);
            if (!isValid) {
                return res.status(400).json({ message: `Improper input format for ${inputFields[i].name}.` });
            }
        }
        else if (field.type === "textarea") {
            const value = field[inputFields[i].name];
            const isValid = TextareaField.checkValidity(value, inputFields[i].minLength, inputFields[i].maxLength, inputFields[i].required);
            if (!isValid) {
                return res.status(400).json({ message: `Improper input format for ${inputFields[i].name}.` });
            }
        }
        else if (field.type === "telephone") {
            const value = field[inputFields[i].name];
            const isValid = TelephoneField.checkValidity(value, inputFields[i].required);
            if (!isValid) {
                return res.status(400).json({ message: `Improper input format for ${inputFields[i].name}.` });
            }
        }
        else if (field.type === "select") {
            const value = field[inputFields[i].name];
            const isValid = SelectField.checkValidity(value, inputFields[i].options, inputFields[i].required);
            if (!isValid) {
                return res.status(400).json({ message: `Improper input format for ${inputFields[i].name}.` });
            }
        }
        else if (field.type === "radio") {
            const value = field[inputFields[i].name];
            const isValid = RadioField.checkValidity(value, inputFields[i].options, inputFields[i].required);
            if (!isValid) {
                return res.status(400).json({ message: `Improper input format for ${inputFields[i].name}.` });
            }
        }
        else if (field.type === "number") {
            const value = field[inputFields[i].name];
            const isValid = NumberField.checkValidity(value, inputFields[i].min, inputFields[i].max, inputFields[i].required);
            if (!isValid) {
                return res.status(400).json({ message: `Improper input format for ${inputFields[i].name}.` });
            }
        }
        else if (field.type === "file") {
            const value = field[inputFields[i].name];
            const isValid = FileField.checkValidity(value, inputFields[i].required);
            if (!isValid) {
                return res.status(400).json({ message: `Improper input format for ${inputFields[i].name}.` });
            }
        }
        else if (field.type === "email") {
            const value = field[inputFields[i].name];
            const isValid = EmailField.checkValidity(value, inputFields[i].required);
            if (!isValid) {
                return res.status(400).json({ message: `Improper input format for ${inputFields[i].name}.` });
            }
        }
        else if (field.type === "datalist") {
            const value = field[inputFields[i].name];
            const isValid = DatalistField.checkValidity(value, inputFields[i].options, inputFields[i].required);
            if (!isValid) {
                return res.status(400).json({ message: `Improper input format for ${inputFields[i].name}.` });
            }
        }
        else if (field.type === "checkbox") {
            const value = field[inputFields[i].name];
            const isValid = CheckboxField.checkValidity(value, inputFields[i].options, inputFields[i].required);
            if (!isValid) {
                return res.status(400).json({ message: `Improper input format for ${inputFields[i].name}.` });
            }
        }
    }
    } catch (error) {
        return res.status(500).json({error:"Internal server error!"})
    }
    next();
}

module.exports = validateResponse;