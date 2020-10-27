'use strict';
const { Model} = require('sequelize');

module.exports =(sequelize, DataTypes) => {
    class User extends Model{}

    User.init({
        userID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

    },{
        sequelize, 
        modelName: 'user'
    });
    return User;
};