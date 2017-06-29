angular
    .module("SuggestionBox", ["ngRoute"])
    .config(config);

function config($routeProvider) {
    $routeProvider
    .when("/suggestions", {
        controller: 'HomeController',
        templateUrl : "views/home.html"
    })
    .when('/suggestion/:id', {
      controller: "SuggestionController",
      templateUrl: "views/suggestions.html"
    })
    .otherwise ({
    redirectTo: '/suggestions'
    });
}