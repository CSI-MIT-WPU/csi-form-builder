class CheckboxField{
    /**
     * @param {String} name
     * @param {String} value
     * @param {String} label
     * @param {Boolean} required
    */
    constructor(name, options, label, required){
        this.name = name;
        this.options = options;
        this.label = label;
        this.required = required;
        this.type = "checkbox";
    }

    //checks if required and if value is present in options
    static checkValidity(val, options, required){
        for (let i = 0; i < val.length; i++) {
            if (required && val[i] === "" || val[i] === null) {
                return false;
            }
            else if (!options.includes(val[i])) {
                return false;
            }
        }
        return true;
    }
}

module.exports = CheckboxField;