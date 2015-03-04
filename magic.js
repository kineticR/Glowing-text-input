$(document).ready(function() {

  var red = 20;
  var green = 20;
  var blue = 20;
  var limit = 255;

  $("#search").keyup(function() {

      red = red + 5;
      green = green + 18;
      blue = blue + 14;

      if (red > limit && green > limit && blue > limit) {
        red = 20;
        green = 20;
        blue = 20;
      }

    console.log(red, green, blue);
    $("body").css("background-color", "rgb(" + red + ", " + green + ", " + blue + ")")
  });

  $("#search").focusout(function() {
    red = 20;
    green = 20;
    blue = 20;
    $("body").css("background-color", "white");
    $("#search").val("");
  });

  // get window dimensions on load
  $(window).load(function() {
    var $width = $(window).width();
    var $height = $(window).height();
    $("#canvas").css("margin-top", $height/2 - 30)
    console.log($width, $height);
  });

  // update window dimensions on resize
  $(window).resize(function() {
    var $width = $(window).width();
    var $height = $(window).height();
    $("#canvas").css("margin-top", $height/2 - 30)

  
    console.log($width, $height);
  });

});