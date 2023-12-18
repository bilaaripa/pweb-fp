<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/home">BackToHome</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <router-link class="btn btn-outline-primary me-2" to="/addchannel">
            <i class="bi bi-plus"></i> Add Channel
          </router-link>
        </div>
      </div>
    </nav>

    <div class="container mt-5">
      <div class="row">
        <div
          v-for="(group, index) in groups"
          :key="index"
          class="col-sm-8 mb-2"
        >
          <div class="card h-200 shadow">
            <div class="card-body">
              <h5 class="card-title">{{ group.channelName }}</h5>
              <p class="card-text">{{ group.channelDescription }}</p>
              <button @click="joinChannel(group.id)" class="btn btn-primary">
                Start Chat
              </button>
              <button
                @click="deleteChannel(group.id)"
                class="btn btn-danger"
                style="margin-left: 6px"
              >
                Delete
              </button>
              <button
                @click="updateChannel(group.id)"
                class="btn btn-success"
                style="margin-left: 6px"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main class="mt-5">
      <div class="container"></div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groups: [],
    };
  },
  mounted() {
    this.getGroups();
  },
  activated() {
    this.getGroups();
  },
  methods: {
    async getGroups() {
      try {
        const response = await this.$axios.get(
          "http://localhost:3000/api/Group"
        );
        this.groups = response.data.docs;
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    },
    joinChannel(groupId) {
      console.log("Joining channel with ID:", groupId);
      this.$router.push({ path: "/channel", query: { groupId: groupId } });
    },
    async deleteChannel(groupId) {
      try {
        const authToken = this.yourAuthToken;
        await this.$axios.delete(`http://localhost:3000/api/Group/${groupId}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        this.groups = this.groups.filter((group) => group.id !== groupId);
      } catch (error) {
        console.error(`Error deleting group with ID ${groupId}:`, error);
      }
    },
    updateChannel(groupId) {
      console.log("Updating channel with ID:", groupId);
      this.$router.push({ path: `/update/${groupId}` });
    },
  },
};
</script>

<style>
nav {
  height: 70px;
}

main {
  margin-top: 70px;
}
.btn-success {
  background-color: #00ff00;
  border-color: #00ff00;
}
</style>
