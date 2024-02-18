class TextareaField{
    /**
     * @param {String} name
     * @param {Number} minLen
     * @param {Number} maxLen
     * @param {String} label
     * @param {String} placeholder
     * @param {Boolean} required
    */
    constructor(name, minLen, maxLen, label, placeholder, required){
        this.name = name;
        this.minLen = minLen;
        this.maxLen = maxLen;
        this.label = label;
        this.placeholder = placeholder;
        this.required = required;
    }

    //checks for length range and required
    static checkValidity(val, minLen, maxLen, required){
        if (required && val === "" || val === null) {
            return false;
        }
        if (val.length < minLen || val.length > maxLen) {
            return false;
        }
        return true;
    }
}

module.exports = TextareaField;