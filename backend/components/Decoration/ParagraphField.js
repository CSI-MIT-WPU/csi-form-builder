class ParagraphField{
    /**
     * @param {String} name
     * @param {String} content
     */

    constructor (name, content){
        this.name = name;
        this.content = content;
        this.type = "paragraph";
    }
}

module.exports = ParagraphField;