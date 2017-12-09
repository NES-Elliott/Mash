$(document).ready(function() {
// STORES THE USER'S NAVBAR DATA
  var userPicks = {
    sysName: "",
    sysId: "",
    catName: "",
    catId: ""
  };

  // SYSTEMS
  // - POPULATE THE DROPDOWN
  var platformArray = [];
  function getPlatforms() {
    $.get("http://localhost:3001/platforms", function(data) {
      for (var a = 0; a < data.body.length; a++) {
        platformArray.push({id: data.body[a].id, name: data.body[a].name});
      };
    })
    .done(function() {
      $(".sysDiv").html(" ");
      console.log(platformArray);
      for (var i = 0; i < platformArray.length; i++) {
        var newBtn = $("<button>")
          .addClass("list-group-item list-group-item-action sysOption")
          .attr("value", platformArray[i].name)
          .attr("data-id", platformArray[i].id)
          .text(" " + platformArray[i].name);
        $(".sysDiv").append(newBtn);
      };
    });
  };
  getPlatforms();

  // CATEGORIES
  // - POPULATE THE DROPDOWN
  var genreArray = [];
  function getGenres() {
    $.get("http://localhost:3001/genres", function(data) {
      for (var a = 0; a < data.body.length; a++) {
        genreArray.push({id: data.body[a].id, name: data.body[a].name});
      };
    })
    .done(function() {
      $(".catDiv").html(" ");
      console.log(genreArray);
      for (var i = 0; i < genreArray.length; i++) {
        var newBtn = $("<button>")
          .addClass("list-group-item list-group-item-action catOption")
          .attr("value", genreArray[i].name)
          .attr("data-id", genreArray[i].id)
          .text(" " + genreArray[i].name);
        $(".catDiv").append(newBtn);
      };
    });
  };
  getGenres();

  // UPDATE THE DROPDOWN ON SELECTING AN OPTION
  var selectBtn = $("<button>").addClass("delButton");

  $(document).on("click", ".sysOption", function() {
    $(".sysSelected").html(" ");
    selectBtn.text($(this).attr("value"));
    $(".sysSelected").append(selectBtn);
    userPicks.sysName = $(this).attr("value");
    userPicks.sysId = $(this).attr("data-id");
    console.log(userPicks);
  });
  $(document).on("click", ".catOption", function() {
    $(".catSelected").html(" ");
    selectBtn.text($(this).attr("value"));
    $(".catSelected").append(selectBtn);
    userPicks.catName = $(this).attr("value");
    userPicks.catId = $(this).attr("data-id");
    console.log(userPicks);
  });
});