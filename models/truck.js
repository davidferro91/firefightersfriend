module.exports = function(sequelize, DataTypes) {
  var Truck = sequelize.define("Truck", {
    truckType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    needsService: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    condition: {
      type: DataTypes.ENUM("excellent", "good", "fair", "poor", "critical"),
      allowNull: false,
      defaultValue: "excellent"
    },
    dateAcquired: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    serviceDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isInt: true
      }
    },
    expirationMileage: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    },
    capacity: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    }
  });

  Truck.associate = function(models) {
    models.Truck.belongsTo(models.Location, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  Truck.associate = function(models) {
    models.Truck.hasMany(models.Equipment, {});
  };

  return Truck;
};
