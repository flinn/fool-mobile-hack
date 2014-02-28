angular.module('starter', ['ionic', 'starter.services', 'starter.controllers', 'ngTouch'])
.config(function($stateProvider, $urlRouterProvider) {  
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'templates/dashboard.html',
      controller: 'DashboardCtrl'
    })
    .state('scorecard', {
      url: '/scorecard',
      templateUrl: 'templates/scorecard.html',
      controller: 'ScorecardCtrl'
    })
    .state('stock', {
      url: '/stock',
      abstract: true,
      templateUrl: 'templates/stock.html'
    })
    .state('stock.detail', {
      url: '/detail/:stockId',
      views: {
        'stock-detail': {
          templateUrl: 'templates/stock/detail.html',
          controller: 'StockCtrl'
        }
      }
    })
    .state('stock.news', {
      url: '/news/:stockId',
      views: {
        'stock-news': {
          templateUrl: 'templates/stock/news.html',
          controller: 'StockNewsCtrl',
          resolve : {
            pageTitle : function(TitleService) {
              return TitleService.getTitle()
            }
          }
        },
      }
    })
    .state('stock.chart', {
      url: '/chart/:stockId',
      views: {
        'stock-chart': {
          templateUrl: 'templates/stock/chart.html',
          controller: 'StockChartCtrl', 
          resolve : {
            pageTitle : function(TitleService) {
              return TitleService.getTitle()
            }
          }
        }
      }
    });

  $urlRouterProvider.otherwise('/login');
});

        
        
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
.controller('DashboardCtrl', function($scope, $state, StockService) {
	
  $scope.stocks =  StockService.all();

	$scope.myScorecard = function() {
		$state.go('scorecard');
	}

  $scope.snapshot  = function(ticker) {
    $state.go('stock.detail', { stockId: ticker })
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



angular.module('starter.directives', [])

.directive('card', function() {
	return {
		templateUrl: 'templates/stock-card.html'
	}
});
angular.module('starter.services', [])
.factory('StockService', function() {
  
  var stocks = [
    { status: 'gainer', id: 0, title: 'Starbucks', symbol: 'SBUX', description: 'Starbucks Corporation is a roaster, marketer and retailer of coffee operating in 60 countries.' },
    { status: 'loser', id: 1, title: 'Tesla', symbol: 'TSLA', description: 'Tesla Motors, Inc. (Tesla) designs, develops, manufactures and sells electric vehicles and advanced electric vehicle powertrain components.' },
    { status: 'gainer', id: 2, title: 'Apple', symbol: 'AAPL', description: 'Apple Inc. (Apple) designs, manufactures and markets mobile communication and media devices, personal computers, and portable digital music players, and a variety of related software, services, peripherals, networking solutions, and third-party digital content and applications.' },
    { status: 'gainer', id: 3, title: 'Google', symbol: 'GOOG', description: 'Google Inc. (Google), incorporated on October 22, 2002, is a global technology company.' },
    { status: 'loser', id: 4, title: 'Micrsoft', symbol: 'MSFT', description: 'Microsoft Corporation is engaged in developing, licensing and supporting a range of software products and services.' }
  ];

  return {
    all: function() {
      return stocks;
    },
    get: function(stockId) {
      // Simple index lookup
      return stocks[stockId];
    }
  }
})
.factory('TitleService', [ '$q','$timeout', function($q, $timeout) {
  
  var provideNewTitle = function() {
    var deferred = $q.defer();
    
    $timeout( function() {
      deferred.resolve('Title From Service');
    });
    
    return deferred.promise;
  };
  
  return {
    getTitle : provideNewTitle
  };
}])
.factory('MikesService', function($document) {
  return {
    message: function() {
      return 'Mikes Service';
    }
  }
});
