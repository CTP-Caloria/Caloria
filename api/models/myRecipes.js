'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class MyRecipies extends Model { }

    MyRecipies.init({

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                notEmpty: true
            }

        },


        totalCalories: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        servingSize: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },


        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

    }, {
        sequelize,
        modelName: 'myRecipes'
    });
    MyRecipies.associate = (models)=>{


        models.MyRecipes.hasMany(models.Ingredients)
            

        models.MyRecipes.belongsTo(models.User)
    }

    return MyRecipies;
};