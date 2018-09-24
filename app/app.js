(function() {
	'use strict';

	angular.module('ken-ng-reddit', [])
		.component('reddit', {
			controller: function() {
				const self = this;

				self.$onInit = () => {
					self.posts = [];
				};

				self.tab = 1;

				self.setTab = (selected) => {
					self.tab = selected;
				};

				self.isSet = (tab) => {
					return self.tab === tab;
				};

				self.addPost = () => {
					self.posts.created_at = Date.now();
					self.posts.votes = 0;
					self.posts.commments = [];

					self.posts.push({
						title: self.posts.title,
						body: self.posts.body,
						author: self.posts.author,
						img_url: self.posts.img,
						created_at: self.posts.created_at,
						votes: self.posts.votes,
						comments: self.posts.commments
					});

					self.posts = {
						title: '',
						body: '',
						author: '',
						img_url: '',
						created_at: '',
						votes: '',
						comments: ''
					};

					console.log(self.posts);
				};
			},
			templateUrl: '/app/templates/reddit.html',
		});
})();
