angular.module('fc', ['ngRoute']);

function genCTRL($scope){

	$scope.controls=[];

	$scope.add = function(){
		$scope.controls.push({text:'',delet:'false',typeC:''});
	};

	$scope.del = function(element){
		var oldcontrols = $scope.controls;
		$scope.controls = [];
		element.delet = 'true';
		angular.forEach(oldcontrols, function(element){
			if(element.delet == 'false') $scope.controls.push(element);
		});
	};

	$scope.test = function(){
		alert('hola mundo');
	};

}
