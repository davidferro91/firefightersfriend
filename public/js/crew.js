//
// crew.js

$(document).ready(function() {
  console.log("we are in the crew jquery");
  var $submitBtn = $("#edit-crew-btn");
  var $crewFirstName = $("#first-name-input");
  var $crewLastName = $("#last-name-input");
  var $crewAddLine1 = $("#address-line1-input");
  var $crewAddLine2 = $("#address-line2-input");
  var $crewCity = $("#city-input");
  var $crewState = $("#state-input");
  var $crewZip = $("#zipcode-input");
  var $crewHomePhone = $("#home-phone-input");
  var $crewCellPhone = $("#cell-phone-input");
  var $crewUserEmail = $("#user-email-input");
  var $crewTitle = $("#title-input");

  var uid = $submitBtn.data("id");

  var handleFormSubmit = function(event) {
    event.preventDefault();
    var crewEdit = {
      firstName: $crewFirstName.val().trim(),
      lastName: $crewLastName.val().trim(),
      addressLine1: $crewAddLine1.val().trim(),
      addressLine2: $crewAddLine2.val().trim(),
      city: $crewCity.val().trim(),
      state: $crewState.val().trim(),
      zipcode: $crewZip.val().trim(),
      homePhone: $crewHomePhone.val().trim,
      cellPhone: $crewCellPhone.val().trim(),
      userEmail: $crewUserEmail.val().trim(),
      title: $crewTitle.val().trim()
    };

    if (Object.keys(crewEdit).length < 10) {
      alert("You must enter all input fields!");
      return;
    }

    API.saveCrew(crewEdit);
  };

  var API = {
    saveCrew: function(crewEdit) {
      $.ajax({
        type: "PUT",
        url: "/api/personnel/" + uid,
        data: crewEdit
      });
    },
    getCrew: function() {
      return $.ajax({
        url: "/api/personnel/",
        type: "GET"
      });
    },
    deleteCrew: function(uid) {
      return $.ajax({
        url: "api/personnel/" + uid,
        type: "DELETE"
      });
    }
  };

  $submitBtn.on("click", handleFormSubmit);
});
