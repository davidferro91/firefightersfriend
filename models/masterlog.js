module.exports = function(sequelize, DataTypes) {
  var MasterLog = sequelize.define("MasterLog", {
    entryType: {
      type: DataTypes.ENUM("CREATE", "UPDATE", "DELETE"),
      allowNull: false
    },
    record: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  MasterLog.associate = function(models) {
    models.MasterLog.belongsTo(models.Personnel, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return MasterLog;
};
