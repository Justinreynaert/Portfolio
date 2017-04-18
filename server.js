// server.js

// modules
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');


//BodyParser Middelware configuration

app.use(bodyParser.json());
//parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//override with the X-HTTP-MEthod-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));



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
app.get('/api', function (req, res) {
    res.send('DB actief')
});

//GET /api/projects: shows all projects
app.get('/api/projects', function (req, res) {
    return projectModel.find(function (err, projects) {
        if (!err) {
            res.send(projects);// all projects
        }
        else {
            console.log(err)
        }
    })
});

//POST /api/projects : add a project
app.post('/api/projects', function (req, res) {
    var project = new projectModel({
        name: req.body.name,
        work: req.body.work,
        year: req.body.year,
        img: req.body.img
    });

    //mongoose save
    project.save(function (err) {
        if (!err) {
            return console.log('project created');
        } else {
            return console.log(err);
        }
    });

    return res.send(project);
});

//GET /api/projects/detail: shows one project
app.get('/api/projects/:_id', function (req, res) {
    return projectModel.findById(req.params._id, function (err, project) {
        if (!err) {
            res.send(project); // één film
        }
        else {
            return console.log(err);
        }
    })
});

//PUT api/films/id: update project by id
app.put('/api/projects/:_id', function (req) {
    return projectModel.findById(req.params._id, function (err, project) {

        console.log(req.body);
        project.name = req.body.name;
        project.work = req.body.work;
        project.year = req.body.year;
        project.img = req.body.img;

        return project.save(function (err) {
            if (!err) {
                return console.log('project geüpdatet');
            }
            else {
                return console.log(err);
            }


        });

    });
});

//delete a project
// DELETE /API/projects/id
app.delete('/api/projects/:id', function (req, res) {

    console.log(req.params.id);
    console.log('remove project with id ' + req.params.id);
    return projectModel.findById(req.params.id, function (err, project) {
        return project.remove(function (err) {
            if (!err) {
                return console.log('Project removed');

            }
            else {
                return console.log(err);
            }
        })
    })

});


// EIND DB STUFF
//routes


//set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app); //configure our routes

//start app
// port
var port = process.env.PORT || 8080;
//startup our app at 8080
app.listen(port);

//shoutout to the user
console.log('magic happens on port ' + port);

//expose app
exports = module.exports = app;