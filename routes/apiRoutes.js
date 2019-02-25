var db = require("../models");

module.exports = function(app) {
  // Get all personnel
  app.get("/api/personnel", function(req, res) {
    db.Personnel.findAll({}).then(function(dbPersonnel) {
      console.log(dbPersonnel);
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
      console.log(sendArr);
      res.json(sendArr);
    });
  });

  // Get one personnel
  app.get("/api/personnel/:uid", function(req, res) {
    db.Personnel.findAll({
      where: {
        uid: req.params.uid
      }
    }).then(function(dbPersonnel) {
      console.log(dbPersonnel);
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
      console.log(sendArr);
      res.json(sendArr);
    });
  });

  // Get all certifications
  app.get("/api/certification", function(req, res) {
    db.Certification.findAll({}).then(function(dbCertification) {
      res.json(dbCertification);
    });
  });

  // Get one certification
  app.get("/api/certification/:certId", function(req, res) {
    db.Certification.findAll({
      where: {
        certId: req.params.certId
      }
    }).then(function(dbCertification) {
      res.json(dbCertification);
    });
  });

  // Get all equipment
  app.get("/api/equipment", function(req, res) {
    db.Equipment.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  // Get one equipment
  app.get("/api/equipment/:equipId", function(req, res) {
    db.Equipment.findAll({
      where: {
        equipId: req.params.equipId
      }
    }).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  // Get all locations
  app.get("/api/location", function(req, res) {
    db.Location.findAll({}).then(function(dbLocation) {
      res.json(dbLocation);
    });
  });

  // Get one location
  app.get("/api/location/:id", function(req, res) {
    db.Location.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(dbLocation) {
      res.json(dbLocation);
    });
  });

  // Get all trucks
  app.get("/api/truck", function(req, res) {
    db.Truck.findAll({}).then(function(dbTruck) {
      res.json(dbTruck);
    });
  });

  // Get one truck
  app.get("/api/truck/:id", function(req, res) {
    db.Truck.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(dbTruck) {
      res.json(dbTruck);
    });
  });

  // Get all master logs
  app.get("/api/masterlog", function(req, res) {
    db.MasterLog.findAll({}).then(function(dbMasterLog) {
      res.json(dbMasterLog);
    });
  });

  // Get one master log
  app.get("/api/masterlog/:id", function(req, res) {
    db.MasterLog.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(dbTruck) {
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
      var sendOb = {
        uid: dbPersonnel.uid,
        firstName: dbPersonnel.firstName,
        lastName: dbPersonnel.lastName,
        addressLine1: dbPersonnel.addressLine1,
        addressLine2: dbPersonnel.addressLine2,
        city: dbPersonnel.city,
        state: dbPersonnel.state,
        zipcode: dbPersonnel.zipcode,
        homePhone: dbPersonnel.homePhone,
        cellPhone: dbPersonnel.cellPhone,
        userEmail: dbPersonnel.userEmail,
        username: dbPersonnel.username,
        permissionLevel: dbPersonnel.permissionLevel,
        title: dbPersonnel.title
      };
      db.MasterLog.create({
        entryType: "CREATE",
        record: JSON.stringify(sendOb),
        PersonnelUid: req.body.currentUserId
      }).then(function(dbMasterLog) {
        var returnOb = {
          personnel: sendOb,
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
      expDate: req.body.expDate,
      PersonnelUid: req.body.PersonnelUid
    }).then(function(dbCertification) {
      db.MasterLog.create({
        entryType: "CREATE",
        record: JSON.stringify(dbCertification),
        PersonnelUid: req.body.currentUserId
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
      serialNumber: req.body.serialNumber,
      condition: req.body.condition,
      serviceDate: req.body.serviceDate,
      expireDate: req.body.expireDate,
      TruckId: req.body.TruckId,
      LocationId: req.body.LocationId
    }).then(function(dbEquipment) {
      db.MasterLog.create({
        entryType: "CREATE",
        record: JSON.stringify(dbEquipment),
        PersonnelUid: req.body.currentUserId
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
      addressLine2: req.body.addressLine2,
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
        PersonnelUid: req.body.currentUserId
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
      capacity: req.body.capacity,
      LocationId: req.body.LocationId
    }).then(function(dbTruck) {
      db.MasterLog.create({
        entryType: "CREATE",
        record: JSON.stringify(dbTruck),
        PersonnelUid: req.body.currentUserId
      }).then(function(dbMasterLog) {
        var returnOb = {
          truck: dbTruck,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Update personnel by id
  app.put("/api/personnel/:uid", function(req, res) {
    db.Personnel.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        homePhone: req.body.homePhone,
        cellPhone: req.body.cellPhone,
        userEmail: req.body.userEmail,
        // username: req.body.username,
        // password: req.body.password,
        permissionLevel: req.body.permissionLevel,
        title: req.body.title
      },
      {
        where: {
          uid: req.params.uid
        }
      }
    ).then(function(dbPersonnel) {
      db.MasterLog.create({
        entryType: "UPDATE",
        record: JSON.stringify(
          {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            addressLine1: req.body.addressLine1,
            addressLine2: req.body.addressLine2,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
            homePhone: req.body.homePhone,
            cellPhone: req.body.cellPhone,
            userEmail: req.body.userEmail,
            // username: req.body.username,
            permissionLevel: req.body.permissionLevel,
            title: req.body.title
          },
          {
            where: {
              uid: req.params.uid
            }
          }
        ),
        PersonnelUid: req.body.currentUserId,
        rowsAffected: dbPersonnel
      }).then(function(dbMasterLog) {
        var returnOb = {
          rowsAffected: dbPersonnel,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Update a certification by id
  app.put("/api/certification/:certId", function(req, res) {
    db.Certification.update(
      {
        certType: req.body.certType,
        dateIssued: req.body.dateIssued,
        expDate: req.body.expDate,
        PersonnelUid: req.body.PersonnelUid
      },
      {
        where: {
          certId: req.params.certId
        }
      }
    ).then(function(dbCertification) {
      db.MasterLog.create({
        entryType: "UPDATE",
        record: JSON.stringify(
          {
            certType: req.body.certType,
            dateIssued: req.body.dateIssued,
            expDate: req.body.expDate,
            PersonnelUid: req.body.PersonnelUid
          },
          {
            where: {
              certId: req.params.certId
            }
          }
        ),
        PersonnelUid: req.body.currentUserId,
        rowsAffected: dbCertification
      }).then(function(dbMasterLog) {
        var returnOb = {
          rowsAffected: dbCertification,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Update equipment by id
  app.put("/api/equipment/:equipId", function(req, res) {
    db.Equipment.update(
      {
        equipType: req.body.equipType,
        serialNumber: req.body.serialNumber,
        condition: req.body.condition,
        serviceDate: req.body.serviceDate,
        expireDate: req.body.expireDate,
        TruckId: req.body.TruckId,
        LocationId: req.body.LocationId
      },
      {
        where: {
          equipId: req.params.equipId
        }
      }
    ).then(function(dbEquipment) {
      db.MasterLog.create({
        entryType: "UPDATE",
        record: JSON.stringify(
          {
            equipType: req.body.equipType,
            serialNumber: req.body.serialNumber,
            condition: req.body.condition,
            serviceDate: req.body.serviceDate,
            expireDate: req.body.expireDate,
            TruckId: req.body.TruckId,
            LocationId: req.body.LocationId
          },
          {
            where: {
              equipId: req.params.equipId
            }
          }
        ),
        PersonnelUid: req.body.currentUserId,
        rowsAffected: dbEquipment
      }).then(function(dbMasterLog) {
        var returnOb = {
          rowsAffected: dbEquipment,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Update a location by id
  app.put("/api/location/:id", function(req, res) {
    db.Location.update(
      {
        stationNameOrNumber: req.body.stationNameOrNumber,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        region: req.body.region,
        country: req.body.country,
        phoneNumber: req.body.phoneNumber,
        faxNumber: req.body.faxNumber,
        email: req.body.email,
        nameOfChief: req.body.nameOfChief
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(dbLocation) {
      db.MasterLog.create({
        entryType: "UPDATE",
        record: JSON.stringify(
          {
            stationNameOrNumber: req.body.stationNameOrNumber,
            addressLine1: req.body.addressLine1,
            addressLine2: req.body.addressLine2,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
            region: req.body.region,
            country: req.body.country,
            phoneNumber: req.body.phoneNumber,
            faxNumber: req.body.faxNumber,
            email: req.body.email,
            nameOfChief: req.body.nameOfChief
          },
          {
            where: {
              id: req.params.id
            }
          }
        ),
        PersonnelUid: req.body.currentUserId,
        rowsAffected: dbLocation
      }).then(function(dbMasterLog) {
        var returnOb = {
          rowsAffected: dbLocation,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Update a truck by id
  app.put("/api/truck/:id", function(req, res) {
    db.Truck.update(
      {
        truckType: req.body.truckType,
        needsService: req.body.needsService,
        condition: req.body.condition,
        dateAcquired: req.body.dateAcquired,
        serviceDate: req.body.serviceDate,
        mileage: req.body.mileage,
        expirationMileage: req.body.expirationMileage,
        capacity: req.body.capacity,
        LocationId: req.body.LocationId
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(dbTruck) {
      db.MasterLog.create({
        entryType: "UPDATE",
        record: JSON.stringify(
          {
            truckType: req.body.truckType,
            needsService: req.body.needsService,
            condition: req.body.condition,
            dateAcquired: req.body.dateAcquired,
            serviceDate: req.body.serviceDate,
            mileage: req.body.mileage,
            expirationMileage: req.body.expirationMileage,
            capacity: req.body.capacity,
            LocationId: req.body.LocationId
          },
          {
            where: {
              id: req.params.id
            }
          }
        ),
        PersonnelUid: req.body.currentUserId,
        rowsAffected: dbTruck
      }).then(function(dbMasterLog) {
        var returnOb = {
          rowsAffected: dbTruck,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Delete a personnel by id
  app.delete("/api/personnel/:uid", function(req, res) {
    db.Personnel.destroy({
      where: {
        uid: req.params.uid
      }
    }).then(function(dbPersonnel) {
      db.MasterLog.create({
        entryType: "DELETE",
        record:
          "Personnel:" +
          JSON.stringify({
            where: {
              uid: req.params.uid
            }
          }),
        PersonnelUid: req.body.currentUserId,
        rowsAffected: dbPersonnel
      }).then(function(dbMasterLog) {
        var returnOb = {
          rowsAffected: dbPersonnel,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Delete a certification by id
  app.delete("/api/certification/:certId", function(req, res) {
    db.Certification.destroy({
      where: {
        certId: req.params.certId
      }
    }).then(function(dbCertification) {
      db.MasterLog.create({
        entryType: "DELETE",
        record:
          "Certification: " +
          JSON.stringify({
            where: {
              certId: req.params.certId
            }
          }),
        PersonnelUid: req.body.currentUserId,
        rowsAffected: dbCertification
      }).then(function(dbMasterLog) {
        var returnOb = {
          rowsAffected: dbCertification,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });

  // Delete a equipment by id
  app.delete("/api/equipment/:equipId", function(req, res) {
    db.Equipment.destroy({
      where: {
        equipId: req.params.equipId
      }
    }).then(function(dbEquipment) {
      db.MasterLog.create({
        entryType: "DELETE",
        record:
          "Equipment: " +
          JSON.stringify({
            where: {
              equipId: req.params.equipId
            }
          }),
        PersonnelUid: req.body.currentUserId,
        rowsAffected: dbEquipment
      }).then(function(dbMasterLog) {
        var returnOb = {
          rowsAffected: dbEquipment,
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
        record:
          "Location: " +
          JSON.stringify({
            where: {
              id: req.params.id
            }
          }),
        PersonnelUid: req.body.currentUserId,
        rowsAffected: dbLocation
      }).then(function(dbMasterLog) {
        var returnOb = {
          rowsAffected: dbLocation,
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
        record:
          "Truck: " +
          JSON.stringify({
            where: {
              id: req.params.id
            }
          }),
        PersonnelUid: req.body.currentUserId,
        rowsAffected: dbTruck
      }).then(function(dbMasterLog) {
        var returnOb = {
          rowsAffected: dbTruck,
          masterLog: dbMasterLog
        };
        res.json(returnOb);
      });
    });
  });
};
