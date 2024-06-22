'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('babs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_bab: {
        type: Sequelize.STRING
      },
      label_sub_bab_gratis: {
        type: Sequelize.STRING
      },
      progress_bar: {
        type: Sequelize.STRING
      },
      id_mata_pelajaran: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
          defaultValue: Sequelize.fn("Now"),
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
          defaultValue: Sequelize.fn("Now"),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('babs');
  }
};