Twitter.TweetsController = Ember.ArrayController.extend({
  actions: {
    tweet: function() {
      var newTweet = {id: "4", tweet: this.get('new-tweet')};
      debugger
      tweets.addObject(newTweet);
    }
  }
})
