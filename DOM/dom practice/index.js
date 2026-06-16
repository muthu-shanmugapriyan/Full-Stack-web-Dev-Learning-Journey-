var nbtn = $(".btn").lenght;

$(".btn").click(function () {
  var click = $(this).html();
  buttonAnimation(click);
  playSound(click);
  console.log(click);
});

$(document).keydown(function (event) {
  buttonAnimation(event.key);
  playSound(event.key);
  console.log(event.key);
});

function buttonAnimation(key) {
  var activeBtn = $("." + key);
  activeBtn.addClass("pressed");

  setTimeout(function () {
    activeBtn.removeClass("pressed");
  }, 100);
}
