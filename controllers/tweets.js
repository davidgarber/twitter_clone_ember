Twitter.TweetsController = Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ['time'],
  actions: {
    tweet: function() {
      var newTweet = {id: (tweets.length + 1), tweet: this.get('new-tweet'), time: (Date.now())};
      tweets.addObject(newTweet);
    }
  }
});
