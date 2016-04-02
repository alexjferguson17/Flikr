angular.module('flikrSearch', [])
.controller('flikrSearchController', ['$scope', '$http', function($scope, $http){

	$scope.query = function() {

		var url = 'https://farm{farm}.staticflickr.com/{server}/{id}_{secret}.jpg';

	  var config = {
			url: 'https://api.flickr.com/services/rest',
			params : {
		    method: 'flickr.photos.search',
		    api_key: 'bd518b863a8442c4402d347709286671',
		    tags: $scope.userSearch,
		    format: 'json',
		    nojsoncallback: 1,
		    per_page: '20'
		  }
		};
		
    	$http(config)
       .then(
           // success
           function(response){
               $scope.image = response.data.photos.photo;
           },
           //error
           function (response) {
               console.log(response);
           });

	};

}]);