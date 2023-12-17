<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="exampleInputName1" class="form-label">Channel Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputName1"
          v-model="formData.channelName"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Channel Description</label
        >
        <textarea
          type="text"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="formData.channelDescription"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Add Channel</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        channelName: "",
        channelDescription: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        // Make a POST request to the add channel endpoint
        await axios.post("http://localhost:3000/api/Group", {
          channelName: this.formData.channelName,
          channelDescription: this.formData.channelDescription,
        });

        // Navigate to the home page on successful channel addition
        this.$router.push("/home");
      } catch (error) {
        // Handle any errors here
        console.error("Error during channel addition:", error.message);
      }
    },
  },
};
</script>

<style scoped></style>
