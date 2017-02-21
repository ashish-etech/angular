var app = angular.module("Assignment7", []);
app.controller("assignment7Controller", function($scope) {
    $scope.list = [
        {   
            "Index" : "1", 
            "Name"  : "Ashish Singh",
            "Email" : "ashish.rajput@gmail.com",
            "Age"   : "23 Years"
        },{
            "Index" : "2",
            "Name"  : "saurabh kumar",
            "Email" : "saurabh@gmail.com",
            "Age"   : "55 Years"
        },{
            "Index" : "3",
            "Name"  : "abhijeet singh",
            "Email" : "singh.abhijeet@gmail.com",
            "Age"   : "30 Years"
        },{
            "Index" : "4",
            "Name"  : "siddharth srivastava",
            "Email" : "krs@gmail.com",
            "Age"   : "62 Years"
        },{
            "Index" : "5",
            "Name"  : "vaibhavh",
            "Email" : "vaibhavh@gmail.com",
            "Age"   : "54 Years"
        },{
            "Index" : "6",
            "Name"  : "vibhor Singh",
            "Email" : "vibhor@gmail.com",
            "Age"   : "30 Years"
        },{
            "Index" : "7",
            "Name"  : "vikash Singh",
            "Email" : "biikash@gmail.com",
            "Age"   : "39 Years"
        },{   
            "Index" : "8", 
            "Name"  : "Anuj Singh",
            "Email" : "singh.anuj@gmail.com",
            "Age"   : "23 Years"
        }
    ]
    
    $scope.reverse = false; 
    $scope.orderByMe = function(Obj) {
        $scope.myOrderBy = Obj;
        if($scope.reverse){
            $scope.reverse = false; 
        }
        else{
            $scope.reverse = true; 
        }
    }
});