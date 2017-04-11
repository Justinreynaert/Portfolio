// public/js/appRoutes.js

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    //home.page



        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'MainController'
        })

        .when('/projects', {
            templateUrl: '/views/projects.html',
            controller: 'ProjectController'
        })

        /*.when('/projects/:_id', {
            templateUrl: '/views/projectDetail.html',
            controller: 'ProjectDetailController'
        })*/

        .when('/contact', {
            templateUrl: '/views/whoami.html',
            controller: 'WhoamiController'
        })


        .otherwise({
            redirectTo: '/'
    });
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode({
        enabled: true,
        rewriteLinks: false,
        requireBase: false
    });

}]);

