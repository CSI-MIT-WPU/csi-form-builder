class H2Field{
    /**
     * @param {String} name
     * @param {String} content
     */

    constructor (name, content){
        this.name = name;
        this.content = content;
        this.type = "h2";
    }
}

module.exports = H2Field;