/**
 * Created by mathiswan on 2017-02-13.
 */

angular.module('myApp.dataService', []).

service('dataService',['$rootScope', function($rootScope){

    //console.log("getUserList\n\n\n\n\n");

    this.getUserList = function(){
        return ["user1","user2"];
    }

}]);