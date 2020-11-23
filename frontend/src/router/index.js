import StudentList from '@/views/StudentList.vue';
import Student from '@/views/Student.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    title: 'Home',
    component: Home,
  },
  {
    path: '/student',
    name: 'Cadastro de Aluno',
    component: Student,
  },
  {
    path: '/student/edit/:id',
    name: 'Atualização de Aluno',
    component: Student
  },
  {
    path: '/student/index',
    name: 'Consulta de Alunos',
    component: StudentList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
