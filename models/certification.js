module.exports = function(sequelize, DataTypes) {
  var Certification = sequelize.define("Certification", {
    certId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    certType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateIssued: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    expDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    }
  });

  Certification.associate = function(models) {
    models.Certification.belongsTo(models.Personnel, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Certification;
};
