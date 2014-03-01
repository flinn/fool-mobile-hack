angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {
  console.log('MainCtrl');
  
  $scope.sideMenuClick = function() {
    console.log('sideMenuClick');
    $scope.toggleMenu();
  };
  
})
.controller('SettingsCtrl', function($scope, $state) {
  
  $scope.login = function() {
    $state.go('app.dashboard');
  }

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
.controller('NewsCtrl', function($scope, $state, NewsService) {

  $scope.news = NewsService.all();

})
.controller('ScorecardCtrl', function($scope, $state, StockService) {

  $scope.stocks = StockService.all();

})
.controller('TradeAlertCtrl', function($scope, $state, StockService) {

  $scope.stocks = StockService.all();

})
.controller('StockCtrl', function($scope, $stateParams, $state, StockService, navMenu) {

  $scope.menuButton = navMenu;
    
  $scope.stock = StockService.get($stateParams.stockId);

  $scope.leftButtons = [{
      type: 'button-dark',
      content: '<i class="icon ion-stats-bars"></i>',
      tap: function(e) {
      	$state.go('app.scorecard');
      }
  }];

});


