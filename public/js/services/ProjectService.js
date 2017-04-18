'use strict';

/* Services */

angular.module('portfolio.services', [])
    .factory('projectService', ['$resource', function($resource) {
        return $resource(
            '/api/projects/:_id',
            {_id: '@_id'},
            {update: {method: 'PUT'}
        });
    }]);