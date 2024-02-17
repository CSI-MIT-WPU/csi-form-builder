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
    }
}

module.exports = EmailField;