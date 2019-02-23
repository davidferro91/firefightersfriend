$(document).ready(function() {
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

  $("#add-crew-btn").on("click", function(event) {
    event.preventDefault();
    var queryURL = "/api/personnel/";
    var sendOb = dataGetter();
    $.ajax({
      method: "POST",
      url: queryURL,
      data: sendOb
    }).then(function() {
      window.location.href = "/crew";
    });
  });
});
