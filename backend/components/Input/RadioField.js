class RadioField{
    /**
     * @param {String} name
     * @param {Array} options
     * @param {String} label
     * @param {Boolean} required
    */
    constructor(name, options, label, required){
        this.name = name;
        this.options = options;
        this.label = label;
        this.required = required;
    }

    //checks if required and if value is present in options
    static checkValidity(val, options, required){
        if (required && val === "" || val === null) {
            return false;
        }
        else if (!options.includes(val)) {
            return false;
        }
        return true;
    }
}

module.exports = RadioField;