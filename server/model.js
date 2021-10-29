
const mongoose = require("mongoose")

const { Schema } = mongoose;

const contactFormSchema = new Schema({
    firstName: String, // String is shorthand for {type: String}
    lastName: String,
    location: String,
    email: String,
    phoneNumber: Number,

},

    {
        timestamps: true
    }

);

const Form = mongoose.model('Form', contactFormSchema );
module.exports = Form

