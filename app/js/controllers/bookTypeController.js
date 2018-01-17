/**
 * Created by YundanChai on 2017/7/10.
 */
import channelROITpl from '../../templates/modal-ROIcondition-setting.html';
ChannelROIlistController.$inject = ['$scope', '$uibModal','$filter','toastr'];
function ChannelROIlistController($scope,$uibModal,$filter,toastr) {
    let dateFilter = $filter('date');
    $scope.datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log($scope.datas);
    $scope.ROIlist = [
        {name: "万普", data: "20170711", regnum: "100", regPeople: "100"},
        {name: "万普", data: "20170709", regnum: "99", regPeople: "100"},
        {name: "万普", data: "20170710", regnum: "88", regPeople: "100"},
        {name: "万普", data: "20170712", regnum: "77", regPeople: "100"},
    ];
    $scope.selectOutputSetting="";
    const onModalClose=(setting)=>{
        $scope.selectOutputSetting=setting;
    };

    $scope.downloadDetail=function () {
        alert(1111);
    };
    $scope.openSelectModal = function () {
        let selectModalInstance = $uibModal.open({
            size: 'ml',
            backdrop: 'static',
            keyboard: false,
            animation: true,
            template: channelROITpl,
            controller:['$scope','$uibModalInstance',function ($scope,$uibModalInstance) {
                $scope.formData={
                    selectchannel:{},
                    dateStart:"",//new Date();
                    dateEnd: "",//new Date();
                    selectedROIList:{}
                };

                $scope.localLang = {
                    selectAll: "全选",
                    selectNone: "全不选",
                    reset: "重置",
                    search: "搜索...",
                    nothingSelected: "请选择"
                };
                $scope.channellist=[
                    {id:"001",name:"渠道1"},
                    {id:"002",name:"渠道2"},
                    {id:"003",name:"渠道3"}
                ];
                $scope.ROIlist=[
                    {roiid:"001",Roiname:"维度1"},
                    {roiid:"002",Roiname:"维度2"},
                    {roiid:"003",Roiname:"维度3"}
                ];
                $scope.popup={
                    opened:false,
                };

                $scope.open = function(){
                   $scope.popup.opened=true;
               };

               $scope.popup2={
                   opened:false,
               };

               $scope.open2 = function () {
                   $scope.popup2. opened=true;
               };

            /*   $scope.getSeletedItem=function () {
                   console.log( $scope.selectedROIList);
                   var names="";
                   angular.forEach($scope.selectedROIList,function (data,index,array) {
                       //data等价于array[index]
                       console.log(data.roiid+'='+array[index].Roiname);
                       names+=array[index].Roiname +",";
                   })
                   console.log(names);
                   $scope.selectedROIList=names;
               }*/
               $scope.saveSettings=function (basicForm) {
                    console.log( $scope.formData);
                    var name="";
                    if($scope.formData.selectchannel!=null && !angular.equals({},$scope.formData.selectchannel)){
                        name+=$scope.formData.selectchannel.name+"、";
                    }
                    if($scope.formData.dateStart!="" && $scope.formData.dateEnd!=""){
                        name+=dateFilter($scope.formData.dateStart , 'yyyy-MM-dd')+"-"+dateFilter($scope.formData.dateEnd,'yyyy-MM-dd')+"、";
                    }
                   else if($scope.formData.dateStart!="" ){
                        name+= dateFilter($scope.formData.dateStart , 'yyyy-MM-dd') + "、";
                   }
                   else if($scope.formData.dateEnd!=""){
                        name+= dateFilter($scope.formData.dateEnd , 'yyyy-MM-dd') + "、";
                    }
                   if($scope.formData.selectedROIList.length > 0){
                        angular.forEach($scope.formData.selectedROIList,function (data,index,array){
                            name+=data.Roiname+"、";
                        });
                   }
                   onModalClose(name);
                   $uibModalInstance.dismiss('cancel');
                   basicForm.$setPristine();//重置表单纯净状态
                   toastr.success("保存成功！");
               };

               $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');

                };
            }]
        });

        selectModalInstance.opened.then(function () {
            console.log('modal is opened');
        });
        selectModalInstance.result.then(function (result) {
            console.log(result);
        }, function (reason) {
            console.log(reason);
        });
     };
}

angular.module('controller').controller("ChannelROIlistController",ChannelROIlistController);