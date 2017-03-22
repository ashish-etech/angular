var app = angular.module("angularForm");
app.controller("viewPollController", function($scope, getDataFactory) {
    $scope.record={}

    $scope.tableData = function() {
        url = '/list_polls';
        getDataFactory.getData(url).get().$promise
        .then(function(response) {
        	console.log(response)
        	if(response.error==0) {
        		$scope.record = response.data;
				console.log($scope.record);
            }
           
        })
    }
    $scope.tableData(); 
  
})