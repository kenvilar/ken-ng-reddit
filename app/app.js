(function() {
	'use strict';

	angular.module('ken-ng-reddit', [])
		.component('reddit', {
			controller: function() {
				const self = this;

				self.tab = 1;
				self.setTab = (selected) => {
					self.tab = selected;
				};
				self.isSet = (tab) => {
					return self.tab === tab;
				};
			},
			templateUrl: '/app/templates/reddit.html',
		});
})();
