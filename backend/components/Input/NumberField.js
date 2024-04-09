class NumberField{
    /**
     * @param {String} name
     * @param {Number} min
     * @param {Number} max
     * @param {String} label
     * @param {String} placeholder
     * @param {Boolean} required
    */
    constructor(name, min, max, label, placeholder, required){
        this.name = name;
        this.min = min;
        this.max = max;
        this.label = label;
        this.placeholder = placeholder;
        this.required = required;
        this.type = "number";
    }

    //checks for range and required
    static checkValidity(val, min, max, required){
        if (required && val.toString() === "" || val === null) {
            return false;
        }
        if (val < min || val > max) {
            return false;
        }
        return true;
    }
}

module.exports = NumberField;