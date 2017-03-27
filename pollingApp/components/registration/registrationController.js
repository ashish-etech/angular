var app = angular.module("angularForm");
app.controller("registrationController", function($scope, getDataFactory, $timeout, $state) {
    $scope.user={username:'',password:'',role:''};
    $scope.roles = ["admin", "user", "guest"];
    $scope.alertsuccess=false;
    $scope.alerterror=false;
    $scope.loadingReg = false;
    $scope.errmsg='';
    
    $scope.change=function(){
        $scope.alerterror = false;
    };

    $scope.submit = function(data) {
        $scope.loadingReg = true;
        url='/add_user';
        getDataFactory.getData(url).get(data).$promise
        .then(function(response) {
            $scope.loadingReg = false;
            if (response.error==0) {
                $scope.alertsuccess = true;
                $scope.form.$setPristine();
                $timeout(function() {
                    $scope.alertsuccess = false;
                    $scope.user = {};
                    $state.go('login');
                }, 3000)
            }else{
                $scope.alerterror = true;
                $scope.errmsg = response.message;
            }
        })
    };
});
