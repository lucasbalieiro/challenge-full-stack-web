const { Model, DataTypes, Sequelize } = require('sequelize');

class Student extends Model {
    static init(dbConnection) {
        super.init({
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            ra: DataTypes.STRING,
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize: dbConnection,
        });
    }
}

module.exports = Student;
