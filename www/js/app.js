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
    .state('app.tradealerts', {
      url: '/tradealerts',
      views: {
        'appContent': {
          templateUrl: 'templates/trade-alerts.html',
          controller: 'TradeAlertCtrl'
        }
      }
    })
    .state('app.news', {
      url: '/news',
      views: {
        'appContent': {
          templateUrl: 'templates/news.html',
          controller: 'NewsCtrl'
        }
      }
    })
    .state('app.settings', {
      url: '/settings',
      views: {
        'appContent': {
          templateUrl: 'templates/settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })
    .state('app.stock', {
      url: '/stock/:stockId',
      views: {
        'appContent': {
          templateUrl: 'templates/stock.html',
          controller: 'StockCtrl',
          resolve: { 
            navMenu: function($rootScope) {
              return $rootScope.menuButton;
            },
          }
        }
      }
    });

  $urlRouterProvider.otherwise('/app/stock/1');

}).run(function($rootScope, $state) {
  $rootScope.toggleMenu = function() {
    var $content = $('.menu-content');
    if( $content.hasClass('inactive') ) {
      $content.removeClass('inactive');
    } else {
      $content.addClass('inactive');
    }
  };
  
  $rootScope.go = function(path, obj) {
    console.log('go',path, obj);
    $state.go(path, obj);
  };
  
  $rootScope.menuButton = [
    {
      type: 'button-icon',
      content: '<i class="icon ion-navicon-round"></i>',
      tap: function(e) {
        //ELVIS NAV: <span class="icon ion-navicon nav-jester"></span>
        $rootScope.toggleMenu();
      }
    }
  ];
});

        
        