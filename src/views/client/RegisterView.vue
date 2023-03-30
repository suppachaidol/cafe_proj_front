<template>
  <div>
    <section class="vh-200" id="section-all">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black mt-5 mb-5" style="border-radius: 25px">
              <div class="card-body p-md-5" >
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <input
                            v-model="state.u_name"
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                            placeholder="Your Name"
                          />

                          <span v-if="v$.u_name.$error" class="text-danger">{{
                            v$.u_name.$errors[0].$message
                          }}</span>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <input
                            v-model="state.u_username"
                            type="text"
                            id="form3Example2c"
                            class="form-control"
                            placeholder="Your Username"
                          />

                          <span
                            v-if="v$.u_username.$error"
                            class="text-danger"
                            >{{ v$.u_username.$errors[0].$message }}</span
                          >
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <input
                            v-model="state.u_password"
                            type="password"
                            id="form3Example3c"
                            class="form-control"
                            placeholder="Password"
                          />

                          <span
                            v-if="v$.u_password.$error"
                            class="text-danger"
                            >{{ v$.u_password.$errors[0].$message }}</span
                          >
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <input
                            v-model="state.password_confirmation"
                            type="password"
                            id="form3Example4cd"
                            class="form-control"
                            placeholder="Repeat your password"
                          />

                          <span
                            v-if="v$.password_confirmation.$error"
                            class="text-danger"
                            >{{
                              v$.password_confirmation.$errors[0].$message
                            }}</span
                          >
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <input
                            v-model="state.u_email"
                            type="email"
                            id="form3Example5c"
                            class="form-control"
                            placeholder="Email"
                          />

                          <span v-if="v$.u_email.$error" class="text-danger">{{
                            v$.u_email.$errors[0].$message
                          }}</span>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <input
                            v-model="state.u_phone"
                            type="text"
                            id="form3Example6c"
                            class="form-control"
                            placeholder="Phone"
                          />

                          <span v-if="v$.u_phone.$error" class="text-danger">{{
                            v$.u_phone.$errors[0].$message
                          }}</span>
                        </div>
                      </div>

                      <div class="mb-2">Upload Profile</div>
                      <div class="d-flex flex-row align-items-center">
                        <form class="btn btn-secondary mb-2">
                        <div class="uploadImg file">
                          <label class="file-label">
                            <input
                              name="photo"
                              class="file-input"
                              type="file"                             
                              @change="onFileSelected"
                              style="display:none"                              
                            />
                            Click to upload profile
                          </label>
                        </div>
                        </form>
                      </div>
                          <p class="img mt-2" v-if="state.urlImage">
                            <img class="img-thumbnail" :src="state.urlImage" style="width: 100px; height: 100px;"/>
                          </p>
                      <span v-if="v$.selectedFile.$error" class="text-danger">{{
                            v$.selectedFile.$errors[0].$message
                          }}</span>

                      <div
                        class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                      >
                        <button
                          @click="signUp"
                          type="button"
                          class="btn btn-primary btn-lg mt-3"
                        >
                          Register
                        </button>
                      </div>
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
import AuthUser from "@/store/AuthUser";
import Swal from "sweetalert2";
import useValidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import Axios from "axios"

export default {
  name: "Register",
  setup() {
    const state = reactive({
      u_name: "",
      u_username: "",
      u_password: "",
      password_confirmation: "",
      u_email: "",
      u_phone: "",
      selectedFile: null,
      urlImage: "",
    });   
    const rules = computed(() => {
      return {
        u_name: { required },
        u_username: { required },
        u_password: { required, minLength: minLength(6) },
        password_confirmation: { required, sameAs: sameAs(state.u_password) },
        u_email: { required, email },
        u_phone: { required },
        selectedFile: {required}
      };
    });
    const v$ = useValidate(rules, state);

    return {
      state,
      v$,
    };
  },
  // data(){
  //   return{

  //   }
  // },
  methods: {
    onFileSelected(event) {
      this.state.selectedFile = event.target.files[0];
      this.state.urlImage = URL.createObjectURL(this.state.selectedFile);
    },

    async signUp() {
      this.v$.$validate();
      if (this.v$.$error) {
        Swal.fire({
          icon: "error",
          text: "Please fill out correct information.",
          confirmButtonColor: "#dd6b55",
        });
      } else {
        let res = await AuthUser.dispatch("register", this.state);
        if (res.success) {
          let loginForm = {
            u_username: this.state.u_username,
            u_password: this.state.u_password,
          };

          //upload image
          const fd = new FormData();
          fd.append("u_image", this.state.selectedFile);
          fd.append("u_id",res.u_id)
          const api_endpoint = "http://localhost:5000"
          Axios.put(api_endpoint+"/api/user/upload-img", fd)
                

          Swal.fire({
            icon: "success",
            title: "Registration successful",
            showConfirmButton: false,
            timer: 1500,
          });
          await AuthUser.dispatch("login", loginForm);
          this.$router.push("/");
        } else {
          Swal.fire({
            icon: "error",
            text: "Register failed",
            confirmButtonColor: "#dd6b55",
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.img-thumbnail{
  height: 30%;
  width: 30%;
}
#section-all{
  background-image: url(https://www.ryoiireview.com/upload/article/202210/1665482521_18e2999891374a475d0687ca9f989d83.jpg);
}
.card{
  background-color: #eee;
  opacity: 97%;
}
</style>
