$(document).ready(function() {
  $("#dropdown").click(function() {
    var isHidden = $("#dropdown-links").hasClass("hidden");

    if (isHidden) {
      $("#dropdown-links").removeClass("hidden");
      $("#dropdown").addClass("dropdown-clicked");
    } else {
      $("#dropdown-links").addClass("hidden");
      $("#dropdown").removeClass("dropdown-clicked");
    }
  });
});
