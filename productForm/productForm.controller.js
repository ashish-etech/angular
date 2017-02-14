
var app = angular.module("productForm", []);
app.controller("ctrl", function($scope) {
    $scope.index=0;
    $scope.total=0.00;
    $scope.data=[];
    $scope.realName=[	{"value":500,"id":"0","name":"Tutorials Development"},
                        {"value":300,"id":"1","name":"Tutorials Design"},
                        {"value":250,"id":"2","name":"Code Integration"},
                        {"value":220,"id":"3","name":"Training"}
                    ];
    $scope.myFunc= function(value,id) {
        if($scope.data[id]!=value) {
            $scope.data[id]=value;
            $scope.total=$scope.total+value;
        }
        else{
            $scope.total=$scope.total-value;
            $scope.data[id]=null;
        }
    }
	

// style for body
    $scope.mainDiv = {
        "margin-left": "5%",
        "margin-right":"5%",
        "padding-left": "5%",
        "padding-right": "5%",
        "padding-top": "2%",
        "padding-bottom": "5%",
        "background-color":"#61A1BC",
    }
    $scope.services={
        "font-family":" 'Playball', cursive",
        "color": "white",
        "font-size": "54px",
        "text-align":"center"
	}
    $scope.bottom={			
        "color": "white",
        "font-size": "20px",
        "padding-left": "3%",
        "margin-bottom":"-3%",
        "font-weight": "bold"
    }

});