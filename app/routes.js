// app/routes.js
var path = require('path');

module.exports = function(app) {
    // server routes =====


    //ROUTES =====
    // CRUD -> Rest

    //GET /api:test
    app.get('/api', function (req, res) {
        res.send('DB actief')
    });


    //USERS API REST
    //GET /api/users: shows all users

    app.get('/api/users', function(req,res) {
        return usersModel.find(function(err, users) {
            if(!err) {
                res.send(users); // all users
            }
            else {
                console.log(err)
            }
        })
    });

    //POST /api/users : add a user
    app.post('/api/users', function (req, res) {
        var user = new usersModel({
            email: req.body.email,
            password: req.body.password
        });

        //mongoose save
        user.save(function (err) {
            if (!err) {
                return console.log('user created');
            } else {
                return console.log(err);
            }
        });

        return res.send(user);
    });

    //GET /api/users/detail: shows one user
    app.get('/api/users/:_id', function (req, res) {
        return usersModel.findById(req.params._id, function (err, user) {
            if (!err) {
                res.send(user); // één film
            }
            else {
                return console.log(err);
            }
        })
    });

    //PUT api/users/id: update user by id
    app.put('/api/users/:_id', function (req, res) {
        return usersModel.findById(req.params._id, function (err, user) {

            user.email = req.body.email;
            user.password = req.body.password;

            return user.save(function (err) {
                if (!err) {
                    res.send('user updated');
                    return console.log('user geüpdatet');

                }
                else {
                    res.send('something went wrong');
                    return console.log(err);
                }


            });

        });
    });

    //delete a user
    // DELETE /API/users/id
    app.delete('/api/users/:id', function (req, res) {

        console.log('remove user with id ' + req.params.id);
        return usersModel.findById(req.params.id, function (err, user) {
            return user.remove(function (err) {
                if (!err) {
                    res.send('user deleted');
                    return console.log('User removed');

                }
                else {
                    return console.log(err);
                }
            })
        })

    });



    //PROJECT API REST
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
    app.delete('/api/projects/:id', function (req) {

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



    //route to handle creating goes here (app.post)
    //route to handle delete goes here (app.delete)

    //frontend routes ================
    //route to handle all angular requests

    app.get('*', function(req,res) {
        res.sendFile(path.join(__dirname, '../public', 'index.html')); // load our public/index.html file
    })

};