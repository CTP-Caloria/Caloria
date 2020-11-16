'use strict';
const {Model, Datatypes, DataTypes} = require('sequelize');
const { sequelize } = require('.');

module.exports = (sequelize,DataTypes) => {
    class Journal extends Model{}

Journal.init({
    dateOnly:{ 
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    totalCalories: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'journal'
});

Journal.associate = (models) => {
    Journal.belongsTo(models.User, {
        as: 'requester',
        foreignKey: 'requesterID',
    });
};
return Journal;
}