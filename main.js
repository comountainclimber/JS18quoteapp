angular.module('breakoutModule', []);

//Getting the mdoule
angular.module('breakoutModule')

// Setting Controller
angular.module ('breakoutModule')
	.controller('mainController',['$scope', function($scope) {
$scope.hideInput = true
$scope.deletedQuotes = []

$scope.quotes = [
{
	quote: "For such small creatures as we, the vastness is only bareable through love.",
	author: "Carl Sagan",
	rating: 5,
	stars: [true,true,true,true,true]
},

{
	quote: 'He was not immoral, but merely unmoral.',
	author: "Jack London",
	rating: 3,
	stars: [true,true,true,false,false]
},

{
	quote: "God creates dinosaurs, God destroys dinosaurs. God creates Man, Man destroys god. Man creates dinosaurs.",
	author: "Dr. Ian Malcolm",
	rating: 4,
	stars:[true,true,true,true,false]
}

]


var inputToArray = function(n){
	var array = []
	for (i=0; i<5; i++){
		if (i<n){
			array.push(true)
		}
		else{
			array.push(false)
		}
	}
	return array
}

$scope.submit = function() {
	$scope.quote.stars = inputToArray($scope.quote.rating) 
	$scope.quotes.push($scope.quote)
	$scope.quote = $scope.quote = {
	quote: "", 
	author: "",
	rating: parseInt(""),
	stars: [false,false,false,false,false]
}

}

$scope.quote = {
	quote: "", 
	author: "",
	rating: parseInt(""),
	stars: [false,false,false,false,false]
}

$scope.sortByRating = function(){
// var arrayOfRatings = []

// Sort in the array of $scope.quotes not in just the
// empty array

	$scope.quotes.sort( function(a,b){
		// console.log(a.rating,b.rating)
		if (a.rating < b.rating) {
			return 1
			//returning a positive number tells sort that a is greater than b
		}

		else if (b.rating>a.rating){
			return -1
		}

		else if (b.rating === a.rating){
			return 0
		}
	

// return a.rating - b.rating


	})

}



$scope.openInput = function(){
	$scope.hideInput=!$scope.hideInput
}

$scope.closeTheQuote = function(index) {
	console.log($scope.quotes[index])
	$scope.deletedQuotes.push($scope.quotes[index])
	$scope.quotes.splice(index, 1)
}

$scope.undo = function () {
	$scope.lastDelete = $scope.deletedQuotes.pop()
	$scope.quotes.push($scope.lastDelete)
}




$scope.closeInput = function(event){
		$scope.hideInput=true;
}

$scope.escInput = function(event){
		if (event.which === 27) {
			$scope.hideInput=true
		}
}

$scope.submitRating = function(index, object) {
	console.log(object.rating)
	// console.log(index+ 1, object)
	object.rating = index + 1
	console.log(object)

	object.stars = inputToArray(object.rating)
}


$scope.hideTheLightBox = function() {
	$scope.hideInput=true
}



}]);