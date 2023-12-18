<!-- <template>
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
        <router-link to="/home" class="navbar-brand">BackToHome</router-link>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <router-link class="btn btn-outline-primary me-2" to="/addcontact">
            <i class="bi bi-plus"></i> Add Contact
          </router-link>
        </div>
      </div>
    </nav>

    <div class="container mt-5">
      <div class="row">
        <div
          v-for="contact in contacts"
          :key="contact.id"
          class="col-sm-8 mb-2"
        >
          <div class="card h-200 shadow">
            <div class="card-body">
              <h5 class="card-title">{{ contact.email }}</h5>
              <button
                @click="startPersonalChat(contact.id)"
                class="btn btn-primary"
              >
                Start Chat
              </button>
              <button
                @click="deleteContact(contact.id)"
                class="btn btn-danger"
                style="margin-left: 6px"
              >
                Delete
              </button>
              <button
                @click="updateContact(contact.id)"
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
      contacts: [],
      yourAuthToken: "",
    };
  },
  mounted() {
    this.getContacts();
  },
  methods: {
    async getContacts() {
      try {
        const response = await this.$axios.get(
          "http://localhost:3000/api/loginMember"
        );
        this.contacts = response.data.docs;
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    },
    startPersonalChat(contactId) {
      if (contactId) {
        console.log("Starting personal chat with ID:", contactId);
        this.$router.push({
          path: "/personalchatroom",
          query: { contactId: contactId },
        });
      } else {
        console.error("Invalid contact ID");
      }
    },
    async deleteContact(contactId) {
      try {
        await this.$axios.delete(
          `http://localhost:3000/api/loginMember/${contactId}`
        );
        this.contacts = this.contacts.filter(
          (contact) => contact.id !== contactId
        );
      } catch (error) {
        console.error(`Error deleting contact with ID ${contactId}:`, error);
      }
    },
    async updateContact(contactId) {
      console.log("Updating channel with ID:", contactId);
      this.$router.push({ path: `/updatecontact/${contactId}` });
    },
  },
};
</script>

<style scoped>
nav {
  height: 70px;
}

main {
  margin-top: 70px;
}
</style> -->

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
          <router-link class="btn btn-outline-primary me-2" to="/addcontact">
            <i class="bi bi-plus"></i> Add Channel
          </router-link>
        </div>
      </div>
    </nav>

    <div class="container mt-5">
      <div class="row">
        <div
          v-for="(contact, index) in contacts"
          :key="index"
          class="col-sm-8 mb-2"
        >
          <div class="card h-200 shadow">
            <div class="card-body">
              <h5 class="card-title">{{ contact.contactName }}</h5>
              <p class="card-text">{{ contact.handphone }}</p>
              <button @click="startChat(contact.id)" class="btn btn-primary">
                Start Chat
              </button>
              <button
                @click="deleteContact(contact.id)"
                class="btn btn-danger"
                style="margin-left: 6px"
              >
                Delete
              </button>
              <button
                @click="updateContact(contact.id)"
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
      contacts: [],
    };
  },
  mounted() {
    this.getContacts();
  },
  activated() {
    this.getContacts();
  },
  methods: {
    async getContacts() {
      try {
        const response = await this.$axios.get(
          "http://localhost:3000/api/Contact"
        );
        this.contacts = response.data.docs;
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    },
    startChat(contactId) {
      console.log("Starting chat with contact ID:", contactId);
      this.$router.push({
        path: "/personalchatroom",
        query: { contactId: contactId },
      });
    },
    async deleteContact(contactId) {
      try {
        // Modify the URL and headers accordingly
        await this.$axios.delete(
          `http://localhost:3000/api/Contact/${contactId}`
        );
        this.contacts = this.contacts.filter(
          (contact) => contact.id !== contactId
        );
      } catch (error) {
        console.error(`Error deleting contact with ID ${contactId}:`, error);
      }
    },
    async updateContact(contactId) {
      console.log("Updating channel with ID:", contactId);
      this.$router.push({ path: `/updatecontact/${contactId}` });
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
