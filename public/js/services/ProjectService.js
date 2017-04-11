'use strict';

/* Services */

angular.module('ProjectService', [])
    .factory('projectService', ['$resource', function($resource) {


        return $resource(
            '/api/projects/:_id',
            {_id:'@_id'},
            {
                get:{method: 'GET', isArray: true}
            }
        );
    }]);