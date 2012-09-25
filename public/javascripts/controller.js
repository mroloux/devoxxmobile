module = angular.module('devoxx', ['ngResource']);

function ConferenceDaysController($scope, $resource) {
	var start = moment("2012-11-12");
	var lengthInDays = 5;
	$scope.days = (function() {
		var days = [];
		for(i = 0; i < lengthInDays; ++i) {
			var currentDay = moment(currentDay).add('days', 1);
			days.push(currentDay);
		}
		return days;
	})();
}

function ScheduleController($scope, $resource) {
	$resource('http://cfp.devoxx.com/rest/v1/events/7/schedule/day/1').query(function(talks) {
		var dateFormat = "YYYY-MM-dd HH:mm:ss";
		talks.forEach(function(talk) {
			talk.fromTime = moment(talk.fromTime, dateFormat);
			talk.toTime = moment(talk.toTime, dateFormat);
		});
		$scope.talks = talks.filter(function(talk) {
			return talk.title != undefined;
		});
	});
}

ScheduleController.$inject = [ '$scope', '$resource' ];