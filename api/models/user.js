'use strict';
const { Model} = require('sequelize'); 
const bcrypt = require('bcryptjs');

// module.exports =(sequelize, DataTypes) => {
//     class User extends Model{}

//     User.init({
//         userID:{
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         username: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 isAlphanumeric: true
//             }
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 isEmail: true
//             }
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//     },{
//         sequelize, 
//         modelName: 'User'
//     });

//     User.associate = (models) => {


//         models.User.hasMany(models.MyRecipes)

//     }

//     return User;
// };

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    getFullname() {
      return [this.firstName, this.lastName].join(' ');
    }
  }

  User.init({
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    passwordHash: { type: DataTypes.STRING },
    password: { 
      type: DataTypes.VIRTUAL,
      validate: {
        isLongEnough: (val) => {
          if (val.length < 7) {
            throw new Error("Please choose a longer password");
          }
        },
      },
    },
  }, {
    sequelize,
    modelName: 'User'
  });

  User.associate = (models) => {
    models.User.hasMany(models.MyRecipes);
  };

  User.beforeSave((user, options) => {
    if(user.password) {
      user.passwordHash = bcrypt.hashSync(user.password, 10);
    }
  });

  return User;
}; 