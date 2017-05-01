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

    } else if ($scope.longlist>1){
      $scope.sayMessage= "Enjoy";
    }
    else if ($scope.longlist>3){
      $scope.sayMessage= "too much";
    }
  };

});



})();



//
// // (function(){
// //
// //   angular.module('LunchCheck', [])
// //   .controller('checkForController', CheckForController);
// //
// //   CheckForController.$inject = ['$scope'];
// //   function CheckForController($scope) {
// //
// //     $scope.items = [];
// //
// //   }
// //
// // })();
//
// (function () {
// 'use strict';
//
// angular.module('myFirstApp', [])
// .controller('MyFirstController', function ($scope) {
//
// //
// // .controller('LunchcController', LunchcController);
// //
// // LunchcController.$inject = ['$scope'];
// // function LunchController($scope) {
//  $scope.name = "abc";
//  });
//  })();
// //   $scope.items = function splitString(stringToSplit, separator) {
// //   var arrayOfStrings = stringToSplit.split(separator);
// // }
// // var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
// //
// // var comma = ',';
// // splitString(monthString, comma);
// //
// // var myString = 'Hello World. How are you doing?';
// // var splits = myString.split(' ', 3);
