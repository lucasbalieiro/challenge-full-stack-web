<template>
  <v-container>
    <v-alert dismissible v-if="hasMessage" :type="alertType">
      {{ alertMessage }}</v-alert
    >
    <v-row>
      <v-col><v-btn to="/student"> Cadastrar Aluno </v-btn></v-col>
    </v-row>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Digite sua busca"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="students"
        :search="search"
        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline"
                  >Tem certeza que deseja remover?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="closeDelete">Cancelar</v-btn>
                  <v-btn text @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="$router.push({ path: `/student/edit/${item.ra}` })"
          >
            mdi-pencil
          </v-icon>

          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import studentsService from "@/services/students.js";

export default {
  data: () => ({
    search: "",
    hasMessage: false,
    alertType: "",
    alertMessage: "",
    dialogDelete: false,
    headers: [
      {
        text: "RA",
        align: "center",
        value: "ra",
      },
      {
        text: "Nome",
        align: "center",
        value: "nome",
      },
      {
        text: "CPF",
        align: "center",
        value: "cpf",
      },
      {
        text: "Ações",
        align: "center",
        value: "actions",
        sortable: false,
      },
    ],
    students: [],
    editedItem: {
      ra: "",
      nome: "",
      cpf: "",
    },
    defaultItem: {
      ra: "",
      nome: "",
      cpf: "",
    },
  }),

  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  async created() {
    const response = await studentsService.getStudents();
    this.students = response.data;
  },
  methods: {
    editItem() {},
    deleteItem(item) {
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      const response = await studentsService.deleteStudent(this.editedItem);
      if (response.totalLines == 1) {
        this.hasMessage = true;
        (this.alertType = "success"), (this.alertMessage = response.message);
      }
      this.updateTable();
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
      });
    },
    async updateTable() {
      const response = await studentsService.getStudents();
      this.students = response.data;
    },
  },
};
</script>