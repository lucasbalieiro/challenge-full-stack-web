module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.createTable('students', {
        id: {
            type: Sequelize.UUID,
            primary: true,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
        },
        ra: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cpf: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    }),

    down: async (queryInterface) => queryInterface.dropTable('users'),
};