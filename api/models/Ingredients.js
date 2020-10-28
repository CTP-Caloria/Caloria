'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Ingredients extends Model { }

    Ingredients.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate: {
                notEmpty: true
            }
        },
        servingSize: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            unique: false,
            validate: {
                notEmpty: true
            }
           
        },

        servingType:{
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                notEmpty: true
            }

        },
        calories: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

    }, {
        sequelize,
        modelName: 'ingredients'
    });
    Ingredients.associate = (models) => {

        models.Ingredients.belongsToMany(models.MyRecipes,{through: 'User'});
    }

    return Ingredients;
};