const maxLength = 140;

$(document).ready(function () {
  $('#tweet-text').keyup(function () { 
    const textlen = maxLength - $(this).val().length;
    const counter = $(this).parent().find("output");
    counter.html("").removeClass('error')
    counter.val(textlen);
    if (textlen <= 0) {
      counter.addClass('error');
    }
  });
});