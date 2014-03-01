angular.module('starter.directives', [])

.directive('card', function() {
	return {
		templateUrl: 'templates/stock-card.html'
	}
})
.directive('posNegBadge', function() {
	return {
		templateUrl: 'templates/directives/pos-neg-badge.html',
		link: function(scope, element, attrs) {
			console.log(attrs);
			scope.value = attrs.value;
			if(attrs.value > 0) {
				scope.className = 'balanced';
			} else {
				scope.className = 'assertive';
			}
		},
		restrict: 'AE',
	}
})
.directive('lineChart', 
  ['$document', '$state', '$location', 
    function ($document, $state, $location) {
      return {
        restrict: 'EA',
        replace: false,
        template: '<div class="chart rickshaw_graph market-chart"></div>',
        controller: ['$scope', '$element', '$attrs',
          function($scope, $element, $attrs) {
            $(document).ready(function() {
              var format = function(n) {
	              var map = {
	                  1: '9 AM',
	                  5: '12 PM',
	                  10: '02 PM',
	                  15: '04 PM',
	                  19: 'Now'
	              };
	              return map[n];
	          	}
	          	var graph_width = $element.parent().width();
		          var graph = new Rickshaw.Graph({
		                  element: $element[0],
		                  renderer: 'multi',
		                  height: 100,
		                  width: graph_width, 
		                  stroke: true,
		                  series: [{data: [
		                              { x: 1, y: 28.46 },
		                              { x: 2, y: 44.86 },
		                              { x: 3, y: 43.80 },
		                              { x: 4, y: 38.70 },
		                              { x: 5, y: 45.89 },
		                              { x: 6, y: 48.38 },
		                              { x: 7, y: 38.88 },
		                              { x: 8, y: 19.20 },
		                              { x: 9, y: 42.37 },
		                              { x: 10, y: 38.13 },
		                              { x: 11, y: 37.49 },
		                              { x: 12, y: 37.88 },
		                              { x: 13, y: 26.77 },
		                              { x: 14, y: 31.37 },
		                              { x: 15, y: 31.98 },
		                              { x: 16, y: 48.36 },
		                              { x: 17, y: 41.07 },
		                              { x: 18, y: 41.40 },
		                              { x: 19, y: 42.02 }
		                          ],
		                          color: 'rgba(0,119,170,0.4)',
		                          stroke: 'rgba(35,118,169,1)',
		                          renderer: 'area'
		                      }, {data: [
		                          { x: 1, y: 43.80 },
		                          { x: 2, y: 43.80 },
		                          { x: 3, y: 43.80 },
		                          { x: 4, y: 43.80 },
		                          { x: 5, y: 43.80 },
		                          { x: 6, y: 43.80 },
		                          { x: 7, y: 43.80 },
		                          { x: 8, y: 43.80 },
		                          { x: 9, y: 43.80 },
		                          { x: 10, y: 43.80 },
		                          { x: 11, y: 43.80 },
		                          { x: 12, y: 43.80 },
		                          { x: 13, y: 43.80 },
		                          { x: 14, y: 43.80 },
		                          { x: 15, y: 43.80 },
		                          { x: 16, y: 43.80 },
		                          { x: 17, y: 43.80 },
		                          { x: 18, y: 43.80 },
		                          { x: 19, y: 43.80 }
		                      ],
		                      color: 'rgba(187,0,13,0.4)',
		                      renderer: 'line'
		                  }]
		          }); 
          
			        var x_axis = new Rickshaw.Graph.Axis.X({ 
			          graph: graph,
			          tickFormat: format
			        });
			        graph.renderer.unstack = true;
			        graph.render();
            });
          }
        ]
      };
    }
  ]
 )
.directive('posNegPercent', function() {
	return {
		templateUrl: 'templates/directives/pos-neg-percent.html',
		link: function(scope, element, attrs) {
			var dashnote = scope.dashnote = attrs.dashnote;
			var price = scope.price = attrs.price;
			var percert = scope.percent = attrs.percent;
			if(price > 0) {
				scope.direction = 'up'
				scope.className = 'balanced';
			} else {
				scope.direction = 'down'
				scope.className = 'assertive';
			}
		},
		restrict: 'AE',
	}
})
;
