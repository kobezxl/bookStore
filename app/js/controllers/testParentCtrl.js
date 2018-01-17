/**
 * Created by yundanchai on 2017/10/11.
 */
TestParentCtrl.$inject = ['$scope','toastr','$state'];

function TestParentCtrl($scope,toastr,$state) {

 /*   $scope.name = "mark";
    $scope.sexy = "male";
    $scope.age = "30";
    $scope.say = function (sth) {
        alert(sth);
    };*/

/*
    $scope.title1 = 'Click me to expand';
    $scope.text = 'Hi there folks, I am the content'
        + 'that was hidden but is now shown.';*/

    var GetAllEmployee = function () {
        var postData = {
            pageNo: $scope.paginationConf.currentPage,
            pageSize: $scope.paginationConf.itemsPerPage
        }

        $http({
            method: 'POST',
            data:postData,
            url: "http://172.29.20.33:3000/booklist"

        }).then(function (data) {

            $scope.tableResult.pageTotal=data.data.pageTotal;
            $scope.tableList=data.data.result;
            console.log( $scope.tableResult,333333);
            $scope.paginationConf.totalItems = data.data.pageTotal;
            $scope.persons = data.data.result;
        })
        BusinessService.list(postData).success(function (response) {

        });
    }

    //配置分页基本参数

    $scope.paginationConf = {
        currentPage: 1,
        itemsPerPage: 5
    };
    /***************************************************************
     当页码和页面记录数发生变化时监控后台查询
     如果把currentPage和itemsPerPage分开监控的话则会触发两次后台事件。
     **************************************************************/
    $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', GetAllEmployee);
}
angular.module('controller').controller("TestParentCtrl", TestParentCtrl);