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
      <button type="submit" class="btn btn-primary">Update Contact</button>
    </form>
  </div>
</template>

<script>
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
    submitForm() {
      const updatedData = {
        contactName: this.formData.contactName,
        handphone: this.formData.handphone,
      };

      const contactId = this.$route.params.contactId; // Replace 'contactId' with your actual parameter name

      this.$axios
        .put(`http://localhost:3000/api/Contact/${contactId}`, updatedData)
        .then(() => {
          this.$router.push("/personalchat");
        })
        .catch((error) => {
          console.error("Error updating contact:", error);
        });
    },
  },
};
</script>

<style scoped></style>
