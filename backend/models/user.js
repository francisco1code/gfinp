const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        select: false,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },

})

const User = mongoose.model('User',UserSchema);

module.exports = User;