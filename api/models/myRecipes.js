'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class MyRecipes extends Model { }

    MyRecipes.init({

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                notEmpty: true
            }

        },
        ingredients:{
            type: DataTypes.STRING,
            allowNull: false

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
            allowNull: true,
        },

        unit:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        instructions: {
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
    MyRecipes.associate = (models)=>{
        MyRecipes.belongsTo(models.User, {
            as:'owner',
            foreignKey: 'requesterID',
        })
       


        // models.MyRecipes.hasMany(models.Ingredients)
            

    }

    return MyRecipes;
};