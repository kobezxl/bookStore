/**
 * Created by YundanChai on 2017/7/28.
 */
DetailListController.$inject = ['$scope','toastr','$http','$stateParams','$state'];
function DetailListController($scope,toastr,$http,$stateParams,$state) {

    //console.log($stateParams);
    $scope.names=[2,4,6,8,10];
    $scope.selectedName=4;
    $scope.Result={};
    $scope.page = {
        pageNo:1,
        pageTotal:"",
        size:4,
    };
    //$scope.parentName = "parent11";

    //$scope.tableList=
    $scope.$on('ondisplay',function (event,no,size) {
        $scope.page.pageNo=no;
        getAllBookList( $scope.page.pageNo,size,$stateParams.bookType);
    })


    let getAllBookList = function (no,size,bookType) {
        let postData = {
            "pageNo":no?no:1,
            "pageSize": size ? size :5,
            "bookType": bookType
        };
        console.log(postData);
       //通过读取json文件获取值
        $http({
            method: 'POST',
            data:postData,
            url: "http://172.29.20.33:3000/booklist"

        }).then(function (data) {

            $scope.tableResult=data.data;
            $scope.tableList=data.data.result;
            console.log( $scope.tableResult,333333);
            $scope.$broadcast('moduleInit',$scope.tableResult);
            //分页算法
            /*$scope.tableList=data.data.result;
            $scope.tableResult=data.data;
            $scope.page.pageTotal=data.data.pageTotal;
            $scope.pageList=[];
            for(var i=1;i<= $scope.page.pageTotal;i++){
                $scope.pageList.push(i);
            }*/
        })

       /* $scope.$watch($scope.tableResult,function (newValue,oldValue) {
            
        })*/
        //连接服务器获取值
        /* $http({
            method: 'POST',
            params:postData,
            url: 'http://172.29.20.37:9090/bookstore/allBookList'
        }).then(function (data) {

           $scope.Result=data.data.result;
            console.log($scope.Result);
            $scope.tableList=$scope.Result.result
            $scope.page.pageTotal=$scope.Result.pageTotal;
            $scope.pageList=[];
            for(var i=1;i<= $scope.page.pageTotal;i++){
               $scope.pageList.push(i);
            }

        }, function errorCallback(response) {
            // 请求失败执行代码
        });*/
    }

    $scope.gotoPage = function (code) {
        $state.go('bookDetail', {code: code});
    }
    
    $scope.getCurrentItems = function (currentPage) {
        $scope.page.pageNo=currentPage;
        getAllBookList($scope.page.pageNo,$scope.selectedName, $stateParams.bookType);
    }

    $scope.selectChange= function (selectedName) {
        getAllBookList($scope.page.pageNo,selectedName, $stateParams.bookType);
    }

   /* $scope.$on("dr.reloadPagination", function (scope, no, size, state) {
        $scope.curPage = no;


    });*/

    $scope.initPage = function () {
        getAllBookList($scope.page.pageNo,$scope.selectedName, $stateParams.bookType);
    }

};


BookDetailController.$inject = ['$scope','toastr','$http','$stateParams'];
function BookDetailController($scope,toastr,$http,$stateParams) {
    $scope.code=$stateParams.code;



};

angular.module('controller').controller("DetailListController",DetailListController)
                            .controller("BookDetailController",BookDetailController);