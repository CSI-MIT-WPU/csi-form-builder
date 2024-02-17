class NumberField{
    /**
     * @param {String} name
     * @param {Number} minVal
     * @param {Number} maxVal
     * @param {String} label
     * @param {String} placeholder
     * @param {Boolean} required
    */
    constructor(name, minVal, maxVal, label, placeholder, required){
        this.name = name;
        this.minVal = minVal;
        this.maxVal = maxVal;
        this.label = label;
        this.placeholder = placeholder;
        this.required = required;
    }
}

module.exports = NumberField;