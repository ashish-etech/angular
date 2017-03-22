var app = angular.module("angularForm");
app.controller("takePollController", function($scope, getDataFactory,$timeout,$state,$localStorage) {
    $scope.record={};
    $scope.localToken=[];

    $scope.tableData = function() {
        url = '/list_polls';
        getDataFactory.getData(url).get().$promise
        .then(function(response) {
            console.log(response);
            if(response.error===0){
                $scope.record = response.data;
                console.log($scope.record);
                for (var i = 0; i < response.data.length; i++) {
                    $scope.localToken[i]=response.data[i]._id;
                }
                console.log( $scope.localToken);
            }
        });
    };
    $scope.tableData(); 

    $scope.submitVote= function(option,data){
        var newdata={"id":data._id,"option_text":option};
        url = '/do_vote';
        $localStorage.token=data._id;
        console.log(newdata);
        getDataFactory.getData(url).get(newdata).$promise
        .then(function(response) {
             if (response.error===0) {               
                console.log(response);
                $timeout(function(){
                    $scope.alertSuccess = false;
                        $state.go('voteSummary');
                }, 1000);
            }
        });
    };
});