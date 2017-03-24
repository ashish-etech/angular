var app = angular.module("angularForm");
app.controller("registrationController", function($scope, getDataFactory, $timeout, $state) {
    $scope.user={username:'',password:'',role:''}
    $scope.alertsuccess=false;
    $scope.alerterror=false;
    $scope.errmsg='';
    $scope.change=function(){
        $scope.alerterror = false;
    }
    $scope.submit = function(data) {
        console.log(data)
        url='/add_user';
        getDataFactory.getData(url).get(data).$promise
            .then(function(response) {
                if (response.error==0) {
                    console.log(response)
                    $scope.alertsuccess = true;
                    $scope.form.$setPristine();
                    $timeout(function() {
                        $scope.alertsuccess = false;
                        $scope.user = {};
                        $state.go('menuTemplate.login');
                    }, 3000)
                }else{
                    console.log(response)
                    $scope.alerterror = true;
                    $scope.errmsg = response.message;
                }
            })
    }
})
