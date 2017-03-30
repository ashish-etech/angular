var app = angular.module("angularForm");
app.controller("loginController", function($scope, $localStorage, $state, getDataFactory,$timeout){
    $scope.user={username:'',password:''};
    // $scope.spinner= false;
    $scope.entity = {
                name : "Form Data", 
                fields :[
                        {type: "text", name: "Username", label: "User Name" , required: true, data:""}, 
                        {type: "password", name: "password", label: "Password" , min: 6, max:20, data:"", required: true,},
                    ],
                    button: "Login"
            };

    $scope.submit = function(Obj,spin) { 
        var data={
            'username':Obj[0].data,
            'password':Obj[1].data,
        }
        url = '/login'; 
        $scope.spinner=spin;      
        getDataFactory.getData(url).get(data).$promise
        .then(function(response) {
            $scope.spinner=false;
            if (response.error==0) {
                console.log(response.data.role)
                $localStorage.role= response.data.role;
                $state.go('menuTemplate.createPoll');                
            }
            else{
                $scope.alertLoginError = true;
                $scope.loginErrrMsg = response.data;
            }
        })
    };
    
    $scope.change = function() {
        $scope.alertLoginError = false;
    };
});


