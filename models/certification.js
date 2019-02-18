module.exports = function(sequelize, DataTypes) {
  var Certification = sequelize.define("Certification", {
    certId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    certType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dateIssued: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isDate: true
      }
    },
    expDate: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isDate: true,
        len: [6, 6]
      }
    }
  });
  return Certification;
};
