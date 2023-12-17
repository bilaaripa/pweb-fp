<template>
  <section class="gradient-custom">
    <div class="mask-custom">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0">
            <h5 class="font-weight-bold mb-3 text-center">Member</h5>
            <div class="card mask-custom">
              <div class="card-body">
                <ul class="list-unstyled mb-0">
                  <li
                    v-for="member in members"
                    :key="member.id"
                    class="p-2 border-bottom"
                  >
                    <a
                      href="#!"
                      class="d-flex justify-content-between link-light"
                    >
                      <div class="d-flex flex-row">
                        <div class="pt-1">
                          <p class="fw-bold mb-0">{{ member.email }}</p>
                          <!-- Tambahkan informasi lain tentang member jika diperlukan -->
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-7 col-xl-7 d-flex flex-column justify-content-between"
          >
            <ul class="list-unstyled text-white">
              <li
                v-for="chat in chats"
                :key="chat.id"
                class="d-flex justify-content-between mb-4"
              >
                <div class="card mask-custom">
                  <div
                    class="card-header d-flex justify-content-between p-3 border-bottom"
                  >
                    <p class="fw-bold mb-0">{{ chat.createdAt }}</p>
                    <!-- Tambahkan informasi lain tentang chat jika diperlukan -->
                  </div>
                  <div class="card-body">
                    <p class="mb-0">{{ chat.chat }}</p>
                  </div>
                </div>
              </li>
            </ul>
            <div id="messageForm">
              <div class="form-outline form-white mb-3">
                <textarea
                  class="form-control"
                  v-model="message"
                  rows="4"
                ></textarea>
                <label class="form-label" for="textAreaExample3">Message</label>
              </div>
              <button
                @click="sendMessage"
                class="btn btn-light btn-lg btn-rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "",
      members: [],
      chats: [],
    };
  },
  mounted() {
    this.fetchMembers();
    this.fetchChats();
  },
  methods: {
    sendMessage() {
      // Kirim pesan ke API chat di sini
      console.log("Pesan yang dikirim:", this.message);
    },
    fetchMembers() {
      // Ambil data member dari API di sini
      axios
        .get("http://localhost:3000/api/loginMember")
        .then((response) => {
          this.members = response.data.docs;
        })
        .catch((error) => {
          console.error("Error fetching members:", error);
        });
    },
    fetchChats() {
      // Ambil data chat dari API di sini
      axios
        .get("http://localhost:3000/api/Chat")
        .then((response) => {
          this.chats = response.data.docs;
        })
        .catch((error) => {
          console.error("Error fetching chats:", error);
        });
    },
  },
};
</script>

<style scoped>
body,
html {
  height: 100%;
  margin: 0;
}

.gradient-custom {
  background: #007bff; /* Warna biru */
  color: #fff; /* Warna teks putih */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.mask-custom {
  background: rgba(
    255,
    255,
    255,
    0.2
  ); /* Warna latar belakang putih transparan */
  border-radius: 2em;
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 255, 255, 0.05);
  background-clip: padding-box;
  box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
  color: #fff; /* Warna teks putih */
  height: 80%; /* Sisakan 80% dari tinggi halaman */
  overflow: hidden;
}

.list-unstyled {
  list-style: none;
  padding: 0;
}

.link-light {
  color: #fff !important; /* Warna teks putih untuk link */
  text-decoration: none !important;
}

.link-light:hover {
  text-decoration: underline !important; /* Efek underline pada hover */
}

.btn-light {
  background-color: #fff; /* Warna latar belakang putih untuk tombol */
  color: #007bff; /* Warna teks biru untuk tombol */
  border-color: #fff; /* Warna border putih untuk tombol */
}

.btn-light:hover {
  background-color: #f0f0f0; /* Warna latar belakang abu-abu muda pada hover */
}

.form-outline {
  position: relative;
  box-sizing: border-box;
}

.form-control {
  border-radius: 0;
  border: 1px solid #fff; /* Warna border putih untuk input textarea */
  background-color: transparent; /* Hapus latar belakang */
  color: #fff; /* Warna teks putih */
}

.form-control:focus {
  box-shadow: none; /* Hapus shadow pada focus */
}
</style>
