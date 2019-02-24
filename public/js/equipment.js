$(document).ready(function() {
  var equipId = $("#edit-equipment-btn").data("id");
  $.get("/api/personnel/" + equipId, function(data) {
    if (data) {
      $("#type-input").attr("value", data[0].equipType);
      $("#serial-number-input").attr("value", data[0].serialNumber);
      $("#condition-input").attr("value", data[0].condition);
      $("#service-date-input").attr("value", data[0].serviceDate);
      $("#expiration-date-input").attr("value", data[0].expireDate);
    }
  }).then(function() {
    dataGetter();
  });

  function dataGetter() {
    var equipType = $("#type-input").val();
    var serialNumber = $("#serial-number-input").val();
    var condition = $("#condition-input").val();
    var serviceDate = $("#service-date-input").val();
    var expireDate = $("#expiration-date-input").val();

    var equipOb = {
      equipType: equipType,
      serialNumber: serialNumber,
      condition: condition,
      serviceDate: serviceDate,
      expireDate: expireDate
    };
    return equipOb;
  }

  $("#edit-equipment-btn").on("click", function(event) {
    event.preventDefault();
    var equipId = $(this).data("id");
    var queryURL = "/api/equipment/" + equipId;
    var sendOb = dataGetter();
    $.ajax({
      method: "PUT",
      url: queryURL,
      data: sendOb
    }).then(function() {
      window.location.href = "/equipment";
    });
  });

  $("#delete-equipment-btn").on("click", function(event) {
    event.preventDefault();
    var equipId = $(this).data("id");
    var queryURL = "/api/equipment/" + equipId;
    $.ajax({
      method: "DELETE",
      url: queryURL
    }).then(function() {
      window.location.href = "/equipment";
    });
  });
});
