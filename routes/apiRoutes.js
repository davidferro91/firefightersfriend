var db = require("../models");

module.exports = function(app) {
  // Get all personnel
  app.get("/api/personnel", function(req, res) {
    db.Personnel.findAll({}).then(function(dbPersonnel) {
      res.json(dbPersonnel);
    });
  });

  // Get all certifications
  app.get("/api/certification", function(req, res) {
    db.Certification.findAll({}).then(function(dbCertification) {
      res.json(dbCertification);
    });
  });

  // Get all equipment
  app.get("/api/equipment", function(req, res) {
    db.Equipment.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  // Get all locations
  app.get("/api/location", function(req, res) {
    db.Location.findAll({}).then(function(dbLocation) {
      res.json(dbLocation);
    });
  });

  // Get all trucks
  app.get("/api/truck", function(req, res) {
    db.Truck.findAll({}).then(function(dbTruck) {
      res.json(dbTruck);
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
        req.body.firstName.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "") +
        "." +
        req.body.lastName.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "") +
        (Math.floor(Math.random() * 1000) + 1)
    }).then(function(dbPersonnel) {
      db.MasterLog.create({
        entryType: "CREATE",
        record: JSON.stringify(dbPersonnel),
        PersonnelUid: dbPersonnel.uid
      }).then(function(dbMasterLog) {
        var returnOb = {
          personnel: dbPersonnel,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Create a new certification
  app.post("/api/certification", function(req, res) {
    db.Certification.create({
      certType: req.body.certType,
      dateIssued: req.body.dateIssued,
      expDate: req.body.expDate
    }).then(function(dbCertification) {
      db.MasterLog.create({
        entryType: "CREATE",
        record: JSON.stringify(dbCertification),
        PersonnelUid: req.body.uid
      }).then(function(dbMasterLog) {
        var returnOb = {
          certification: dbCertification,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Create a new equipment
  app.post("/api/equipment", function(req, res) {
    db.Equipment.create({
      equipType: req.body.equipType,
      condition: req.body.condition,
      serviceDate: req.body.serviceDate,
      expireDate: req.body.expireDate
    }).then(function(dbEquipment) {
      db.MasterLog.create({
        entryType: "CREATE",
        record: JSON.stringify(dbEquipment),
        PersonnelUid: req.body.uid
      }).then(function(dbMasterLog) {
        var returnOb = {
          equipment: dbEquipment,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Create a new location
  app.post("/api/location", function(req, res) {
    db.Location.create({
      stationNameOrNumber: req.body.stationNameOrNumber,
      addressLine1: req.body.addressLine1,
      addressLine2: req.body.addresLine2,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      region: req.body.region,
      country: req.body.country,
      phoneNumber: req.body.phoneNumber,
      faxNumber: req.body.faxNumber,
      email: req.body.email,
      nameOfChief: req.body.nameOfChief
    }).then(function(dbLocation) {
      db.MasterLog.create({
        entryType: "CREATE",
        record: JSON.stringify(dbLocation),
        PersonnelUid: req.body.uid
      }).then(function(dbMasterLog) {
        var returnOb = {
          location: dbLocation,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Create a new truck
  app.post("/api/truck", function(req, res) {
    db.Truck.create({
      truckType: req.body.truckType,
      needsService: req.body.needsService,
      condition: req.body.condition,
      dateAcquired: req.body.dateAcquired,
      serviceDate: req.body.serviceDate,
      mileage: req.body.mileage,
      expirationMileage: req.body.expirationMileage,
      capacity: req.body.capacity
    }).then(function(dbTruck) {
      db.MasterLog.create({
        entryType: "CREATE",
        record: JSON.stringify(dbTruck),
        PersonnelUid: req.body.uid
      }).then(function(dbMasterLog) {
        var returnOb = {
          truck: dbTruck,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Delete a truck by id
  app.delete("/api/truck/:id", function(req, res) {
    db.Truck.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTruck) {
      db.MasterLog.create({
        entryType: "DELETE",
        record: JSON.stringify(dbTruck),
        PersonnelUid: req.body.uid
      }).then(function(dbMasterLog) {
        var returnOb = {
          truck: dbTruck,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Delete a location by id
  app.delete("/api/location/:id", function(req, res) {
    db.Location.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbLocation) {
      db.MasterLog.create({
        entryType: "DELETE",
        record: JSON.stringify(dbLocation),
        PersonnelUid: req.body.uid
      }).then(function(dbMasterLog) {
        var returnOb = {
          location: dbLocation,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Delete a equipment by id
  app.delete("/api/equipment/:id", function(req, res) {
    db.Equipment.destroy({
      where: {
        equipId: req.params.id
      }
    }).then(function(dbEquipment) {
      db.MasterLog.create({
        entryType: "DELETE",
        record: JSON.stringify(dbEquipment),
        PersonnelUid: req.body.uid
      }).then(function(dbMasterLog) {
        var returnOb = {
          equipment: dbEquipment,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Delete a personnel by id
  app.delete("/api/personnel/:id", function(req, res) {
    db.Personnel.destroy({
      where: {
        uid: req.params.id
      }
    }).then(function(dbPersonnel) {
      db.MasterLog.create({
        entryType: "DELETE",
        record: JSON.stringify(dbPersonnel),
        PersonnelUid: req.body.uid
      }).then(function(dbMasterLog) {
        var returnOb = {
          personnel: dbPersonnel,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Delete a certification by id
  app.delete("/api/certification/:id", function(req, res) {
    db.Certification.destroy({
      where: {
        CertId: req.params.id
      }
    }).then(function(dbCertification) {
      db.MasterLog.create({
        entryType: "DELETE",
        record: JSON.stringify(dbCertification),
        PersonnelUid: req.body.uid
      }).then(function(dbMasterLog) {
        var returnOb = {
          certification: dbCertification,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });
};
