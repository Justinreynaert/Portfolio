// public/js/app.js

angular.module('sampleApp', ['ngResource','ngRoute','portfolio.services', 'appRoutes', 'MainCtrl', 'ProjectCtrl','ProjectDtCtrl','ProjectEditCtrl','ContactCtrl'])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);