angular.module('SuggestionBox')
	.controller('HomeController','homeController')
	homeController.$inject = [
		"$scope",
		"suggestions"
	];

app.controller('HomeController', ['$scope','suggestions', function($scope, suggestions) {
	$scope.posts= suggestions.posts
	$scope.addSuggestion = function() {
		if(!$scope.title || $scope.title === "") {
			return;
		}
		$scope.posts.push({
            id: $scope.posts.length +1,
			title: $scope.title,
			upvotes: 0,
            comments: [],
		});
		$scope.title = '';
	};
	$scope.upVote =function(x) {
    	x.upvotes +=1;
  };
}]);