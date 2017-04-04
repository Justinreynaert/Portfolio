// public/js/appRoutes.js

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    //home.page

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/whoami', {
            templateUrl: 'views/whoami.html',
            controller: 'NerdController'
        })

        .when('/projects', {
            templateUrl: 'views/projects.html',
            controller: 'NerdController'
        })

        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'NerdController'
        })

        .otherwise({
            templateUrl: 'views/notfound.html',
            controller: 'MainController'
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);

