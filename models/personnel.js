module.exports = function(sequelize, DataTypes) {
  var Personnel = sequelize.define("Personnel", {
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
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
    homePhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cellPhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userEmail: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "password",
      validate: {
        len: [8]
      }
    },
    permissionLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isInt: true
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

  Personnel.associate = function(models) {
    models.Personnel.hasMany(models.Certification, {});
  };

  Personnel.associate = function(models) {
    models.Personnel.belongsTo(models.Location, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  Personnel.associate = function(models) {
    models.Personnel.hasMany(models.MasterLog, {});
  };

  return Personnel;
};
