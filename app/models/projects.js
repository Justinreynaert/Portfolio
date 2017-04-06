//Projects Schema
var Projects = new mongoose.Schema({
    name: String,
    work: String,
    year: String
});

//Projects Model
var projectsModel = mongoose.model('Projects', Projects); // collection films pluralization