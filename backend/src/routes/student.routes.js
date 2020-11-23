const { Router } = require('express');
const Student = require('../models/Student');

const studentRouter = Router();

studentRouter.get('/', async (request, response) => {
    const students = await Student.findAll();

    return response.json(students);
});

studentRouter.post('/', async (request, response) => {
    const { nome, cpf, email } = request.body;

    const studentByCpf = await Student.findOne({ where: { cpf } });

    if (studentByCpf != null) {
        return response.status(400).json({ message: 'CPF já cadastrado no sistema' });
    }

    const student = await Student.create({
        nome, cpf, email,
    });

    return response.status(201).json(student);
});

studentRouter.delete('/:ra', async (request, response) => {
    const { ra } = request.params;
    const totalLines = await Student.destroy({ where: { ra } });
    return response.json(
        {
            message: 'Aluno excluido com sucesso',
            totalLines,
        },
    );
});

module.exports = studentRouter;
