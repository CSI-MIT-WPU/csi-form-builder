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
}

module.exports = CheckboxField;