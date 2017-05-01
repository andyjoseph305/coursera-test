(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchController', function LunchController($scope) {


// LunchController.$inject = ['$scope'];

$scope.itemlist =""; //input list

$scope.splited = function () { //funtion as per lecture06
var comma = ',';
var listlength = splitString($scope.itemlist, comma);//use the input scope here
$scope.longlist = listlength;
};
function splitString(stringToSplit, separator) { //split function as per http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
var arrayOfStrings = stringToSplit.split(separator);
return arrayOfStrings.length; //this was tricky
}
$scope.checkList = function () {
    if ($scope.longlist<=1) {
      $scope.sayMessage= "Please enter data first";

      } else if ($scope.longlist<=3){
      $scope.sayMessage= "Enjoy";
    }
    else if ($scope.longlist>3){
      $scope.sayMessage= "too much";
    }
  };

});



})();

