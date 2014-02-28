angular.module('starter', ['ionic', 'starter.services', 'starter.controllers', 'starter.directives', 'ngTouch'])
.config(function($stateProvider, $urlRouterProvider) {  
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/appnav.html"
    })
    .state('app.dashboard', {
      url: '/dashboard',
      views: {
       'appContent': {
          templateUrl: 'templates/dashboard.html',
          controller: 'DashboardCtrl'
        }
      }
    })
    .state('app.scorecard', {
      url: '/scorecard',
      views: {
        'appContent': {
          templateUrl: 'templates/scorecard.html',
          controller: 'ScorecardCtrl'
        }
      }
    })
    .state('app.stock', {
      url: '/stock/:stockId',
      views: {
        'appContent': {
          templateUrl: 'templates/stock.html',
          controller: 'StockCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/app/dashboard');

}).run(function($rootScope, $state) {
  $rootScope.toggleMenu = function() {
    var $content = $('.menu-content');
    if( $content.hasClass('inactive') ) {
      $content.removeClass('inactive');
    } else {
      $content.addClass('inactive');
    }
  };
  
  $rootScope.go = function(path) {
    console.log('go',path);
    $state.go(path);
  };
  
  $rootScope.menuButton = [
    {
      type: 'button-dark',
      content: '<i class="icon ion-navicon nav-jester"></i>',
      tap: function(e) {
        //<i class="icon ion-navicon"></i>
        $rootScope.toggleMenu();
      }
    }
  ];
});

        
        