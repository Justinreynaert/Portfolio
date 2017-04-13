angular.module('ProjectEditCtrl', [])
    .controller('ProjectEditController',
        ['$scope','$routeParams','$window','projectService', function($scope, $routeParams, $window, projectService) {

            $scope.project = projectService.get({},{'_id':$routeParams._id});

            $scope.save = function(project) {
                if($scope.project._id) {
                    //update
                    projectService.update({_id:$scope.project._id})
                } else {
                    //nieuwe
                    $scope.project.$save()
                }
                $window.location.assign('/');

            }
        }]);