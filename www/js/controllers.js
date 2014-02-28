angular.module('starter.controllers', [])

.controller('MainController', ['$scope', '$location',
  function($scope, $location) {

    console.log('MainController');

    $scope.goTo = function(page) {
      console.log('Going to ' + page);
      $scope.sideMenuController.toggleLeft();
      $location.url('/' + page);
    };

  }
])
.controller('LoginCtrl', function($scope, $state) {
  
  $scope.login = function() {
  	$state.go('dashboard');
  }

})
.controller('DashboardCtrl', function($scope, $state, StockService, DashboardService) {
	
  $scope.stocks =  StockService.all();
  $scope.data = DashboardService.data();

	$scope.myScorecard = function() {
		$state.go('scorecard');
	}

  $scope.snapshot  = function(stockId) {
    $state.go('stock.detail', { stockId: stockId })
  }

	$scope.onRefresh = function() {
		console.log("Refreshed!");
		setTimeout(function() { 
			$scope.$broadcast('scroll.refreshComplete');
		}, 2000);
	}

	$scope.leftButtons = [
    { 
      type: 'button-dark',
      content: '<i class="icon ion-unlocked"></i>',
      tap: function(e) {
      	$state.go('login');
      }
    }
  ];

})
.controller('ScorecardCtrl', function($scope, $state, StockService) {

  $scope.stocks = StockService.all();

  $scope.leftButtons = [{
      type: 'button-dark',
      content: '<i class="icon ion-home"></i>',
      tap: function(e) {
      	$state.go('dashboard');
      }
  }];

})
.controller('StockChartCtrl', function($scope, $stateParams, $state, StockService, pageTitle) {

  $scope.navTitle = pageTitle;
  $scope.stock = StockService.get($stateParams.stockId);
  $scope.leftButtons = [{
      type: 'button-dark',
      content: '<i class="icon ion-stats-bars"></i>',
      tap: function(e) {
      	$state.go('scorecard');
      }
  }];

})
.controller('StockNewsCtrl', function($scope, $stateParams, $state, StockService, pageTitle) {
  $scope.stock = StockService.get($stateParams.stockId);

  $scope.navTitle = pageTitle;

  $scope.leftButtons = [{
      type: 'button-dark',
      content: '<i class="icon ion-stats-bars"></i>',
      tap: function(e) {
      	$state.go('scorecard');
      }
  }];

})
.controller('StockCtrl', function($scope, $stateParams, $state, StockService) {
  $scope.stock = StockService.get($stateParams.stockId);

  $scope.leftButtons = [{
      type: 'button-dark',
      content: '<i class="icon ion-stats-bars"></i>',
      tap: function(e) {
      	$state.go('scorecard');
      }
  }];

});


