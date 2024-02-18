class FileField{
    /**
     * @param {String} name
     * @param {Number} maxSize
     * @param {String} label
     * @param {Boolean} required
    */
    constructor(name, maxSize ,label, required){
        this.name = name;
        this.maxSize = maxSize;
        this.label = label;
        this.required = required;
    }

    static checkValidity(val, required){
        if (required && val.toString() === "" || val === null) {
            return false;
        }
        return true;
    }
}

module.exports = FileField;