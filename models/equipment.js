module.exports = function(sequelize, DataTypes) {
  var Equipment = sequelize.define("Equipment", {
    equipId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    serviceDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    expireDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true
      }
    }
  });

  return Equipment;
};
