var app = angular.module("angularForm");
 var localToken=[];
app.controller("takePollController", function($scope, getDataFactory,$timeout,$state,$localStorage) {
    $scope.recordAlert=false;
    $scope.paginAlert=false;
    $scope.record=[];   
    $scope.count=0;

    $scope.tableData = function() {
        url = '/list_polls';
        getDataFactory.getData(url).get().$promise
        .then(function(response) {
            if(response.error===0){
                $scope.record = response.data;             
                
                for (var i = 0; i <localToken.length; i++) {
                    for (var j = 0; j <$scope.record.length; j++) {
                                               
                        if (localToken[i]==$scope.record[j]._id) {
                            $scope.record.splice($scope.record.indexOf($scope.record[j]),1);
                        }
                        if ($scope.record.length==0) {
                            $scope.recordAlert=true;
                            $scope.paginAlert=true;
                        }
                    }
                }
            }
        });
    };
    $scope.tableData(); 

    $scope.submitVote= function(option,data){
        var newdata={"id":data._id,"option_text":option};
        url = '/do_vote';
        
        localToken.push(data._id);      
        $localStorage.token=data._id;

        getDataFactory.getData(url).get(newdata).$promise
        .then(function(response) {
             if (response.error===0) {     
                $timeout(function(){
                    $scope.alertSuccess = false;
                        $state.go('voteSummary');
                }, 1000);
            }
        });
    };
});