	
angular.module('SuggestionBox')
	.controller('SuggestionController','suggestionController')
	suggestionController.$inject = [
		"$scope",
		"suggestions"
	];

	function suggestionController ($scope, suggestions){
		$scope.post = suggestions.posts[$routeParams.id - 1 ];

		console.log($routeParams.id);

		$scope.addComment = function(){
			if(!$scope.body || $scope.body === ""){
				return;
			}

			$scope.post.comments.push({
				body: $scope.body,
				upvotes: 0
			});
			$scope.body = "";
		}

		$scope.upVoteComment = function(comment){
			comment.upvotes += 1;
		};

		$scope.new_comment = "";
	}


