/**
 * Created by mathiswan on 2017-02-13.
 */

angular.module('myApp.dataService', []).

service('dataService',['$rootScope','$http', '$q', function($rootScope, $http, $q, $scope){
    this.getUserList = function(){
        console.log('starting');

        var myurl = 'http://localhost:3001/service/user/list?callback=JSON_CALLBACK';

        return $http({
            method:'JSONP',
            url: myurl
        }).then(function (res) {
            console.log('a');
            return res.data;
        });

    }
}]);