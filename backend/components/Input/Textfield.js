class TextField{
    /**
     * @param {String} name
     * @param {Number} minLength
     * @param {Number} maxLength
     * @param {String} label
     * @param {String} placeholder
     * @param {Boolean} required
    */
    constructor(name, minLength, maxLength, label, placeholder, required){
        this.name = name;
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.label = label;
        this.placeholder = placeholder;
        this.required = required;
        this.type = "textfield";
    }


    //checks for length range and required
    static checkValidity(val, minLength, maxLength, required){
        if (required && val === "" || val === null) {
            return false;
        }
        if (val.length < minLength || val.length > maxLength) {
            return false;
        }
        return true;
    }
}

module.exports = TextField;