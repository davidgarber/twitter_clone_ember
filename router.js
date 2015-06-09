Twitter.Router.map(function() {
  this.resource('tweets', {path: '/'});
  this.resource('replies', {path: 'replies/:tweets_id'});
  this.resource('tweet', {path: 'tweets/:tweets_id'});
});
