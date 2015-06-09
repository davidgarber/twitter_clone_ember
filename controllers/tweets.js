Twitter.TweetsController = Ember.ArrayController.extend({
  actions: {
    tweet: function() {
      var newTweet = {id: (tweets.length + 1), tweet: this.get('new-tweet')};
      tweets.addObject(newTweet);
    }
  }
});
