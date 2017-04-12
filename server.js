// server.js

// modules
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
//configuration



// port

var port = process.env.PORT || 8080;

// DB stuffs -- Connecting to the db
mongoose.connect('mongodb://localhost/meanstackdb');

//Projects Schema
var Project = new mongoose.Schema({
    name: String,
    work: String,
    year: String,
    img: String
});

//Projects Model
var projectModel = mongoose.model('Project', Project); // collection films pluralization

//ROUTES =====
// CRUD -> Rest

//GET /api:test
app.get('/api', function(req,res) {
    res.send('DB actief')
});

//GET /api/projects: shows all projects
app.get('/api/projects', function(req,res) {
    return projectModel.find(function(err, projects) {
        if (!err) {
            res.send(projects);// all projects
        }
        else {
            console.log(err)
        }
    })
});

//GET /api/projects/detail: shows one projects
app.get('/api/projects/:_id', function(req, res) {
    return projectModel.findById(req.params._id, function(err, project) {
        if (!err) {
            res.send(project); // één film
        }
        else {
            return console.log(err);
        }
    })
});



// EIND DB STUFF
//routes


app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({extended:true}));

//override with the X-HTTP-MEthod-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

//set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app); //configure our routes

//start app
//startup our app at 8080
app.listen(port);

//shoutout to the user
console.log('magic happens on port ' + port);

//expose app
exports = module.exports= app;