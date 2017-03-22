var app = angular.module("angularForm");
app.controller("takePollController", function($scope, getDataFactory,$timeout) {
    $scope.alerterror = false;
    $scope.alertSuccess = false;

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

    $scope.submitVote= function(option,data) {
        var newdata={"id":data._id,"option_text":option};
        url = '/do_vote';
        console.log(newdata)
        getDataFactory.getData(url).get(newdata).$promise
        .then(function(response) {
             if (response.error==0) {               
                console.log(response)
                $scope.alertSuccess = true;
                $scope.successMsg = option;
                $timeout(function() {
                    $scope.alertSuccess = false;
                }, 3000)
            }else{console.log(response)
                $scope.alerterror = true;
                $scope.errMsg = response.data;
                
                $timeout(function() {
                    $scope.alerterror = false;
                }, 3000)
            }
        })
    }  
})