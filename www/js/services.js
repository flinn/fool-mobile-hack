angular.module('starter.services', [])
.factory('StockService', function() {
  
  var stocks = [
    { price_change: 1.23, daily_change: 1.7, thumb_image: 'img/starbucks_thumb.jpg', bg_image: 'img/starbucks.jpg', current_price: 70.96, status: 'gainer', id: 0, title: 'Starbucks', exchange: 'NASDAQ', symbol: 'SBUX', description: 'Starbucks Corporation is a roaster, marketer and retailer of coffee operating in 60 countries.' },
    { price_change: -7.73, daily_change: -3.06, thumb_image: 'img/tesla_thumb.jpg', bg_image: 'img/tesla.jpg', current_price: 244.81, status: 'loser', id: 1, title: 'Tesla', exchange: 'NASDAQ', symbol: 'TSLA', description: 'Tesla Motors, Inc. (Tesla) designs, develops, manufactures and sells electric vehicles and advanced electric vehicle powertrain components.' },
    { price_change: -1.43, daily_change: -2.36, thumb_image: 'img/apple_thumb.jpg', bg_image: 'img/apple.jpg', current_price: 526.24, status: 'gainer', id: 2, title: 'Apple', exchange: 'NASDAQ', symbol: 'AAPL', description: 'Apple Inc. (Apple) designs, manufactures and markets mobile communication and media devices, personal computers, and portable digital music players, and a variety of related software, services, peripherals, networking solutions, and third-party digital content and applications.' },
    { price_change: -3.56, daily_change: -0.29, thumb_image: 'img/google_thumb.jpg', bg_image: 'img/google.jpg', current_price: 1215.65, status: 'gainer', id: 3, title: 'Google', exchange: 'NASDAQ', symbol: 'GOOG', description: 'Google Inc. (Google), incorporated on October 22, 2002, is a global technology company.' },
    { price_change: 0.45, daily_change: 1.19, thumb_image: 'img/microsoft_thumb.jpg', bg_image: 'img/microsoft.jpg', current_price: 38.31, status: 'loser', id: 4, title: 'Micrsoft', exchange: 'NASDAQ', symbol: 'MSFT', description: 'Microsoft Corporation is engaged in developing, licensing and supporting a range of software products and services.' }
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
.factory('AlertService', function() {
  var alerts = [
    { id: 0, title: 'Buy More Intel', service: 'Million Dollar Portfolio', lead: '', author: 'Lyons George', pubtime: '3/1/2014' }, 
  ];

  return {
    all: function() {
      return alerts;
    },
    get: function(id) {
      // Simple index lookup
      return alerts[id];
    }
  }
})
.factory('NewsService', function() {
  var news = [
    { id: 0, title: 'This Oil Company is Printing Money', sector: 'Energy, Materials, & Utilities', lead: 'What\'s the quickest way to double an investment these days? EOG Resources thinks it has the answer.', url: 'xyz', author: 'Matthew Dilallo', pubtime: '3/1/2014', comments: 32, likes: 109 },
    { id: 1, title: 'Apple Reports Record-Breaking Weekend iPhone 5c, 5s Sales Numbers', sector: 'Tech & Telecom', lead: 'Today Apple announced it sold 9 million 5s and 5c iPhones in their first weekend on sale, nearly double the 5 million it sold last year over the iPhone 5\'s release weekend.', url: 'xyz', author: 'Matthew Dilallo', pubtime: '2/29/2014', comments: 109, likes: 549 },
    { id: 2, title: 'Why Newspaper Stocks Are Up Big This Year', sector: 'Newspaper & Journalism', lead: 'The Washington Post, New York Times, and Gannett have all beaten the S&P index performance by a wide margin this year. What is behind the return of newspaper stocks?', url: 'xyz', author: 'Adrian Campos', pubtime: '2/27/2014', comments: 3, likes: 19 },
    { id: 3, title: 'The Internet of Things: Our Best Shot at Battling Climate Change', sector: 'Tech & Telecom', lead: 'Alternative energy won\'t reverse the trends of carbon emissions. The biggest change we can make in carbon consumption lies in this technology', url: 'xyz', author: 'Tyler Crowe', pubtime: '3/2/2014', comments: 14, likes: 25 }
  ];

  return {
    all: function() {
      return news;
    },
    get: function(id) {
      // Simple index lookup
      return news[id];
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
    one_day_price: 128.63,
    total_value: '4,435.55',
    returns_total: 2.66,
    returns_percent: 3.21,
    returns_vs_sp: 12.66,
    vs_sp_percent: 0.42,
    returns_annualized: 1.44,
    annualized_percent: 3.22
  };

  return {
    data: function() {
      return dashboard_data;
    },

  }
});
