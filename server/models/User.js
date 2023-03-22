const { Schema, model } = require('mongoose');

//Schema to create User Model
const userSchema = new Schema(
    {
        first_tname: {
            type: String,
            required: true,
            max_length: 50,
        },
        last_name: {
            type: String,
            required: true,
            max_length: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/]
        },
        username: {
            type: String,
            unique: true,
            trim: true,
            required: 'Username is Required'
        },
        password: {
            type: String,
            unique: true,
            trim: true,
            required: 'Password is Required'
        },
    }
)

const User = model('user', userSchema);

module.exports = User;