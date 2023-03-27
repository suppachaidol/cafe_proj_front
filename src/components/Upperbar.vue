<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand"  href="/"><img
        src="https://cdn-icons-png.flaticon.com/512/2069/2069532.png"
        class="img-fluid mx-2"
        alt="..."
        style="height: 2rem"
      />Cafe Hopper</a>
        
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
              <a class="nav-link active" aria-current="page" href="/"><i class="bi bi-house"></i> Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" v-if="isAuthen()" aria-current="page" href="/add">Add Cafe</a>
            </li>
            <li v-if="role=='admin' && isAuthen()" class="nav-item">
              <a class="nav-link active" aria-current="page" href="/approve">Cafe Management</a>
            </li>
            
            <ul class="navbar-nav pb-2 mb-lg-0">
              <li class="nav-item">
                  <a class="nav-link active" style="color: white " aria-current="page" href="/map"><i class="bi bi-search"></i></a>
              </li>
            </ul>
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
          <button class="profile-button" v-if="role=='user' && isAuthen()" @click="goToProfile(userId)">
          <!-- <img
              :src="`http://localhost:5000/api/images/profile/${user.u_image}`"
              class="rounded-circle mx-2"
              width="50" 
              alt="..."
              style="height: 2.5rem"
            /> -->
            <div class="circle-frame mx-2 text-white" style="textTransform: uppercase">
              {{user.u_name.charAt(0)}}
            </div>       
          </button>
          <button class="profile-button me-2 pt-2" v-if="role=='admin' && isAuthen()" @click="goToProfile(userId)">
            <h3  style="color:white" >Admin</h3>
          </button>
          <div>
            <button
              v-if="isAuthen()"
              @click="logout"
              type="button"
              class="btn btn-secondary me-2"
            >
              Sign out <i class="bi bi-box-arrow-right"></i>
            </button>
          </div>
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
    return {
      userId: AuthUser.getters.user.u_id,
      role: AuthUser.getters.user.u_role,
      user: AuthUser.getters.user,
    };
  },
  methods: {
    signInBtn() {
      this.$router.push("/login");
    },
    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
    goToProfile(id){
      this.$router.push({ path: "/profile/" + id, params: { id: id } });
    },
    async logout() {
      await AuthUser.dispatch("logout");
      location.replace("/")
    },
  },
};
</script>

<style scoped>
.profile-button { 
  border: none;
  background-color: #212529;
  cursor: pointer;
  }
.circle-frame {
  width: 30px;
  border-radius: 50%;
  border: 3px solid rgb(255, 255, 255);
  overflow: hidden;
  box-sizing: border-box;
}
</style>

