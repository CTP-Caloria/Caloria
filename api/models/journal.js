'use strict';
 const { Model } = require('sequelize');
 

 module.exports = (sequelize, DataTypes) => {
     class Journal extends Model {}

     Journal.init({
         mealType: {
             type: DataTypes.STRING,
         }
     }, {
         sequelize,
         modelName: 'journal'

     });
     Journal.associate = (models) => {
         Journal.hasMany(models.Entry, {
             as: 'dailies',
             foreignKey: 'mealID'
         });
     }


     return Journal;
 };