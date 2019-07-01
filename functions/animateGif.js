
$(document).ready(function () {
    $("#logoImg").hover(
      function () {
        $(this).attr("src", "img/StrengthGif.gif");
      },
      function () {
        $(this).attr("src", "img/Strength.png");
      }
    );
  });