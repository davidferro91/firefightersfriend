var db = require("../models");

module.exports = function(app) {
  // Get all personnel
  app.get("/api/personnel", function(req, res) {
    db.Personnel.findAll({}).then(function(dbPersonnel) {
      res.json(dbPersonnel);
    });
  });

  // Create a new personnel
  app.post("/api/personnel", function(req, res) {
    db.Personnel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      title: req.body.title,
      password: req.body.password,
      addressLine1: req.body.addressLine1,
      addressLine2: req.body.addressLine2,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      homePhone: req.body.homePhone,
      cellPhone: req.body.cellPhone,
      userEmail: req.body.userEmail,
      username:
        req.body.firstName.toLowerCase() +
        "." +
        req.body.lastName.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "")
    }).then(function(dbPersonnel) {
      res.json(dbPersonnel);
    });
  });

  // Delete a personnel by id
  app.delete("/api/personnel/:id", function(req, res) {
    db.Personnel.destroy({
      where: {
        uid: req.params.id
      }
    }).then(function(dbPersonnel) {
      res.json(dbPersonnel);
    });
  });
};
