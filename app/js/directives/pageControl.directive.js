/**
 * Created by YundanChai on 2017/7/31.
 */
import pageControlTmp from "../../view/templates/pagination.html";
angular.module('directives')
    .directive('pagePagition',[function () {
        return{
            restrict:'AECM',
            replace:true,
            template:pageControlTmp,
            scope:{
                tableData: '=',
                ename:'@'
            },
            controller:['$scope',function ($scope) {
                console.log($scope.tableData,1);
                $scope.names=[2,4,6,8,10];
                $scope.selectedName=4;
                $scope.pgs={
                    firstPage:1,
                    lastPage:'',
                    currentPage:'',
                    size:1,
                    pageTotal:1,
                    page:[1,2,3]
                }

                $scope.$on('moduleInit',function (enent,params) {
                    console.log(params,222,$scope.ename);
                    setPages(params);
                })

                  let  setPages = function (data) {
                      $scope.pgs.currentPage=data.pageNo;
                      $scope.pgs.size=data.pageSize;
                      $scope.pgs.pageTotal =data.pageTotal;
                      $scope.pgs.lastPage =data.pageTotal;
                      console.log($scope.pgs,3);
                  }
                  //页面跳转
                  $scope.gotoPage=function (page) {
                     //当前页码等于当前页数，不触发查询事件
                      if($scope.pgs.currentPage==page){
                          return;
                      }
                      $scope.pgs.currentPage=page;
                      console.log($scope.pgs.currentPage,$scope.ename);
                      //触发父类用ON接收触发查询事件
                      $scope.$emit($scope.ename,$scope.pgs.currentPage,$scope.selectedName);
                  }
                  //每页条数选择事件
                  $scope.selectChange = function () {
                      console.log($scope.pgs.currentPage);
                      $scope.$emit($scope.ename,$scope.pgs.currentPage,$scope.selectedName);
                  }
                  //尾页
                  $scope.gotoNext = function () {
                    let last = $scope.pgs.page[$scope.pgs.page.length-1];
                    console.log(last);
                    /*//下一页
                    if(last < $scope.pgs.pageTotal){
                        last=last+1
                        $scope.pgs.page.push(last);
                        console.log($scope.pgs.page);
                    }*/

                      if($scope.pgs.currentPage<$scope.pgs.pageTotal){
                          let pageArray=[];
                          for(var i=1;i<=$scope.pgs.pageTotal;i++){
                                  pageArray.push(i);
                          }
                          $scope.pgs.page=pageArray;
                          $scope.pgs.currentPage=$scope.pgs.lastPage;
                          //触发父类用ON接收触发查询事件
                          $scope.$emit($scope.ename,$scope.pgs.currentPage,$scope.selectedName);
                      }

                }
                    //首页
                    $scope.gotoLast = function () {
                        let first = $scope.pgs.page[0];
                        console.log($scope.pgs.currentPage);
                        if($scope.pgs.currentPage==first){
                            return;
                        }else{
                            $scope.pgs.currentPage=first;
                            //触发父类用ON接收触发查询事件
                            $scope.$emit($scope.ename,$scope.pgs.currentPage,$scope.selectedName);
                        }
                    }


            }],
            link:function (scope,elem,attrs) {
            /*    scope.names=[2,4,6,8,10];
                scope.selectedName=4;
                scope.pgs={
                    firstPage:'',
                    lastPage:'',
                    currentPage:'',
                    size:1,
                    pageTotal:1
                }
                scope.$watch('scope.tableResult',function (newVal,oldVal) {
                    console.log(newVal,1212);
                    console.log(oldVal,1213);
                    if(scope.tableResult!=null && scope.tableResult!=undefined){
                        scope.pgs.currentPage=scope.tableResult.pageNo;
                        scope.pgs.size=scope.tableResult.size;
                        scope.pgs.pageTotal =scope.tableResult.pageTotal;
                    }
                })*/

            }
        }
    }])

    .directive('childC', function () {
        return {
            restrict: 'E',
            scope: {
                myName: '=',
                mySexy: '=mySexyAttr',
                myAge: '@',
                onSay: '&'
            },
            template: function (elem, attr) {
                return "{}:" + document.getElementById('t1').innerHTML;
            },
            controller: function ($scope) {
                $scope.onSay();
            }
        };
    })
    .directive('expander', function(){
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: { title2:'=expanderTitle' },
            template: '<div>' +
            '<div class="title" ng-click="toggle()">{{title2}}</div>' +
            '<div class="body" ng-show="showMe" ng-transclude></div>' +
            '</div>',
            link: function(scope, element, attrs) {
                scope.showMe = false;
                scope.toggle = function toggle() {
                    scope.showMe = !scope.showMe;
                }
            }
        }
    });



/*
//false：共享作用域
.directive('childA', function () {
    return {
        restrict: 'E',
        scope: false,
        template: function (elem, attr) {
            return "false:" + document.getElementById('t1').innerHTML;
        }
    };
})

//true：继承父域，并建立独立作用域
.directive('childB', function () {
    return {
        restrict: 'E',
        scope: true,
        template: function (elem, attr) {
            return "true:" + document.getElementById('t1').innerHTML;
        },
        controller: function ($scope) {
            $scope.parentName = "parent222";

            //已声明的情况下，$scope.$watch监听的是自己的parentName
            $scope.$watch('parentName', function (n, o) {
                console.log("child watch " + n);
            });

            //$scope.$parent.$watch监听的是父域的parentName
            $scope.$parent.$watch('parentName', function (n, o) {
                console.log("parent watch" + n);
            });
        }
    };
})

//{}：不继承父域，建立独立作用域
.directive('childC', function () {
    return {
        restrict: 'E',
        scope: {},
        template: function (elem, attr) {
            return "{}:" + document.getElementById('t1').innerHTML;
        },
        controller: function ($scope) {
            console.log($scope);
        }
    };
});
*/

