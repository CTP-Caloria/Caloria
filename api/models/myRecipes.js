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
        img: {
            type:DataTypes.BLOB('long'),
            allowNull:true

        }

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