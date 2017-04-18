// server.js

//--------- setup
// modules
var express = require('express');
var session = require('express-session');
var app = express();
var port = process.env.PORT || 8080;

// DB stuffs -- Connecting to the db
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meanstackdb');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var passport = require('passport');


//BodyParser Middelware configuration
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//override with the X-HTTP-MEthod-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

//set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

//passport
app.use(session({
    secret:'suchsecretverysneaky',
    resave: true,
    saveUninitialized: true
})); //session secret


// Load in projects model
var projectModel = require('./app/models/projects')(mongoose);
// Load in users model
var usersModel = require('./app/models/users')(mongoose);

require('./app/config/passport');

app.use(passport.initialize());
// -- ROUTING
require('./app/routes')(app); //configure our routes

//start app

//startup our app at 8080
app.listen(port);

//shoutout to the user
console.log('magic happens on port ' + port);
