class DatalistField{
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
}

module.exports = DatalistField;