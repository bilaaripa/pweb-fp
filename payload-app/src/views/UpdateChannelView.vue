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
      <button type="submit" class="btn btn-primary">Update Channel</button>
    </form>
  </div>
</template>

<script>
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
    submitForm() {
      const updatedData = {
        channelName: this.formData.channelName,
        channelDescription: this.formData.channelDescription,
      };
      this.$axios
        .put(
          `http://localhost:3000/api/Group/${this.$route.params.groupId}`,
          updatedData
        )
        .then(() => {
          this.$router.push("/groupchat");
        })
        .catch((error) => {
          console.error("Error updating channel:", error);
        });
    },
  },
};
</script>

<style scoped></style>
