// public/js/controllers/ProjectCtrl.js

angular.module('ProjectCtrl', [])
    .controller('ProjectController',['$scope','projectService', function($scope, projectService) {
        $scope.titel = "My Creations";
        $scope.projects = projectService.query();

        }]);

