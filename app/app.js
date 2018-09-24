(function() {
	'use strict';

	angular.module('ken-ng-reddit', [])
		.component('reddit', {
			controller: function() {
				const self = this;

				self.$onInit = () => {
					self.postsArr = [];
				};

				self.tab = 1;

				self.setTab = (selected) => {
					self.tab = selected;
				};

				self.isSet = (tab) => {
					return self.tab === tab;
				};

				self.addPost = () => {
					if (self.posts && self.posts.title && self.posts.body &&
						self.posts.author && self.posts.image_url) {
						self.postsArr.push({
							title: self.posts.title,
							body: self.posts.body,
							author: self.posts.author,
							image_url: self.posts.image_url,
							created_at: Date.now(),
							votes: 0,
							comments: [{
								text: 'Love it!!'
							}]
						});

						self.posts = {
							title: '',
							body: '',
							author: '',
							img_url: ''
						};
					}

					console.log(self.postsArr);
				};
			},
			templateUrl: '/app/templates/reddit.html',
		});
})();
