<template>
  <div>
    <section class="vh-100" style="background-color: #eee">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style="border-radius: 1rem">
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/04/19/13/03/coffee-2242213_960_720.jpg"
                    alt="login form"
                    class="img-fluid h-100"
                    style="border-radius: 1rem 0 0 1rem"
                  />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <span class="h1 fw-bold mb-0">Cafe Hopper</span>
                      </div>

                      <h5
                        class="fw-normal mb-3 pb-3"
                        style="letter-spacing: 1px"
                      >
                        Sign into your account
                      </h5>

                      <div class="form-outline mb-4">
                        <input
                          v-model="form.u_username"
                          type="text"
                          id="form2Example17"
                          class="form-control form-control-lg"
                          required
                        />
                        <label class="form-label" for="form2Example17"
                          >Username</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          v-model="form.u_password"
                          type="password"
                          id="form2Example27"
                          class="form-control form-control-lg"
                          required
                        />
                        <label class="form-label" for="form2Example27"
                          >Password</label
                        >
                      </div>

                      <div class="pt-1 mb-4">
                        <button
                          @click="login"
                          class="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Login
                        </button>
                      </div>

                      <!-- <a class="small text-muted" href="#!">Forgot password?</a> -->
                      <p class="mb-5 pb-lg-2" style="color: #393f81">
                        Don't have an account?
                        <a href="/register" style="color: #393f81">Register here</a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AuthUser from "@/store/AuthUser"
import Swal from 'sweetalert2'

export default {
  name: "Login",
  data(){
    return {
      form:{
        u_username: "",
        u_password: "",
      },  
    }
  },
  methods:{
    async login(){
      let res = await AuthUser.dispatch("login", this.form);
      if(res.success){
        location.replace("/")
      }else{
        Swal.fire({
          icon: 'error',
          text: res.message,
          confirmButtonColor: '#dd6b55'
        })
        this.form.u_password = ""
      }
    }
  }
};
</script>

<style></style>
