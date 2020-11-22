const { Router } = require('express');
const studentsRouter = require('./student.routes');

const routes = Router();

routes.get('/', (request, response) => {
    response.json({ message: 'API - Grupo A Educação - Challenge' });
});

routes.use('/students', studentsRouter);

module.exports = routes;
