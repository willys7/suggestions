app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions',  function($scope, $routeParams, suggestions) {

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

}]);
