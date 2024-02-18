const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const formSchema = new mongoose.Schema({
    form_id: {
        type: String,
        default: uuidv4,
        unique: true
    },
    form_title: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    input_fields:{
        type: mongoose.Schema.Types.Mixed
    }
}, {timestamps:true}
);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;