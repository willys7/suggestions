(function () {
'use strict';
	angular.module('SuggestionBox').factory('suggestions',suggestions);
		suggestions.$inject = ['$http'];
		function suggestions($http){
			var service = {
				getPosts: getPosts
			}
			return service;
		}

		function getPosts(){
			var demoSuggestions = [
			
				{
					id : 1,
					title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
					upvotes: 3,
					comments: [{
						body:'I love Pizza',
						upvotes: 5,
					}],
				},
				{
					id: 2,
					title: 'Free pizza at club meetings',
					upvotes: 15,
					comments: [{
						body:'I love Pizza',
						upvotes: 0,
					},
					{
						body:"I've got a coupon!",
						upvotes: 1,
					}],
				},
				{
					id: 3,
					title: 'End all club emails with Laffy Taffy jokes',
					upvotes: 9,
					comments: [{
						body:'I love Pizza',
						upvotes: 6,
					}],
				},
				{
					id: 4,
					title: 'Retrofit water fountain with Gatorade',
					upvotes: 7,
					comments: [{
						body:'I love Pizza',
						upvotes: 6,
					}],
				}
				
			];
			return demoSuggestions;
		}
})();