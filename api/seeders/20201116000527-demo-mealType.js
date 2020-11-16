'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mealTypes', [
      {mealType: 'breakfast',çcreatedAt: new Date(),updatedAt: new Date()},
      {mealType: 'lunch',createdAt: new Date(),updatedAt: new Date()},
      {mealType: 'dinner',createdAt: new Date(),updatedAt: new Date()},
      {mealType: 'snack', createdAt: new Date(),updatedAt: new Date()}]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

