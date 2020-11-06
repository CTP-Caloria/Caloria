'use strict';
 const { Model } = require('sequelize');
 const { sequelize } = require('.');

 module.exports = (sequelize, DataTypes) => {
     class Journal extends Model {}

     Journal.init({
         journalID: {
             type: DataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         mealType: {
             type: DataTypes.STRING,
             allowNull: false
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