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
}

module.exports = FileField;