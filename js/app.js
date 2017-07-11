(function() {
'use strict';
    angular.module("SuggestionBox", ['ngRoute']).config(config);
    function config($routeProvider) {
        $routeProvider
        .when("/suggestions", {
            controller: 'HomeController',
            templateUrl : "views/home.html",
            controllerAs : "vmHome"
        })
        .when('/suggestion/:id', {
            controller: "SuggestionController",
            templateUrl: "views/suggestions.html",
            controllerAs: "vmsuggestion"
        })
        .otherwise ({
        redirectTo: '/suggestions'
        });
    };
})();