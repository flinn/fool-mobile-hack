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
