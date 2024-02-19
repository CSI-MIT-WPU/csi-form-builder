class CheckboxField{
    /**
     * @param {String} name
     * @param {String} value
     * @param {String} label
     * @param {Boolean} required
    */
    constructor(name, value, label, required){
        this.name = name;
        this.value = value;
        this.label = label;
        this.required = required;
    }

    //checks if required
    static checkValidity(val, required){
        if (required && val === "" || val === null) {
            return false;
        }
        return true;
    }
}

module.exports = CheckboxField;