'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('services', {

      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },

      shortDescription: {

        type: Sequelize.TEXT,
      },

      header1: {
        type: Sequelize.STRING,
      },

      description1: {
        type: Sequelize.TEXT,
      },

      header2: {
        type: Sequelize.STRING,
      },

      description2: {
        type: Sequelize.TEXT,
      },

      summary1: {
        type: Sequelize.STRING,
      },

      summary2: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
      },

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('services');
  }

};
