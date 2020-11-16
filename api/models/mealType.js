'use strict';
 const { Model } = require('sequelize');
 

 module.exports = (sequelize, DataTypes) => {
     class MealType extends Model {}

     MealType.init({
         mealType: {
             type: DataTypes.STRING,
         }
     }, {
         sequelize,
         modelName: 'mealType'

     });
     MealType.associate = (models) => {
         MealType.hasMany(models.Entry, {
             as: 'dailies',
             foreignKey: 'mealID'
         });
     }


     return MealType;
 };