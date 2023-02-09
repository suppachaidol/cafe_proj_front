<template>
   
    <div style="background-color: #eee"> 


        <section class="pt-5 pb-0">
            <div class="container ">
            <div class="row align-items-center ">
                <div class="col-12 col-md-7   mt-4 mt-md-0">
                    <img alt="image" class="img-fluid"
                    src=" https://dummyimage.com/650x450/5fa9f8/efefef">

                    <form class="btn btn-secondary mb-4 mt-4 ">
                        <div class="d-flex flex-row align-items-center">
                            <div class="uploadImg file">
                                <label class="file-label">
                                <input
                                    name="photo"
                                    class="file-input"
                                    type="file"                             
                                    @change="onFileSelected"                              
                                />
                                  <i class="bi bi-cloud-upload "></i>
                                </label>
                                <p class="img mt-2" v-if="state.urlImage">
                                <img class="img-thumbnail" :src="state.urlImage" />
                                </p>
                            </div>
                        </div>
                    </form>
                    

                </div>

                <div class="col-12 col-md-4 offset-md-1  ">
                    <div class="col-md-6 col-lg-7 d-flex align-items-center w-100">
                        <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                            <input type="text" class="form-control form-control-lg" required/>
                        </div>
                        <h5>Name</h5>
                    </div>

                    <div class="dropdown pb-4 align-items-center w-100 ">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Location or Near by
                        </a>

                        <ul class="dropdown-menu w-100">
                            <li><a class="nav-link" href="#">Choice1</a></li>
                            <li><a class="nav-link" href="#">Choice2</a></li>
                            <li><a class="nav-link" href="#">Choice3</a></li>
                        </ul>

                    </div>

                    <div class="col-md-6 col-lg-7 d-flex align-items-center w-100">
                        <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                            <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
                        </div>
                        <h5>Detail</h5>
                    </div>

                     <div class="dropdown pb-4">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Style
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                    <div class="col-md-6 col-lg-7 d-flex align-items-center w-100">
            <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                <input type="text" class="form-control form-control-lg" required/>
            </div>
            <h5>Service</h5>
        </div>
                           

                
                </div>
            </div>
            </div>
        </section>
        
       
        <h3  class=" mt-150px  " style="background-color: red " >Popular dishes</h3>

        <section class="pt-5 pb-4">
            <div class="container pb-5 ">

                <div class="row text-center justify-content-sm-center no-gutters">

                    <div class="col-3  h-50   ">
                         <div class="card   shadow  ">
                            <div class=" card-body   p-md-3 ">
                                <img alt="image"
                                class="img-fluid d-block mx-auto mt-md-3 mb-4 mt-sm-2 w-100"
                                src=" https://dummyimage.com/100/5fa9f8/efefef">
                                
                                
                                <button type="button" class="btn btn-secondary mb-4  w-100">
                                    Uplode image
                                    <i class="bi bi-cloud-upload "></i>
                                </button>

                                 <div class=" align-items-center w-100">
                                    <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                                        <input type="text" class="form-control form-control-lg" required/>
                                    </div>
                                </div>

                            </div>
                        </div> 
                    </div>

                    <div class="col-3  h-50   ">
                         <div class="card   shadow  ">
                            <div class=" card-body   p-md-3 ">
                                <img alt="image"
                                class="img-fluid d-block mx-auto mt-md-3 mb-4 mt-sm-2 w-100"
                                src=" https://dummyimage.com/100/5fa9f8/efefef">
                                
                                
                                <button type="button" class="btn btn-secondary mb-4  w-100">
                                    Uplode image
                                    <i class="bi bi-cloud-upload "></i>
                                </button>

                                 <div class=" align-items-center w-100">
                                    <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                                        <input type="text" class="form-control form-control-lg" required/>
                                    </div>
                                </div>

                            </div>
                        </div> 
                    </div>
                   
                    <div class="col-3  h-50   ">
                         <div class="card   shadow  ">
                            <div class=" card-body   p-md-3 ">
                                <img alt="image"
                                class="img-fluid d-block mx-auto mt-md-3 mb-4 mt-sm-2 w-100"
                                src=" https://dummyimage.com/100/5fa9f8/efefef">
                                
                                
                                <button type="button" class="btn btn-secondary mb-4  w-100">
                                    Uplode image
                                    <i class="bi bi-cloud-upload "></i>
                                </button>

                                 <div class=" align-items-center w-100">
                                    <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                                        <input type="text" class="form-control form-control-lg" required/>
                                    </div>
                                </div>

                            </div>
                        </div> 
                    </div>


                    <div class="col-3  h-50   ">
                         <div class="card   shadow  ">
                            <div class=" card-body   p-md-3 ">
                                <img alt="image"
                                class="img-fluid d-block mx-auto mt-md-3 mb-4 mt-sm-2 w-100"
                                src=" https://dummyimage.com/100/5fa9f8/efefef">
                                
                                
                                <button type="button" class="btn btn-secondary mb-4  w-100">
                                    Uplode image
                                    <i class="bi bi-cloud-upload "></i>
                                </button>

                                 <div class=" align-items-center w-100">
                                    <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                                        <input type="text" class="form-control form-control-lg" required/>
                                    </div>
                                </div>

                            </div>
                        </div> 
                    </div>


                </div>

            </div>
        </section>


     <div class="pb-5  ov-hidden align-items-bottom d-flex cover ov-hidden container-fluid"> 
        <div class="container-fluid">
          <div
            class="row align-items-center justify-content-center  text-center">
            <div class="col-12 col-md-8 p-0 p-md-3 ">
             
              <button class="btn btn-secondary" type="button">
                Add
              </button>

            </div>
          </div>
        </div>
      </div>

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
          text: "Please fill in the correct information.",
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
            text: res.message,
            confirmButtonColor: "#dd6b55",
          });
        }
      }
    },
  },
};
</script>
<style>
</style>