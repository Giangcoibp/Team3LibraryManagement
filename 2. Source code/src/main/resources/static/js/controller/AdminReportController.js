var app = angular.module('myAdmin');


app.controller('AdminReportController', function($http, $scope, $routeParams, $q) {
	
	$scope.ticketData = {
		     ticketModel: 'ticketReportByWeek',
		     ticketOptions: [
		       {id: 'ticketReportByWeek', name: 'Weekly'},
		       {id: 'ticketReportByMonth', name: 'Monthly'},
		       {id: 'ticketReportByYear', name: 'Yearly'}
		     ]
		    };
	$scope.incomeData = {
		     incomeModel: 'incomeReportByWeek',
		     incomeOptions: [
		       {id: 'incomeReportByWeek', name: 'Weekly'},
		       {id: 'incomeReportByMonth', name: 'Monthly'},
		       {id: 'incomeReportByYear', name: 'Yearly'}
		     ]
		    };
	

	var dataReport = [];
	init();						
	function init() {
		$http({
			method: 'get',
			url: "http://localhost:9000/LMS/ticket/quantity"
		}).success(function(data, status, headers, config){			
			dataReport= data;
		})
		.error(function(data, status, headers, config){});
	}
	
 	$scope.changeTicketReportType = function(){
 		var type = $scope.ticketData.ticketModel; 		
 		if(angular.equals(type, "ticketReportByMonth")) {
 			$scope.ticketReport = dataReport.reportByMonth;
 		}else if(angular.equals(type, "ticketReportByWeek")){
 			$scope.ticketReport = dataReport.reportByWeek;
 		}else if(angular.equals(type, "ticketReportByYear")){
 			$scope.ticketReport = dataReport.reportByYear;
 		}
 	}
 	$scope.changeIncomeReportType = function(){ 		
 		var type = $scope.incomeData.incomeModel; 		
 		if(angular.equals(type, "incomeReportByMonth")) {
 			$scope.incomeReport = ticketReportByMonth;
 		}else if(angular.equals(type, "incomeReportByWeek")){
 			$scope.incomeReport = ticketReportByWeek;
 		}else if(angular.equals(type, "incomeReportByYear")){
 			$scope.incomeReport = ticketReportByYear;
 		}
 	}
});
