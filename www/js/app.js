angular.module('starter', ['ionic', 'starter.services', 'starter.controllers', 'starter.directives', 'ngTouch'])
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

        
        