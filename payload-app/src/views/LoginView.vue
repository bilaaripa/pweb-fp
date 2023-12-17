<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          v-model="formData.email"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="formData.password"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        // Make a POST request to the login endpoint without checking the response
        await axios.post(
          "http://localhost:3000/api/loginMember",
          this.formData
        );

        // Navigate to the home page on successful login
        this.$router.push("/home");
      } catch (error) {
        // Handle any errors here
        console.error("Error during login:", error.message);
      }
    },
  },
};
</script>

<style scoped>
/* Gaya untuk menengahkan form secara horizontal dan vertikal */
.login-form {
  max-width: 450px; /* Menambahkan lebar pada form */
  padding: 20px; /* Menambahkan padding agar form tidak terlalu dekat dengan tepi */
  border-radius: 10px; /* Menambahkan sudut yang lebih besar */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Menambahkan bayangan */
  margin-left: auto !important; /* Menggeser ke kanan dengan !important */
}
</style>
