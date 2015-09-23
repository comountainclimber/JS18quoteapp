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

$scope.quotes = [{quote: "For such small creatures such as we, the vastness is only bareable through love.",
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

// var stringify = function(quote){
// 	for (var i = 0; i < $scope.quote.length; i++) {
		
// 	};
// }






} ]);