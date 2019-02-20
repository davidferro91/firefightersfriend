module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define("Location", {
    stationNameOrNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    addressLine1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    addressLine2: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        len: [2, 2]
      }
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isInt: true,
        len: [5, 9]
      }
    },
    region: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: "United States of America"
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isInt: true,
        len: [10, 10]
      }
    },
    faxNumber: {
      type: DataTypes.STRING,
      validate: {
        isInt: true,
        len: [10, 10]
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    nameOfChief: {
      type: DataTypes.STRING
    }
  });

  Location.associate = function(models) {
    models.Location.hasMany(models.Personnel, {});
  };

  Location.associate = function(models) {
    models.Location.hasMany(models.Truck, {});
  };

  Location.associate = function(models) {
    models.Location.hasMany(models.Equipment, {});
  };

  return Location;
};
