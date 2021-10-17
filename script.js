$(document).ready(function() {
  $("#userBorough").keypress(function(e) {
    var key = e.which;
    if (key == 13) {
      // the enter key code
      var borough = $("#userBorough").val();
      sessionStorage.setItem("borough", borough);
      $(window).attr(
        "location",
        "https://where-its-at.glitch.me/experiences.html"
      );
    }
  });
  $("#submit").click(function() {
    var borough = $("#userBorough").val();

    sessionStorage.setItem("borough", borough);
    $(window).attr(
      "location",
      "https://where-its-at.glitch.me/experiences.html"
    );
  });
});

var borough = sessionStorage.getItem("borough");
if (borough === "queens" || borough === "Queens") {
  $("#borough").text("Queens");
  $(".brooklyn").hide();
  $(".manhattan").hide();
  $(".bronx").hide();
  $(".statenIsland").hide();
} else if (borough === "Brooklyn" || borough === "brooklyn") {
  $("#borough").text("Brooklyn");
  $(".queens").hide();
  $(".manhattan").hide();
  $(".bronx").hide();
  $(".statenIsland").hide();
} else if (borough === "Staten Island" || borough === "staten island") {
  $("#borough").text("Staten Island");
  $(".queens").hide();
  $(".manhattan").hide();
  $(".bronx").hide();
  $(".brooklyn").hide();
} else if (borough === "Bronx" || borough === "bronx") {
  $("#borough").text("Bronx");
  $(".queens").hide();
  $(".manhattan").hide();
  $(".statenIsland").hide();
  $(".brooklyn").hide();
} else if (borough === "Manhattan" || borough === "manhattan") {
  $("#borough").text("Manhattan");
  $(".queens").hide();
  $(".bronx").hide();
  $(".statenIsland").hide();
  $(".brooklyn").hide();
} else {
  $("#borough").text("New York");
}
