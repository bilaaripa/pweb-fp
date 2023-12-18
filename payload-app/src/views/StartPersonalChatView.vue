personal

<template>
  <div>
    <header>
      <div class="sidebar">
        <!-- <h5>{{ memberEmail }}</h5> -->
        <h2>Personal Chat</h2>
      </div>
    </header>
    <div class="chat">
      <div v-for="msg in messages" :key="msg.id" class="message">
        <p>{{ msg.personalmessage }}</p>
        <!-- <small>{{ msg.createdAt | formatDate }}</small> -->
      </div>

      <div class="mb-3">
        <label for="exampleInputChat" class="form-label"></label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Type a message"
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
      selectedMember: null,
      memberEmail: "Member Email",
    };
  },
  filters: {
    formatDate: function (value) {
      const date = new Date(value);
      return date.toLocaleTimeString();
    },
  },
  mounted() {
    this.fetchMessages();
    this.selectedMember = this.$route.query.memberId;
    this.fetchMemberEmail();
  },
  methods: {
    async fetchMessages() {
      try {
        const response = await fetch(
          "http://localhost:3000/api/Personalmessage"
        );
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

        const response = await fetch(
          "http://localhost:3000/api/Personalmessage",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              personalmessage: this.message,
              memberId: this.selectedMember,
            }),
          }
        );

        const result = await response.json();
        console.log("Message sent:", result);

        this.fetchMessages();
        this.message = "";
      } catch (error) {
        console.error("Error sending message:", error);
      }
    },
    async fetchMemberEmail() {
      try {
        if (this.selectedMember) {
          const response = await fetch(
            `http://localhost:3000/api/loginMember/${this.selectedMember}`
          );
          const data = await response.json();
          this.memberEmail = data.docs[0].email;
        }
      } catch (error) {
        console.error("Error fetching member email:", error);
      }
    },
  },
};
</script>

<style></style>
