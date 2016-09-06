var myApp = angular.module('myApp',['angular-svg-round-progressbar']);
myApp.factory('mainFac',function(){
	factory = {};

	return factory;
});
myApp.controller('mainCon',function($scope,mainFac){
	$scope.one = {
		'a':0.1,
		'b':0.8,
		'c':0.3,
		'weight':150,
		'in':1000,
		'out':800,
		'day':'1'
	};
	$scope.two = {
		'a':0.9,
		'b':0.5,
		'c':0.5,
		'weight':180,
		'in':1500,
		'out':900,
		'day':'2'
	};
	$scope.three = {
		'a':0.3,
		'b':0.6,
		'c':0.8,
		'weight':160,
		'in':1250,
		'out':1000,
		'day':'3'
	};
	$scope.info=$scope.one;

	$scope.change = function(day){
		$scope.info = day;

	};
	$scope.days=false;
	$scope.toggleDays = function(){
		$scope.days = !$scope.days; 
	}
});