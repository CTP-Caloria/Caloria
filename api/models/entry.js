'use strict';
const {Model, DataTypes} = require('sequelize');

module.exports= (sequelize, DataTypes) => {
    class Entry extends Model {}

Entry.init({
    // entryID: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    Food: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    totalCalories: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dateOnly:{
        type: DataTypes.DATEONLY,
        allowNull: false,

    }
    
    
    },{
    sequelize,
    modelName: 'entry'

});
Entry.associate = (models) => {
    Entry.belongsTo(models.User, {
        as: 'owner',
        foreignKey: 'requesterID',
    
    });
    Entry.belongsTo(models.Journal, {
        as: 'meal',
        foreignKey: 'mealID'
    });
};

return Entry;
}