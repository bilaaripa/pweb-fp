<template>
  <div>
    <header>
      <div class="sidebar">
        <h5>{{ groupName }}</h5>
        <h2>Channel</h2>
      </div>
    </header>
    <div class="chat">
      <div v-for="msg in messages" :key="msg.id" class="message">
        <p>{{ msg.chat }}</p>
        <small>{{ msg.timestamp }}</small>
      </div>

      <div class="mb-3">
        <label for="exampleInputChat" class="form-label"></label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Ketik Pesan"
          v-model="message"
        />
        <button @click="sendMessage" class="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      messages: [],
      selectedGroup: null,
      groupName: "Nama Group",
    };
  },
  mounted() {
    this.fetchMessages();
    this.selectedGroup = this.$route.query.groupId;
    this.fetchGroupName();
  },
  methods: {
    async fetchMessages() {
      try {
        const response = await fetch("http://localhost:3000/api/Message");
        const data = await response.json();
        this.messages = data.docs.reverse();
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    },
    async sendMessage() {
      try {
        if (this.message.trim() === "") {
          return;
        }

        if (!this.selectedGroup) {
          console.error("No group selected.");
          return;
        }

        const response = await fetch("http://localhost:3000/api/Message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat: this.message,
            groupId: this.selectedGroup,
          }),
        });

        const result = await response.json();
        console.log("Message sent:", result);

        this.fetchMessages();
        this.message = "";
      } catch (error) {
        console.error("Error sending message:", error);
      }
    },
    async fetchGroupName() {
      try {
        if (this.selectedGroup) {
          const response = await fetch(
            `http://localhost:3000/api/Group/${this.selectedGroup}`
          );
          const data = await response.json();
          this.groupName = data.channelName;
        }
      } catch (error) {
        console.error("Error fetching group name:", error);
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding-top: 20px;
  font-family: "Inter", sans-serif;
}
.sidebar {
  height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0d6efd;
  color: #fff;
  padding-top: 40px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
}
.chat {
  position: fixed;
  bottom: 0;
  left: 300px; 
  width: calc(100% - 250px); 
  padding: 10px;
}

.message {
  background-color: #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
  margin-right: 150px;
  border-radius: 5px;
  text-align: right;
}

.chat input {
  width: calc(100% - 150px);
  margin-right: 10px;
}

.chat button {
  width: 70px;
  margin-top: 10px;
}
</style>
