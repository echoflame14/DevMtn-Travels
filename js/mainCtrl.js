angular.module("devmtnTravel").controller("mainCtrl", function($scope, srvc, $stateParams){
	$scope.travelInfo = srvc.travelInfo;
	var id = $stateParams.id;
	console.log(id);

	if(id === 112233){
		console.log("going to newYork");
	}
	if(id === 1122343){
		console.log("going to Paris");
	}
	if(id === 11223489){
		console.log("going to Sydney");
	}
});
