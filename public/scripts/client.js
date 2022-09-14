/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const $tweet = $(`.tweet`);


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  for (const tweet of tweets){
    const $tweet = renderTweet(tweet);
    $container.prepend($tweet);
  }
}

const createTweetElement = function(tweet) {
 const article = $(`
 <article class="tweet">
        <header class="tweetheader">
          <div class="iconparent"><img src="https://i.imgur.com/73hZDYK.png">
            <p>username</p>
          </div>
          <p class="handle">@handle</p>
        </header>
        <h5 class="tweet-words"> If I have seen further it is by standing on the shoulders of giants</h5>
        <h6 class="bottom-tag">
          <output name="days" class="days" for="tweet">10 days ago</output>
          <output name="emoticons" class="emoticons" for="tweet"> <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </output>
        </h6>
      </article>
 `);
 return article; 
};

renderTweets(data);
