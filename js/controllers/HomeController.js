(function () {
'use strict';

	angular.module('SuggestionBox')
		.controller('HomeController',homeController)
		
		//Nuevos servicios y repositorios
		homeController.$inject = [
			"$scope",
			"suggestions"
		];

		function homeController($scope, suggestions){
			var vm = this;
			vm.posts= suggestions.getPosts()
			vm.addSuggestion = function() {
				if(!vm.title || vm.title === "") {
					return;
				}
				vm.posts.push({
					id: vm.posts.length +1,
					title: vm.title,
					upvotes: 0,
					comments: [],
				});
				vm.title = '';
			};
			vm.upVote =function(x) {
				x.upvotes +=1;
			};
		}
})();