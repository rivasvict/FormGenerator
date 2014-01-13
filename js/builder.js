angular.module('fc', ['ngRoute']);

function genCTRL($scope){

	$scope.controls=[];

	$scope.add = function(element){
		$scope.controls.push({text:'',delet:'false',typeC:'',id:'',classi:'',select:$scope.sObject = []});
	};

	$scope.del = function(element){
		var oldcontrols = $scope.controls;
		$scope.controls = [];
		element.delet = 'true';
		angular.forEach(oldcontrols, function(element){
			if(element.delet == 'false') $scope.controls.push(element);
		});
	};

	$scope.addSel = function(element){
		element.select.push({texto:'',delet:'false',done:'true'});
	};
  
	$scope.delSel = function(selec,element){
		var oldsObject = element.select;
		element.select = [];
		selec.delet = 'true';
		angular.forEach(oldsObject, function(selec){
			if(selec.delet == 'false') element.select.push(selec);
		});
          };


	$scope.scheme = function(element){
		element.select = [];
		if(element.typeC == 'text'){

		}else{
			element.select.push({texto:'',delet:'false',done:'true'});
		}
	};

}
