angular.module('breakoutModule', []);

//Getting the mdoule
angular.module('breakoutModule')

// Setting Controller
angular.module ('breakoutModule')
	.controller('mainController',['$scope', function($scope) {
$scope.hideInput = true


$scope.quotes = [{quote: "For such small creatures as we, the vastness is only bareable through love.",
author: "Carl Sagan",
rating: 3,
stars: [true,true,true,false,false]
}]


$scope.submit = function() {
	
	$scope.quote.stars.length = $scope.quote.stars.length - parseInt($scope.quote.rating)
	console.log($scope.quote.stars)

	for(i=0; i<$scope.quote.rating; i++){
		
		$scope.quote.stars[i] = true
		// ($scope.quote.stars[i]) = $scope.converted
		
		$scope.quote.stars.push($scope.converted)

	}
	console.log($scope.quote.stars)
	$scope.quotes.push($scope.quote)
}

$scope.quote = {
	quote: "", 
	author: "",
	rating: "",
	stars: [false,false,false,false,false]
}

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



}]);