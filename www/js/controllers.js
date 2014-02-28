angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {
  console.log('MainCtrl');
  
  $scope.sideMenuClick = function() {
    console.log('sideMenuClick');
    $scope.toggleMenu();
  };
  
})
.controller('LoginCtrl', function($scope, $state) {
  
  $scope.login = function() {
  	$state.go('app.dashboard');
  }

})
.controller('DashboardCtrl', function($scope, $state, StockService, DashboardService) {
	
  $scope.stocks =  StockService.all();
  $scope.data = DashboardService.data();

	$scope.goTo = function(stateName, obj) {
		$state.go(stateName, obj);
	}

  $scope.snapshot  = function(stockId) {
    console.log(stockId);
    $state.go('app.stock', { stockId: stockId })
  }

	$scope.onRefresh = function() {
		console.log("Refreshed!");
		setTimeout(function() { 
			$scope.$broadcast('scroll.refreshComplete');
		}, 2000);
	}

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
.controller('StockCtrl', function($scope, $stateParams, $state, StockService) {
    
  $scope.stock = StockService.get($stateParams.stockId);

  $scope.leftButtons = [{
      type: 'button-dark',
      content: '<i class="icon ion-stats-bars"></i>',
      tap: function(e) {
      	$state.go('app.scorecard');
      }
  }];

});


