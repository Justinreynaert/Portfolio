var mongoose = require('mongoose');
var Projects = mongoose.Schema;

var projectsSchema = new Schema({
    name: String,
    work: String,
    year: String
});

var Project = mongoose.model('Project', projectsSchema);