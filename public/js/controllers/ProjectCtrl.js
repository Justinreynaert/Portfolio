// public/js/controllers/ProjectCtrl.js

angular.module('ProjectCtrl', [])
    .controller('ProjectController', function($scope, $http) {
        $scope.titel = "My Creations";
        $http.get('http://localhost:8080/api/projects')
            .then(function(data) {
                console.log(data);
                $scope.projects = data;

        })
    });