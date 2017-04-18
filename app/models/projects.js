module.exports = function(mongoose) {

//Projects Schema
var Projects = new mongoose.Schema({
    name: String,
    work: String,
    year: String,
    img: String}, {versionKey: false}
);

return projectModel = mongoose.model('Projects', Projects);

};