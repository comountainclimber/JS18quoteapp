angular.module('breakoutModule', []);

//Getting the mdoule
angular.module('breakoutModule')

// Setting Controller
angular.module ('breakoutModule')
	.controller('mainController',['$scope', function($scope) {

$scope.hideInput = true


$scope.submit = function() {

	for(i=0; i<$scope.quote.rating; i++){
		$scope.quote.stars.push(i)
	}


	$scope.quotes.push($scope.quote)

	$scope.quote = {
	quote: "", 
	author: "",
	rating: "",
	stars: []
	}


	console.log($scope.quotes)
}

	// var ratingToStars = function(n){
	// 	var stars = ""

	// 	for (var i = 0; i < n; i++) {
	// 		stars += "&#9733;"
	// 	};

	// 	return stars
	// }


$scope.quotes = [{quote: "For such small creatures as we, the vastness is only bareable through love.",
author: "Carl Sagan",
rating: 3,
stars: [true,true,true,false,false]
}]


$scope.quote = {
	quote: "", 
	author: "",
	rating: "",
	stars: []
}




// console.log(ratingToStars(5))





$scope.openInput = function(){
	$scope.hideInput=!$scope.hideInput
}

$scope.closeTheQuote = function(index) {
	$scope.quotes.splice(index, 1)
}

$scope.closeInput = function(event){
		$scope.hideInput=true;
}

$scope.escInput = function(event){
		if (event.which === 27) {
			$scope.hideInput=true
		}
	
}


$scope.submitRating = function(index) {
	console.log(index+1)
}

$scope.hideTheLightBox = function() {
	$scope.hideInput=true
}


// $scope.submitQuote = function(){
// 	$scope.hideInput=true
// }

// var stringify = function(quote){
// 	for (var i = 0; i < $scope.quote.length; i++) {
		
// 	};
// }




} ]);