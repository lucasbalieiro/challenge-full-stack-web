<template>
  <v-container>
    <v-alert dismissible v-if="hasMessage" :type="alertType">
      {{ alertMessage }}</v-alert
    >
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="ra"
        label="RA"
        disabled
        placeholder="Criado automaticamente pelo sistema"
      ></v-text-field>

      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Nome"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="cpf"
        :rules="cpfRules"
        label="CPF"
        :disabled="isEdition"
        required
      ></v-text-field>
      <v-btn class="mr-4" type="button" to="/student/index"> Cancelar </v-btn>
      <v-btn v-if="!isEdition" class="mr-4" type="button" @click="reset()"> Limpar </v-btn>
      <v-btn class="mr-4" type="submit" @click="submit()" :disabled="!valid">
        Salvar
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import studentService from "@/services/students.js";

export default {
  data: () => ({
    alertType: "",
    alertMessage: "",
    hasMessage: false,
    valid: false,
    name: "",
    nameRules: [(v) => !!v || "Nome é obrigatório"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
    ],
    ra: "",
    cpf: "",
    cpfRules: [(v) => !!v || "CPF é obrigatório"],
    isEdition: false,
  }),
  async created() {
    const ra = this.$router.history.current.params.id;
    if (ra != undefined) {
      this.isEdition = true;
      const student = await studentService.getStudent(ra);
      this.ra = student.ra;
      this.email = student.email;
      this.cpf = student.cpf;
      this.name = student.nome;
    }
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    submit() {
      if (this.isEdition) {
        studentService
          .updateStudent(this.ra, this.name, this.email)
          .then(() => {
            this.hasMessage = true;
            this.alertMessage = "Aluno atualizado com sucesso";
            this.alertType = "success";
          })
          .catch(() => {
            this.hasMessage = true;
            this.alertMessage = "Erro ao atualizar aluno";
            this.alertType = "error";
          });
        return;
      }

      studentService
        .createStudent(this.ra, this.name, this.cpf, this.email)
        .then(() => {
          this.reset();
          this.hasMessage = true;
          this.alertMessage = "Aluno cadastrado com sucesso";
          this.alertType = "success";
        })
        .catch(() => {
          this.hasMessage = true;
          this.alertMessage = "Erro ao cadastrar aluno";
          this.alertType = "error";
        });
    },
  },
};
</script>