class TextField{
    /**
     * @param {Number} minLen
     * @param {Number} maxLen
     * @param {String} label
     * @param {String} placeholder
     * @param {Boolean} required
    */
    constructor(minLen, maxLen, label, placeholder, required){
        this.minLen = minLen;
        this.maxLen = maxLen;
        this.label = label;
        this.placeholder = placeholder;
        this.required = required;
    }
}

module.exports = TextField;