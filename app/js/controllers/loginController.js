
/* Controllers */


LoginController.$inject = ['$scope','toastr','$state'];

function LoginController($scope,toastr,$state) {

    $scope.view={
        name:"",
        password:""
    }
    $scope.goLogin= function () {
        console.log($scope.view.name,$scope.view.password);
        /*if($scope.view.name=='cyd'&&$scope.view.password=='123456'){
            toastr.success("登录成功！")
            $state.go('main.view1');
        }else{
            toastr.error("请输入正确的用户名和密码");
        }*/
       //$state.go('main.bookList');
    }

    $scope.contacts=[{id:1,name:"aa"},{id:2,name:"bb"},{id:3,name:"cc"}];
}
angular.module('controller').controller("LoginController", LoginController);