import axios from 'axios';

const API_URL = 'http://localhost:3000/students';

export default {
  async getStudents() {
    const students = await axios.get(API_URL);
    return students;
  },

  async createStudent(ra, nome, cpf, email) {
    const response = await axios.post(API_URL, {
      ra, nome, cpf, email
    });
    return response.data;
  },

  async getStudent(ra) {
    const response = await axios.get(`${API_URL}/${ra}`);
    return response.data;
  },

  async updateStudent(ra, nome, email) {
    const response = await axios.patch(`${API_URL}/${ra}`, { nome, email });
    return response.data;
  },

  async deleteStudent(item) {
    const response = await axios.delete(`${API_URL}/${item.ra}`);
    return response.data;
  }
};
