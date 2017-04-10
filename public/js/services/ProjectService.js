'use strict';

/* Services */

angular.module('ProjectService', ['ngResource'])
    .factory('projectService', ['$resource', function($resource){

        var urlBase = 'api/projects';
        var Project = $resource(
            urlBase + '/:_id',
            {_id: '@_id'},
            {
                update:{method: 'PUT'}
            }
        );

        return Project;
}]);