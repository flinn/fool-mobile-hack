angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {
  console.log('MainCtrl');
  
  $scope.sideMenuClick = function() {
    console.log('sideMenuClick');
    $scope.toggleMenu();
  };
  
})
.controller('SettingsCtrl', function($scope, $state) {
  

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
    $state.go('app.stock', { stockId: stockId });
  }

	$scope.onRefresh = function() {
		console.log("Refreshed!");
		setTimeout(function() { 
			$scope.$broadcast('scroll.refreshComplete');
		}, 2000);
	}

  $scope.rightButtons = [{
    type: 'button-icon',
    content: '<i class="icon ion-document-text news"><span style="color: White; font-weight: bolder; position: absolute; left: 7px; top: 10px;">3</span></i>',
    tap: function(e) {
      $scope.goTo('app.news');
    }
  }, {
    type: 'button-icon',
    content: '<i class="icon ion-alert-circled trade"><span style="color: White; font-weight: bolder; position: absolute; left: 12px; top: 10px;"></span></i>',
    tap: function(e) {
      $scope.goTo('app.tradealerts');
    }
  }];

})
.controller('NewsCtrl', function($scope, $state, NewsService) {

  $scope.news = NewsService.all();

  $scope.goToArticle = function() {
    window.location = 'http://newsite.fool.com/investing/general/2014/01/13/10-money-lessons-from-elderly-americans-who-have-s.aspx';
  }

})
.controller('ScorecardCtrl', function($scope, $state, $ionicModal, StockService) {

  $scope.stocks = StockService.all();

  $scope.snapshot  = function(stockId) {
    console.log(stockId);
    $state.go('app.stock', { stockId: stockId });
  }

  $scope.onRefresh = function() {
    console.log("Refreshed!");
    setTimeout(function() { 
      $scope.$broadcast('scroll.refreshComplete');
    }, 2000);
  }

  $ionicModal.fromTemplateUrl('templates/add-stock.html', function(modal) {
    $scope.modal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  //Be sure to cleanup the modal
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  $scope.rightButtons = [{
      type: 'button-icon',
      content: '<i class="icon ion-compose"></i>',
      tap: function(e) {
        $scope.openModal();
      }
  }];

})
.controller('TradeAlertCtrl', function($scope, $state, AlertService) {

  $scope.alerts = AlertService.all();

  $scope.onRefresh = function() {
    console.log("Refreshed!");
    setTimeout(function() { 
      $scope.$broadcast('scroll.refreshComplete');
    }, 2000);
  }

})
.controller('StockCtrl', function($scope, $stateParams, $state, StockService, navMenu) {

  $scope.menuButton = navMenu;
    
  $scope.stock = StockService.get($stateParams.stockId);

  $scope.currentPrice = [{
    type: 'button',
    content: '<span class="">{{ stock.current_price }}</span>',
    tap: function(e) {
      $scope.togglePrice();
    }
  }];

});


