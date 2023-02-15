<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Cafe Hopper</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Another action</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li> -->


            <!-- <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
              >
            </li> -->
          </ul>

          <div>
            <button
              v-if="isAuthen()"
              @click="logout"
              type="button"
              class="btn btn-secondary me-2"
            >
              Sign out
            </button>
          </div>
          <img
              src="https://icon-library.com/images/profile-icon-white/profile-icon-white-22.jpg"
              class="img-fluid mx-2"
              alt="..."
              style="height: 3rem "
            />
          <div>
            <button
              v-if="!isAuthen()"
              @click="signInBtn"
              type="button"
              class="btn btn-secondary me-2"
            >
              Sign In
            </button>
          </div>
          <button 
            @click="searchBtn"
            class="btn btn-outline-light" 
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import AuthUser from "@/store/AuthUser";

export default {
  name: "Upperbar",
  components: {},
  data() {
    return {};
  },
  methods: {
    signInBtn() {
      this.$router.push("/login");
    },
    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
    async logout() {
      await AuthUser.dispatch("logout");
      this.$router.push("/");
    },
    searchBtn() {
      this.$router.push("/search");
    },
  },
};
</script>

<style></style>
