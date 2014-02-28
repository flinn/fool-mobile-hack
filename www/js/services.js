angular.module('starter.services', [])
.factory('StockService', function() {
  
  var stocks = [
    { daily_change: 4.1, current_price: 5.50, status: 'gainer', id: 0, title: 'Starbucks', exchange: 'NASDAQ', symbol: 'SBUX', description: 'Starbucks Corporation is a roaster, marketer and retailer of coffee operating in 60 countries.' },
    { daily_change: 10, current_price: 5.50, status: 'loser', id: 1, title: 'Tesla', exchange: 'NASDAQ', symbol: 'TSLA', description: 'Tesla Motors, Inc. (Tesla) designs, develops, manufactures and sells electric vehicles and advanced electric vehicle powertrain components.' },
    { daily_change: -2.6, current_price: 5.50, status: 'gainer', id: 2, title: 'Apple', exchange: 'NASDAQ', symbol: 'AAPL', description: 'Apple Inc. (Apple) designs, manufactures and markets mobile communication and media devices, personal computers, and portable digital music players, and a variety of related software, services, peripherals, networking solutions, and third-party digital content and applications.' },
    { daily_change: -14.2, current_price: 5.50, status: 'gainer', id: 3, title: 'Google', exchange: 'NASDAQ', symbol: 'GOOG', description: 'Google Inc. (Google), incorporated on October 22, 2002, is a global technology company.' },
    { daily_change: .33, current_price: 5.50, status: 'loser', id: 4, title: 'Micrsoft', exchange: 'NASDAQ', symbol: 'MSFT', description: 'Microsoft Corporation is engaged in developing, licensing and supporting a range of software products and services.' }
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
.factory('DashboardService', function($document) {
  var dashboard_data = {
    one_day_change: .29,
    total_value: 4435.55,
    returns_total: 45.66,
    returns_vs_sp: 12.66,
    returns_annualized: 1.44
  };

  return {
    data: function() {
      return dashboard_data;
    },

  }
});
