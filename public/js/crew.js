//
// crew.js

var $submitBtn = $("#edit-crew-btn");
var $crewFirstName = $("#first-name");
var $crewLastName = $("#last-name");
var $crewAddLine1 = $("#address-line1");
var $crewAddLine2 = $("#address-line2");
var $crewCity = $("#city");
var $crewState = $("#state");
var $crewZip = $("#zip");
var $crewHomePhone = $("#home-phone");
var $crewCellPhone = $("#cell-phone");
var $crewUserEmail = $("#user-email");
var $crewTitle = $("#title");

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

  API.saveCrew(crewEdit).then(function() {
    refreshExamples();
  });
};

var API = {
  saveCrew: function(crewEdit) {
    return $.ajax({
      type: "PUT",
      url: "/api/personnel" + uid,
      data: JSON.stringify(crewEdit)
    });
  },
  getCrew: function() {
    return $.ajax({
      url: "/api/personnel",
      type: "GET"
    });
  },
  deleteCrew: function(id) {
    return $.ajax({
      url: "api/personnel" + id,
      type: "DELETE"
    });
  }
};

$submitBtn.on("click", handleFormSubmit);
