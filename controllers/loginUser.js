const bcrypt = require('bcrypt-nodejs');

const User = require('../database/models/User');

module.exports = (req, res) => {

    const { email, password } = req.body;

    User.findOne({ email }, (error, user) => {
        if(user) {
            bcrypt.compare(password, user.password, (error, result) => {
                if(result) {
                    req.session.userId = user._id;
                    res.redirect('/');
                } else {
                    res.redirect('/auth/login');
                }
            })
        } else {
            return res.redirect('/auth/login');
        }
    });
}