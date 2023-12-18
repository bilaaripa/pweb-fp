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
        <a class="navbar-brand" href="#">ChattingApp</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="#">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/personalchat">Personal Chat</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/groupchat">Group Chat</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/">Logout</router-link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <div>
      <h1>ChatingApp</h1>
      <p>Project ini dibuat untuk memenuhi Eavalusi Akhir Semester.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  height: 70px;
}

main {
  margin-top: 70px;
}
</style>
