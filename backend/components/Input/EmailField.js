const validator = require("email-validator");

class EmailField{
    /**
     * @param {String} name
     * @param {String} label
     * @param {String} placeholder
     * @param {Boolean} required
    */
    constructor(name, label, placeholder, required){
        this.name = name;
        this.label = label;
        this.placeholder = placeholder;
        this.required = required;
        this.type = "email";
    }
    
    //checks for email and required
    static checkValidity(val, required){
        if (required && val.toString() === "" || val === null) {
            return false;
        }
        if (!validator.validate(val)) {
            return false;
        }
        return true;
    }
}

module.exports = EmailField;