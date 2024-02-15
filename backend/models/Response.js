const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const responseSchema = new mongoose.Schema({
    user_email: {
        type: String,
        required: true
    },
    form_id: {
        type: String,
        required: true
    },
    res_id: {
        type: String,
        default: uuidv4()
    },
    content: {
        type: mongoose.Schema.Types.Mixed
    }
});
const Response = mongoose.model("Response", responseSchema);

module.exports = Response;