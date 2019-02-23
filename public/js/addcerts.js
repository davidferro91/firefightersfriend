$(document).ready(function() {
  function dataGetter() {
    var certType = $("#cert-type-input").val();
    var dateIssued = $("#date-issued-input").val();
    var expDate = $("#expiration-date-input").val();
    var PersonnelUid = $("#add-cert-btn").data("personneluid");

    var certOb = {
      certType: certType,
      dateIssued: dateIssued,
      expDate: expDate,
      PersonnelUid: PersonnelUid
    };
    return certOb;
  }

  $("#add-cert-btn").on("click", function(event) {
    event.preventDefault();
    var PersonnelUid = $("#add-cert-btn").data("personneluid");
    var queryURL = "/api/certification/";
    var sendOb = dataGetter();
    $.ajax({
      method: "POST",
      url: queryURL,
      data: sendOb
    }).then(function() {
      window.location.href = "/certification/" + PersonnelUid;
    });
  });
});
