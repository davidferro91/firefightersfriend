var db = require("../models");

module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   res.render("index", {});
  // });

  app.get("/add-crew", function(req, res) {
    res.render("add-crew", {});
  });

  app.get("/add-equipment", function(req, res) {
    res.render("add-equipment", {});
  });

  app.get("/add-certs/:uid", function(req, res) {
    db.Personnel.findAll({
      where: {
        uid: req.params.uid
      }
    }).then(function(dbPersonnel) {
      res.render("add-certs", {
        Personnel: dbPersonnel
      });
    });
  });

  // Load home page
  app.get("/profile/:uid", function(req, res) {
    db.Personnel.findAll({
      where: {
        uid: req.params.uid
      }
    }).then(function(dbPersonnel) {
      var sendArr = [];
      for (var i = 0; i < dbPersonnel.length; i++) {
        var sendOb = {
          uid: dbPersonnel[i].uid,
          firstName: dbPersonnel[i].firstName,
          lastName: dbPersonnel[i].lastName,
          addressLine1: dbPersonnel[i].addressLine1,
          addressLine2: dbPersonnel[i].addressLine2,
          city: dbPersonnel[i].city,
          state: dbPersonnel[i].state,
          zipcode: dbPersonnel[i].zipcode,
          homePhone: dbPersonnel[i].homePhone,
          cellPhone: dbPersonnel[i].cellPhone,
          userEmail: dbPersonnel[i].userEmail,
          username: dbPersonnel[i].username,
          permissionLevel: dbPersonnel[i].permissionLevel,
          title: dbPersonnel[i].title
        };
        sendArr.push(sendOb);
      }
      res.render("profile", {
        Personnel: sendArr
      });
    });
  });

  // Load index page
  app.get("/equipment", function(req, res) {
    db.Equipment.findAll({}).then(function(dbEquipment) {
      res.render("equipment", {
        Equipment: dbEquipment
      });
    });
  });

  // Load index page
  app.get("/edit-equipment/:equipId", function(req, res) {
    db.Equipment.findAll({
      where: {
        equipId: req.params.equipId
      }
    }).then(function(dbEquipment) {
      res.render("edit-equipment", {
        Equipment: dbEquipment
      });
    });
  });

  // Load index page
  app.get("/edit-crew/:uid", function(req, res) {
    db.Personnel.findAll({
      where: {
        uid: req.params.uid
      }
    }).then(function(dbPersonnel) {
      var sendArr = [];
      for (var i = 0; i < dbPersonnel.length; i++) {
        var sendOb = {
          uid: dbPersonnel[i].uid,
          firstName: dbPersonnel[i].firstName,
          lastName: dbPersonnel[i].lastName,
          addressLine1: dbPersonnel[i].addressLine1,
          addressLine2: dbPersonnel[i].addressLine2,
          city: dbPersonnel[i].city,
          state: dbPersonnel[i].state,
          zipcode: dbPersonnel[i].zipcode,
          homePhone: dbPersonnel[i].homePhone,
          cellPhone: dbPersonnel[i].cellPhone,
          userEmail: dbPersonnel[i].userEmail,
          username: dbPersonnel[i].username,
          permissionLevel: dbPersonnel[i].permissionLevel,
          title: dbPersonnel[i].title
        };
        sendArr.push(sendOb);
      }
      res.render("edit-crew", {
        Personnel: sendArr
      });
    });
  });

  // Load index page
  app.get("/edit-certs/:certId", function(req, res) {
    db.Certification.findAll({
      where: {
        certId: req.params.certId
      }
    }).then(function(dbCertification) {
      res.render("edit-certs", {
        Certification: dbCertification
      });
    });
  });

  // Load index page
  app.get("/crew", function(req, res) {
    db.Personnel.findAll({}).then(function(dbPersonnel) {
      var sendArr = [];
      for (var i = 0; i < dbPersonnel.length; i++) {
        var sendOb = {
          uid: dbPersonnel[i].uid,
          firstName: dbPersonnel[i].firstName,
          lastName: dbPersonnel[i].lastName,
          addressLine1: dbPersonnel[i].addressLine1,
          addressLine2: dbPersonnel[i].addressLine2,
          city: dbPersonnel[i].city,
          state: dbPersonnel[i].state,
          zipcode: dbPersonnel[i].zipcode,
          homePhone: dbPersonnel[i].homePhone,
          cellPhone: dbPersonnel[i].cellPhone,
          userEmail: dbPersonnel[i].userEmail,
          username: dbPersonnel[i].username,
          permissionLevel: dbPersonnel[i].permissionLevel,
          title: dbPersonnel[i].title
        };
        sendArr.push(sendOb);
      }
      res.render("crew", {
        Personnel: sendArr
      });
    });
  });

  // crew page to get all certifications with PersonnelUid
  app.get("/certification/:PersonnelUid", function(req, res) {
    db.Certification.findAll({
      where: {
        PersonnelUid: req.params.PersonnelUid
      }
    }).then(function(dbCertification) {
      db.Personnel.findAll({
        where: {
          uid: req.params.PersonnelUid
        }
      }).then(function(dbPersonnel) {
        var sendArr = [];
        for (var i = 0; i < dbPersonnel.length; i++) {
          var sendOb = {
            uid: dbPersonnel[i].uid
          };
          sendArr.push(sendOb);
        }
        res.render("certification", {
          Certification: dbCertification,
          Personnel: sendArr
        });
      });
    });
  });

  // Load index page
  app.get("/", function(req, res) {
    res.render("home", {});
  });
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
