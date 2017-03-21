var app = angular.module("angularForm");
app.controller("createPollController", function($scope, getDataFactory,$timeout) {
    $scope.alertSuccess = false;
    $scope.alertError = false;
    $scope.object={ques:'',opt1:'',opt2:'',opt3:'',opt4:''}
        
    $scope.submit= function() {        
        var options=$scope.object.opt1+'____'+$scope.object.opt2+'____'+$scope.object.opt3+'____'+$scope.object.opt4;
        data={"title":$scope.object.ques,"options":options};
        url ='/add_poll?'
        console.log(data)
        getDataFactory.getData(url).get(data).$promise
        .then(function(response) {
            if (response.error==0){
                console.log('success>>>',response)
                $scope.alertSuccess = true;
                $scope.form.$setPristine();
                $timeout(function() {
                    $scope.alertSuccess = false;
                    $scope.object = {};
                }, 3000)
            }
            else{
                console.log('error',response)                
                $scope.alertCreatePollError= true;
                $scope.errorMsg=response.data;
            }
        })            
    }  
})
