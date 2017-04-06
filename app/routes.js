// app/routes.js
var path = require('path');

module.exports = function(app) {
    // server routes =====




    //route to handle creating goes here (app.post)
    //route to handle delete goes here (app.delete)

    //frontend routes ================
    //route to handle all angular requests

    app.get('*', function(req,res) {
        res.sendFile(path.join(__dirname, '../public', 'index.html')); // load our public/index.html file
    })

};