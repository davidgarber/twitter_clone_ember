Twitter.TweetRoute = Ember.Route.extend({
  model: function(params){
    return tweets.findBy('id', parseInt(params.tweets_id));
  }
})
