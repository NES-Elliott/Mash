$(document).ready(function(){

  // SYSTEMS
  // - POPULATE THE DROPDOWN
  var systems = ["Playstation", "XBox", "Nintendo", "PC", "Mac"];
  $("#sysDiv").html(" ");
  for (var i = 0; i < systems.length; i++) {
    var newLabel = $("<label>").addClass("smsquare-btn");
    var newBtnLabel = $("<input>").addClass("sysOption").attr("type", "radio").attr("name", "systems").attr("autocomplete", "off").attr("value", systems[i]);
    var newBtnText = $("<span>").addClass("link-text").text(" " + systems[i]);
    newLabel.append(newBtnLabel);
    newLabel.append(newBtnText);
    $("#sysDiv").append(newLabel);
  };
  // - UPDATE THE DROPDOWN ON SELECTING AN OPTION
  $(".sysOption").on("click", function() {
    $("#sysHeader").html(" ");
    $("#sysHeader").text($(this).attr("value"));
  });

  // CATEGORIES
  // - POPULATE THE DROPDOWN
  var categories = ["Action", "Adventure", "Simlution", "Role-Playing"];
  $("#catDiv").html(" ");
  for (var j = 0; j < categories.length; j++) {
    var newLabel = $("<label>").addClass("smsquare-btn");
    var newBtnLabel = $("<input>").addClass("catOption").attr("type", "radio").attr("name", "categories").attr("autocomplete", "off").attr("value", categories[j]);
    var newBtnText = $("<span>").addClass("link-text").text(" " + categories[j]);
    newLabel.append(newBtnLabel);
    newLabel.append(newBtnText);
    $("#catDiv").append(newLabel);
  };
  // - UPDATE THE DROPDOWN ON SELECTING AN OPTION
  $(".catOption").on("click", function() {
    $("#catHeader").html(" ");
    $("#catHeader").text($(this).attr("value"));
  });

  // NAVBAR TOGGLE DROPDOWN
  $(".dropdown-toggle").on("click", function() {
    if ($(this).attr("aria-expanded") === "false") {
      $(this).parent().addClass("show");
      $(this).attr("aria-expanded", "true");
    } else if ($(this).attr("aria-expanded") === "true") {
      $(this).parent().removeClass("show");
      $(this).attr("aria-expanded", "false");
    };
  });
});