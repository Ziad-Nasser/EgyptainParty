/// <reference types="../@types/jquery" />;
$(".sideNav").on("click", function () {
  $("nav").animate({ width: "250px" }, 1000);
});
$(".close-icon span").on("click", function () {
  $("nav").animate({ width: "0%" }, 1000);
});
// Close nav once clicking on links
$("nav li a").on("click", function () {
  $("nav").animate({ width: "0%" }, 2000);
});

$(".details p").eq(0).slideDown(500);
$(".details h3").on("click", function () {
  $(".details p").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

$(document).ready(function () {
  $("#scrooling a").on("click", function () {
    const sectionId = $(this).attr("href");
    const sectionPosition = $(sectionId).offset().top;

    $("html, body").animate({ scrollTop: sectionPosition }, 1000);
  });
});

$(document).ready(function () {
  const partyTime = new Date("2025-10-25T00:00:00").getTime();

  const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const timeRemaining = partyTime - now;

    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      $(".days").text("0 Days");
      $(".hours").text("0 Hours");
      $(".minutes").text("0 Minutes");
      $(".seconds").text("0 Seconds");
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    $(".days").text(`${days} Days`);
    $(".hours").text(`${hours} Hours`);
    $(".minutes").text(`${minutes} Minutes`);
    $(".seconds").text(`${seconds} Seconds`);
  }, 1000);
});

$("textarea").on("input", function () {
  var maxChars = 100;
  var inputText = $(this).val();

  if (inputText.length > maxChars) {
    $(this).val(inputText.slice(0, maxChars));
    inputText = inputText.slice(0, maxChars);
  }

  var remainingChars = maxChars - inputText.length;
  $("form .num").text(remainingChars);
});
