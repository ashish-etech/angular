var app = angular.module("angularForm");
app.controller("voteSummaryController", function($scope, getDataFactory,$localStorage) {
    
    if ($localStorage.id==null){
        $state.go('login'); 
    }
    else{
        $scope.tableData = function() {
            url = '/list_poll';
            data={"id":$localStorage.token};
            getDataFactory.getData(url).get(data).$promise
            .then(function(response) {
            	console.log(response);
            	if(response.error==0){
            		$scope.data= response.data;             
                }           
            })
        }
        $scope.tableData();
    }  
})