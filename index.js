$(document).ready(function(){
  $('.menu-trigger').click(function(){
    $('nav ul').slideToggle(500);
  }); //end slide toggle

$(window).resize(function(){
  if ($(window).width()> 700)
  $ ('nav ul').removeAttr('style');
  }
}); //end of resize

}); // end of the ready function
