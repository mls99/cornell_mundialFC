$(document).ready(function() {
  // Desktop timeline
  var yearDescription = $("#year-11");
  var pointClicked = $("#point-11");
  var mobilePointClicked = $("#point-11m");

  for (let i = 11; i <= 18; ++i) {
    $("#point-" + i).click(function() {
      yearDescription.addClass("hidden");
      pointClicked.removeClass("point-clicked");
      mobilePointClicked.removeClass("area-active");

      yearDescription = $("#year-" + i);
      pointClicked = $("#point-" + i);
      mobilePointClicked = $("#point-" + i + "m");

      yearDescription.removeClass("hidden");
      pointClicked.addClass("point-clicked");
      mobilePointClicked.addClass("area-active");

      return true;
    });

    $("#point-" + i + "m").click(function() {
      yearDescription.addClass("hidden");
      pointClicked.removeClass("point-clicked");
      mobilePointClicked.removeClass("area-active");

      yearDescription = $("#year-" + i);
      pointClicked = $("#point-" + i);
      mobilePointClicked = $("#point-" + i + "m");

      yearDescription.removeClass("hidden");
      pointClicked.addClass("point-clicked");
      mobilePointClicked.addClass("area-active");

      return true;
    });
  }
});
