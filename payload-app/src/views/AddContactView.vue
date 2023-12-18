<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="exampleInputName1" class="form-label">Contact Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputName1"
          v-model="formData.contactName"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputHandphone1" class="form-label">Handphone</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputHandphone1"
          v-model="formData.handphone"
        />
      </div>
      <button type="submit" class="btn btn-primary">Add Contact</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        contactName: "",
        handphone: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        await axios.post("http://localhost:3000/api/Contact", {
          contactName: this.formData.contactName,
          handphone: this.formData.handphone,
        });
        this.$router.push("/personalchat");
      } catch (error) {
        console.error("Error during contact addition:", error.message);
      }
    },
  },
};
</script>

<style scoped></style>
