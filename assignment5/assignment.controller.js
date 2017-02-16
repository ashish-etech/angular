var app=angular.module("assignment5",[]);
app.controller("ctrl", function($scope) {
   
    $scope.Obj = {'val1': '','val2':'','alert':false,'alert1':false,'alert2':false ,'alert3':false,'alert4':false };
    $scope.count=0;
    $scope.value1=null;
    $scope.add = function(){
        if (!$scope.value2 || !$scope.value1 ) {
            $scope.Obj.alert = true;
            $scope.Obj.alert1 = false;
            $scope.Obj.alert2 = false;
            $scope.Obj.alert3 = false;
            $scope.Obj.alert4 = false;
            $scope.preventDefault();
        }
        else{
            if (!isNaN($scope.value1,$scope.value2)){
                $scope.Obj.val1=parseInt($scope.value1);
                $scope.Obj.val2=parseInt($scope.value2);
                $scope.ans=$scope.Obj.val1+$scope.Obj.val2;
                $scope.Obj.alert4 = true;
            }
            else{
                $scope.ans=$scope.value1+$scope.value2;
                $scope.Obj.alert4 = true;
            }
            $scope.clear1=function(){
                $scope.value1=null;
                $scope.value2=null;
                $scope.Obj.alert4 = false;

            };
            $scope.clear2=function(){
                $scope.value2=null;
                $scope.Obj.alert4 = false;
            };
        }
    };
    $scope.clear=function(){
        $scope.value1=null;
        $scope.value2=null;
        $scope.ans='';
        $scope.Obj.alert1 = false;
        $scope.Obj.alert2 = false;
        $scope.Obj.alert = false;
        $scope.Obj.alert3 = false;
        $scope.Obj.alert4 = false;
    };

    $scope.check=function(){
        if ($scope.value1==null) {
            $scope.Obj.alert3 = true;
            $scope.preventDefault($scope.value2='');
        }
        else{
            $scope.Obj.alert3 = false;
            if (!isNaN($scope.value1)){
                if (isNaN($scope.value2)) {
                    $scope.Obj.alert1 = true;
                    $scope.preventDefault($scope.value2='');
                    $scope.ans=null;
                }else{
                    $scope.Obj.alert1 = false;
                }
            }
            else{
                if (!isNaN($scope.value2)) {
                    $scope.Obj.alert2 = true;
                    $scope.preventDefault($scope.value2='');
                    $scope.ans=null;
                }
                else{
                    $scope.Obj.alert2 = false;
                }
            }
    	}
    };
    
    $scope.validate=function(e){
    	$scope.Obj.alert = false;
    	$scope.Obj.alert3 = false;
    	$scope.Obj.alert1 = false;
    	$scope.Obj.alert2 = false;
    	$scope.Obj.alert4 = false;
    	$scope.count++;
    	$scope.firstChar=$scope.value1.charAt(0);
    	if($scope.count>1){
            if (($scope.firstChar>=0 && $scope.firstChar<=9) && !((e.keyCode<65 || e.keyCode>90) && (e.keyCode<97 || e.keyCode>123) && e.keyCode!==32)){
                $scope.Obj.alert1 = true;
                e.preventDefault();
            }
            if (!($scope.firstChar>=0 && $scope.firstChar<=9) && ((e.keyCode<65 || e.keyCode>90) && (e.keyCode<97 || e.keyCode>123) && e.keyCode!==32)){
                $scope.Obj.alert2 = true;
                e.preventDefault();
            }
        }
    };
});