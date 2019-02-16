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
      validate: {
        isInt: true,
        len: [10, 10]
      }
    },
    cellPhone: {
      type: DataTypes.STRING,
      validate: {
        isInt: true,
        len: [10, 10]
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
      defaultValue: function() {
        return this.firstName + "." + this.lastName + this.uid;
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    }
  });

  Personnel.associate = function(models) {
    models.Personnel.hasMany(models.Certification, {
      onDelete: "CASCADE"
    });
  };
  return Personnel;
};
