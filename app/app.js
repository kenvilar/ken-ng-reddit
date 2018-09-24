(function() {
	'use strict';

	angular.module('ken-ng-reddit', ['angularMoment'])
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
							comments: [
								{
									text: 'Love it!!',
									author: 'John Doe',
									created_at: 1495072634391
								},
								{
									text: 'Hi, Ken!',
									author: 'Jane Doe',
									created_at: 1495072634391
								}
							]
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

				self.upVote = (post) => {
					post.votes++;
				};

				self.downVote = (post) => {
					if (post.votes >= 1) {
						post.votes--;
					}
				};

				self.addComment = (post) => {
					let commentsArr = post.comments;

					commentsArr.push({
						text: self.newComment.text,
						author: self.newComment.author,
						created_at: Date.now()
					});

					self.newComment = {
						title: '',
						author: '',
						created_at: ''
					};
				};
			},
			templateUrl: '/app/templates/reddit.html',
		});
})();
