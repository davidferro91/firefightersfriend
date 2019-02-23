$(document).ready(function() {
  var uid = $("#edit-crew-btn").data("id");
  $.get("/api/personnel/" + uid, function(data) {
    if (data) {
      $("#first-name-input").attr("value", data[0].firstName);
      $("#last-name-input").attr("value", data[0].lastName);
      $("#title-input").attr("value", data[0].title);
      $("#address-line1-input").attr("value", data[0].addressLine1);
      $("#address-line2-input").attr("value", data[0].addressLine2);
      $("#city-input").attr("value", data[0].city);
      $("#state-input").attr("value", data[0].state);
      $("#zipcode-input").attr("value", data[0].zipcode);
      $("#home-phone-input").attr("value", data[0].homePhone);
      $("#cell-phone-input").attr("value", data[0].cellPhone);
      $("#user-email-input").attr("value", data[0].userEmail);
    }
  }).then(function() {
    dataGetter();
  });

  function dataGetter() {
    var firstName = $("#first-name-input").val();
    var lastName = $("#last-name-input").val();
    var title = $("#title-input").val();
    var addressLine1 = $("#address-line1-input").val();
    var addressLine2 = $("#address-line2-input").val();
    var city = $("#city-input").val();
    var state = $("#state-input").val();
    var zipcode = $("#zipcode-input").val();
    var homePhone = $("#home-phone-input").val();
    var cellPhone = $("#cell-phone-input").val();
    var userEmail = $("#user-email-input").val();

    var crewOb = {
      firstName: firstName,
      lastName: lastName,
      title: title,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      city: city,
      state: state,
      zipcode: zipcode,
      homePhone: homePhone,
      cellPhone: cellPhone,
      userEmail: userEmail
    };
    return crewOb;
  }

  $("#edit-crew-btn").on("click", function(event) {
    event.preventDefault();
    var uid = $(this).data("id");
    var queryURL = "/api/personnel/" + uid;
    var sendOb = dataGetter();
    $.ajax({
      method: "PUT",
      url: queryURL,
      data: sendOb
    }).then(function() {
      window.location.href = "/crew";
    });
  });

  $("#delete-crew-btn").on("click", function(event) {
    event.preventDefault();
    var uid = $(this).data("id");
    var queryURL = "/api/personnel/" + uid;
    $.ajax({
      method: "DELETE",
      url: queryURL
    }).then(function() {
      window.location.href = "/crew";
    });
  });
});
