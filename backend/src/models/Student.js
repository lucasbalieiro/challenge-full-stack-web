const { Model, DataTypes } = require('sequelize');

class Student extends Model {
    static init(dbConnection) {
        super.init({
            ra: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize: dbConnection,
        });
    }
}

module.exports = Student;
