angular.module("devmtnTravel").controller("mainCtrl", function($scope, srvc, $stateParams){
	$scope.travelInfo = srvc.travelInfo;
	var id = $stateParams.id;
	console.log($stateParams);
	console.log(id);
	$scope.cityName = "error!!!";
	if(id === "112233"){
		console.log("going to newYork");
		$scope.cityName = "New York.";
	}
	if(id === "1122343"){
		console.log("going to Paris");
		$scope.cityName = "Paris.";
	}
	if(id === "11223489"){
		console.log("going to Sydney");
		$scope.cityName = "Sydney.";
	}
});
