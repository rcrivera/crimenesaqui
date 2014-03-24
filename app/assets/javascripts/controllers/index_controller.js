function IndexController ($scope){
	$scope.hello = "Hello World!";
}

ngApp.controller('IndexController', ['$scope', '$http', IndexController]);