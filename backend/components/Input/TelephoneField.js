class TelephoneField{
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
        this.type = "telephone";
    }

    //checks if required
    static checkValidity(val, required){
        if (required && val === "" || val === null) {
            return false;
        }
        if (val.toString().length !=10) {
            return false;
        }
        return true;
    }
}

module.exports = TelephoneField;