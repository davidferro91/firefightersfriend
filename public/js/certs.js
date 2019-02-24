$(document).ready(function() {
  var certId = $("#edit-cert-btn").data("id");
  $.get("/api/certification/" + certId, function(data) {
    if (data) {
      $("#cert-type-input").attr("value", data[0].certType);
      $("#date-issued-input").attr("value", data[0].dateIssued);
      $("#expiration-date-input").attr("value", data[0].expDate);
    }
  }).then(function() {
    dataGetter();
  });

  function dataGetter() {
    var certType = $("#cert-type-input").val();
    var dateIssued = $("#date-issued-input").val();
    var expDate = $("#expiration-date-input").val();
    var PersonnelUid = $("#edit-cert-btn").data("personneluid");

    var certOb = {
      certType: certType,
      dateIssued: dateIssued,
      expDate: expDate,
      PersonnelUid: PersonnelUid
    };
    return certOb;
  }

  $("#edit-cert-btn").on("click", function(event) {
    event.preventDefault();
    var certId = $(this).data("id");
    var PersonnelUid = $(this).data("personneluid");
    var queryURL = "/api/certification/" + certId;
    var sendOb = dataGetter();
    $.ajax({
      method: "PUT",
      url: queryURL,
      data: sendOb
    }).then(function() {
      window.location.href = "/certification/" + PersonnelUid;
    });
  });

  $("#delete-cert-btn").on("click", function(event) {
    event.preventDefault();
    var certId = $(this).data("id");
    var PersonnelUid = $(this).data("personneluid");
    var queryURL = "/api/certification/" + certId;
    $.ajax({
      method: "DELETE",
      url: queryURL
    }).then(function() {
      window.location.href = "/certification/" + PersonnelUid;
    });
  });
});
