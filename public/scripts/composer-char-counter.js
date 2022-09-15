const maxLength = 140;

$(document).ready(function() {
  $('#tweet-text').keyup(function(){
    const textlen= maxLength - $(this).val().length; 
    const counter = $(this).parent().find("output");
    counter.removeClass('error')
    counter.val(textlen);
    if (textlen <= 0) {
      counter.addClass('error');
      alert("error, too long!")
    }
  });
});
