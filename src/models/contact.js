const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
        minlength: 10
    },
    gender: {
        type: String,
    },
    comment: {
        type: String,
        maxlength: 100
    }

});


const Contact = mongoose.model("contact", contactSchema);
module.exports = Contact;