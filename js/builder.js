angular.module('fc', ['ngRoute']);

function genCTRL($scope){

	$scope.controls=[];
	//$scope.sch=[];

	$scope.add = function(element){
		$scope.controls.push({text:'',delet:'false',typeC:'',select:$scope.sObject = [],tag:$scope.sch = []});
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
		angular.forEach(element.select, function(th){
			element.tag.push({tag:'<option name:"'+th.text+'">'+th.text+'</option>'});
		});
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
			element.tag = [{}];
			element.tag = [{tag:'<input type="'+element.typeC+'" name="'+element.text+'">'}];
		}else{
			element.tag = [{}];console.log(element);
			element.tag = [{tag:'<select name="'+element.text+'">'}];
			$scope.addSel(element);
			element.tag.push({tag:'</select>'});
		}
	};

}
