const maxLength = 140;

$(document).ready(function () {
  $('#tweet-text').keyup(function () { 
    const textlen = maxLength - $(this).val().length;
    const text = $(this).val();
    const counter = $(this).parent().find("output");
    const errorMsg = $(".error-message")
    counter.html("").removeClass('error')
    counter.val(textlen);
    if (textlen <= 0) {
      errorMsg.html("error, tweet is too long!")
      counter.addClass('error');
    } else if (text === null || text === "") {
      errorMsg.html("Tweet cannot be empty").addClass('error');
    } else {
      $.post("/tweets", $(this).serialize())
        .done(()=>{
        })
    }
  });
});