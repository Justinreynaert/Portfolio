angular.module('ProjectDtCtrl', [])
    .controller('ProjectDetailController',
        ['$scope','$routeParams','projectService', function($scope, $routeParams, projectService) {

            $scope.project = projectService.get({},{'_id':$routeParams._id});

    }]);