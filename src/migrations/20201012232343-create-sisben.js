module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sisbens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      value: {
        unique: true,
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        unique: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sisbens');
  },
};
