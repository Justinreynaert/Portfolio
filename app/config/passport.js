var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('Users');

passport.use(new LocalStrategy({
    usernameField: 'email'
    },
        function(username, password, done) {
            Users.findOne({email: username}, function(err,user) {
                if (err) {return done(err);}
                // return --> user not found
                if (!user) {
                    return done(null, false, {
                        message: 'User not found'
                    });
                }
                // return if pw is wrong
                if (!user.validPassword(password)) {
                    return done(null, false, {
                        message: 'Password is wrong'
                    });
                }
                // if credentials are correct, return the user object
                return done(null, user);
            })
        }
));