angular.module('starter.directives', [])

.directive('card', function() {
	return {
		templateUrl: 'templates/stock-card.html'
	}
})
.directive('posnegbadge', function() {
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
;
