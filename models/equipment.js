module.exports = function(sequelize, DataTypes) {
  var Equipment = sequelize.define("Equipment", {
    equipId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    equipType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    serialNumber: {
      type: DataTypes.STRING
    },
    condition: {
      type: DataTypes.ENUM("excellent", "good", "fair", "poor", "critical"),
      allowNull: false,
      defaultValue: "excellent",
      validate: {
        notEmpty: true
      }
    },
    serviceDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    expireDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    }
  });

  Equipment.associate = function(models) {
    models.Equipment.belongsTo(models.Location, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  Equipment.associate = function(models) {
    models.Equipment.belongsTo(models.Truck, {});
  };

  return Equipment;
};
