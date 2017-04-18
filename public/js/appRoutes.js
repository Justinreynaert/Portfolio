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

        .when('/project/new', {
            templateUrl: '/views/projectEditDetail.html',
            controller: 'ProjectEditController'
        })

        .when('/projects/:_id', {
            templateUrl: '/views/projectDetail.html',
            controller: 'ProjectDetailController'
        })

        .when('/project/edit/:_id', {
            templateUrl: '/views/projectEditDetail.html',
            controller: 'ProjectEditController'
        })


        .when('/contact', {
            templateUrl: '/views/contact.html',
            controller: 'ContactController'
        })

        .otherwise({
            redirectTo: '/'}
    );


        /*.otherwise({
            redirectTo: '/'
        });*/
    $locationProvider
        .hashPrefix('')
        .html5Mode({
        enabled: true,
        rewriteLinks: false,
        requireBase: false
    });

}]);

