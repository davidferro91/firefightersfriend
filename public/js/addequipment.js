$(document).ready(function() {
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

  $("#add-equipment-btn").on("click", function(event) {
    event.preventDefault();
    var queryURL = "/api/equipment/";
    var sendOb = dataGetter();
    $.ajax({
      method: "POST",
      url: queryURL,
      data: sendOb
    }).then(function() {
      window.location.href = "/equipment";
    });
  });
});
