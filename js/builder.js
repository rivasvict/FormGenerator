angular.module('fc', ['ngRoute']);

function genCTRL($scope){

	$scope.controls=[];
	$scope.sch=[];

	$scope.add = function(){
		$scope.controls.push({text:'',delet:'false',typeC:'',select:$scope.sObject = []});
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
		element.select.push({text:'',delet:'false',done:'true'});
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
		if(element.typeC == 'text'){
			$scope.sch.push({tag:'<input type="'+element.typeC+'" name="'+element.text+'">',});
		}else{
			$scope.addSel(element);
			$scope.sch.push({tag:'<select name="'+element.text+'">'});
			$scope.sch.push({tag:'</select>'});
		}
	};

}
