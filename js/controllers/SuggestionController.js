(function () {
'use strict';
	angular.module('SuggestionBox')
		.controller('SuggestionController',suggestionController)
		
		suggestionController.$inject = [
			"$scope",
			"suggestions",
			"$routeParams"
		];

		function suggestionController ($scope, suggestions, $routeParams){
			var vm = this;
			vm.post = suggestions.getPosts().filter(function(a) {
				return (a.id == $routeParams.id);
			})[0];

			console.log($routeParams.id);

			vm.addComment = addComment;
			function addComment(){
				if(!vm.body || vm.body === ""){
					return;
				}

				vm.post.comments.push({
					body: vm.body,
					upvotes: 0
				});
				vm.body = "";
			}

			vm.upVoteComment = upVoteComment;
			function upVoteComment(comment){
				comment.upvotes += 1;
			};

			vm.new_comment = "";
		}
})();
