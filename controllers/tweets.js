Twitter.TweetsController = Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ['id'],
  actions: {
    tweet: function() {
      var newTweet = {id: (tweets.length + 1), tweet: this.get('new-tweet')};
      tweets.addObject(newTweet);
    }
  }
});
