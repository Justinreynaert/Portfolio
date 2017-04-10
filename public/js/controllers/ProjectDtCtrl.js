angular.module('ProjectDtCtrl', [])
    .controller('ProjectController',
        ['$scope','$routeParams','projectService', function($scope, $routeParams, projectService) {
        $scope.titel = "Project: " + $routeParams.name;
        $scope.project = projectService.get({},{'_id':$routeParams._id})

    }]);