const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    user_email: {
        type: String,
        required: true
    },
    form_id: {
        type: String,
        required: true
    },
    content: {
        type: mongoose.Schema.Types.Mixed
    }
});
const Response = mongoose.model("Response", responseSchema);

module.exports = Response;