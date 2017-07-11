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

			vm.addSuggestion = addSuggestion;
			function addSuggestion() {
				if(!vm.title || vm.title === "") {
					return;
				}
				var post = {
					id: vm.posts.length +1,
					title: vm.title,
					upvotes: 0,
					comments: []
				};
				
				suggestions.addPosts(post)

				vm.title = '';
			};
			vm.upVote = upVote;
			function upVote(x) {
				x.upvotes +=1;
			};
		}
})();