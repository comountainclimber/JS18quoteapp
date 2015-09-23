angular.module('breakoutModule', []);

//Getting the mdoule
angular.module('breakoutModule')

// Setting Controller
angular.module ('breakoutModule')
	.controller('mainController',['$scope', function($scope) {

$scope.hideInput = true


$scope.submit = function() {
	console.log("you pressed the submit button.")
	
	$scope.quotes.push($scope.quote)
	$scope.quote = ""
	console.log($scope.quotes)
}

$scope.quotes = [{quote: "For such small creatures as we, the vastness is only bareable through love.",
author: "Carl Sagan"}]


$scope.quote = {
	quote: "", 
	author: ""
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
		console.log(event.which)
		if (event.which === 27) {
			$scope.hideInput=true
		}
	
}


$scope.submitRating = function(index) {
	console.log(index+1+ " many stars")
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