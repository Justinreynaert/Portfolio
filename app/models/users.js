var crypto = require('crypto');
var jwt = require('jsonwebtoken');

module.exports = function(mongoose) {

//Projects Schema
var Users = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    hash: String,
    salt: String
},{versionKey: false});

Users.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

Users.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.hash === hash;
};

Users.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setData(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        exp: parseInt(expirty.getTime() / 1000)
    }, "suchsecretverysneaky"); // secrets and stuff
};

return usersModel = mongoose.model('Users', Users);

};