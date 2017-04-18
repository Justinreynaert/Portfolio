// public/js/controllers/ProjectCtrl.js

angular.module('ProjectCtrl', [])
    .controller('ProjectController',['$scope','projectService','$window', function($scope, projectService, $window) {
        $scope.titel = "My Creations";
        $scope.projects = projectService.query();
        $scope.deleteProject = function(id) {
                console.log(id);
                projectService.delete({'_id':id});
                $scope.project = projectService.query();
                $window.location.assign('/projects');
        };



        }]);

