// public/js/services/NerdService.js

angular.module('ProjectService', []).factory('Project', ['$http', function($http){
    return {
        //call to get all nerds

        get: function() {
            return $http('/api/projects');
        }
    }

}]);