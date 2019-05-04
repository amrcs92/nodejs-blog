const bcrypt = require('bcrypt-nodejs');

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide your username.']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide your password.']
    }
});

UserSchema.pre('save', function(next) {
    const user = this;
    
    bcrypt.hash(user.password, null, null, function(error, encrypted) {
        user.password = encrypted;
        next();
    });    
    
});

module.exports = mongoose.model('User', UserSchema);