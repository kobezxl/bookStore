/**
 * Created by YundanChai on 2017/12/20.
 */
import bookDetail from '../.././view/detailTab.html'
angular.module('directives')
    .directive('tabs',[function () {
        return{
            scope:true,
            restrict:"AE",
            template:bookDetail,
            link:function ($scope) {
            },
            controller:function ($scope) {
                $scope.showBook=true;
                $scope.changeTab =function (data) {
                    if(data=='showBook'){
                        console.log(11);
                        $scope.showBook=true;
                        $scope.showAuth=false;
                    }else{
                        console.log(22);
                        $scope.showBook=false;
                        $scope.showAuth=true;
                    }
                }
            }
        };
    }])
    .directive('customDirective',[function () {
        return{
            restrict:'AE',
            template:'<div>{{test}}</div>',
            link:function (scope) {
                scope.test=scope.test+",and from link";
            },
            controller:function ($scope) {
                $scope.test="i am  from controller ";
            },
            controllerAs:'detailsController'
        }
    }])
