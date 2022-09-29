
$(document).ready(function () {

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
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  // tweet rendering

  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      const generatedTweet = createTweetElement(tweet);
      $("#tweet-container").prepend(generatedTweet);
    }
  };

  // emptying the tweet container

  const $container = $('.tweet-container');
  const loadTweet = () => {
    $.get("/tweets", function (data) {
      $container.empty();
      renderTweets(data);
      console.log(data);
    });
  };

  const createTweetElement = function (tweet) {
    const user = tweet.user;
    const content = tweet.content;
    const createdAt = tweet.created_at
    const article = $(`
 <article class="tweet">
        <header class="tweetheader">
          <div class="iconparent"><img src= ${user.avatars}>
            <p>${user.name}</p>
          </div>
          <p class="handle">${user.handle}</p>
        </header>
        <div class="tweet-words"> 
          <p>${content.text}</p>
        </div>
        <div class="bottom-tag">
        <h6 class="time-stamp">${timeago.format(createdAt)} </h6>
          <div class="emoticons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </div>
      </article>
 `);
    return article;
  };

  const $form = $('.tweetForm');
  $form.on('submit', (event) => {
    event.preventDefault();
    let text = $('#tweet-text').val();
    let $errorMsg = $('.error-message');
    let $errorContainer = $('.error-container')
    if (text === null || text === "") {
      setTimeout(() => {
        $($errorContainer).slideDown();
        $errorMsg.html("Please do not submit an empty tweet")
      }, 500);
    } else if (text.length > 140) {
      $($errorContainer).slideDown();
      $errorMsg.html("Please shorten your tweet!")
    } else {
      $($errorContainer).slideUp();
      const serializedData = $form.serialize();
      console.log(serializedData);
      $.post('/tweets', serializedData, (response) => {
        console.log("this is line88", response);
        $('#tweet-text').val("");
        $form.find("output").val(140);
        loadTweet();
      })
    }
  });
  loadTweet();
});

