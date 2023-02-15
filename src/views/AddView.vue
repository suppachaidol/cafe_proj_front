<template>
   
    <div style="background-color: #eee"> 

      <section class="pt-5">
        <div class="container ">
          <div class="row align-items-center ">
            
            <div class="col-12 col-md-7   mt-4 mt-md-0">
              <section class="py-5 text-center container">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXMlMjBjYWZlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        class="img-fluid w-100"
                        alt="..."
                        style="height: 32rem"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://s.isanook.com/tr/0/ui/285/1427369/Molyn-Cafe-02.jpg"
                        class="img-fluid w-100"
                        alt="..."
                        style="height: 32rem"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://media-cdn.tripadvisor.com/media/photo-s/10/e5/73/92/photo1jpg.jpg"
                        class="img-fluid w-100"
                        alt="..."
                        style="height: 32rem"
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </section>
              <div class = "row">
                <div class= "col">
                  <form class="btn btn-secondary mb-2  ">
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
                <div class ="col">
                  <div class="container-fluid">
                        <h5>Service</h5>

                        <div class="row">

                          <div class="col-6">
                              <input type="checkbox" name="pets" value="Other"> Creative Space<br>
                              <input type="checkbox" name="pets" value="Other"> Screening Room<br>
                              <input type="checkbox" name="pets" value="Other"> Karaoke<br>
                              <input type="checkbox" name="pets" value="Other"> Good for Group<br>
                              <input type="checkbox" name="pets" value="Other"> Pet Friendly<br>
                              <input type="checkbox" name="pets" value="Other"> Kids Friendly<br>
                              <input type="checkbox" name="pets" value="Other"> Creative Space<br>
                          </div>


                          <div class="col-6">
                            <input type="checkbox" name="pets" value="Other"> Screening Room<br>
                            <input type="checkbox" name="pets" value="Other"> Take Away<br>
                            <input type="checkbox" name="pets" value="Other"> No Reservations<br>
                            <input type="checkbox" name="pets" value="Other"> Cash Only<br>
                            <input type="checkbox" name="pets" value="Other"> Art Gallery<br>
                            <input type="checkbox" name="pets" value="Other"> Art Space<br>
                            <input type="checkbox" name="pets" value="Other"> Co-Working Space<br>
                          </div>



                        </div>
                        

                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-4 offset-md-1  ">
                <div class=" w-100 ">
                    <h5>Cafe Name</h5>
                    <div class="form-outline mb-4 justify-content-center align-items-center h-100"  placeholder="Name of Cafe" aria-label="Name of Cafe" >
                        <input type="text" placeholder="Name of Cafe" aria-label="Name of Cafe" class="form-control form-control-lg" required/>
                    </div>
                </div>

                <div class=" w-100 ">
                    <h5>Location in Google Map</h5>
                    <div class="form-outline mb-4 justify-content-center align-items-center h-100"  placeholder="Name of Cafe" aria-label="Name of Cafe" >
                        <input type="text" placeholder="" class="form-control form-control-lg" required/>
                    </div>
                </div>

                <!-- <div class=" w-100 pb-3">
                  <h5>Cafe Name</h5>
                  <div class="dropdown mb-2" >
                    <a class="btn btn-secondary dropdown-toggle w-100" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Location or Near by
                    </a>

                    <ul class="dropdown-menu " aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>

                  </div>
                </div> -->

                <div class=" w-100 pb-2">
                  <h5>Address</h5>
                  <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                      <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
                  </div>
                </div>

                <div class=" w-100 pb-3">
                  <h5>Time</h5>
                  <div class ="row pb-2">
                    <div class="col-3">
                      Monday
                    </div>
                    <div class="col">
                      <div class ="row">
                          <div class="col">    
                            <input type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          AM
                          <div class="col">    
                            <input type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          PM
                      </div>
                    </div>
                  </div>
                  <div class ="row pb-2">
                    <div class="col-3">
                      Tuesday
                    </div>
                    <div class="col">
                      <div class ="row">
                          <div class="col">    
                            <input type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          AM
                          <div class="col">    
                            <input type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          PM
                      </div>
                    </div>
                  </div>
                  <div class ="row pb-2">
                    <div class="col-3">
                      Wednesday
                    </div>
                    <div class="col">
                      <div class ="row">
                          <div class="col">    
                            <input type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          AM
                          <div class="col">    
                            <input type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          PM
                      </div>
                    </div>
                  </div>
                  <div class ="row pb-2">
                    <div class="col-3">
                      Thursday
                    </div>
                    <div class="col">
                      <div class ="row">
                          <div class="col">    
                            <input type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          AM
                          <div class="col">    
                            <input type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          PM
                      </div>
                    </div>
                  </div>
                  <div class ="row pb-2">
                    <div class="col-3">
                      Friday
                    </div>
                    <div class="col">
                      <div class ="row">
                          <div class="col">    
                            <input type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          AM
                          <div class="col">    
                            <input type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          PM
                      </div>
                    </div>
                  </div>
                  <div class ="row pb-2">
                    <div class="col-3">
                     Saturday
                    </div>
                    <div class="col">
                      <div class ="row">
                          <div class="col">    
                            <input type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          AM
                          <div class="col">    
                            <input type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          PM
                      </div>
                    </div>
                  </div>
                </div>

                <div class=" w-100 pb-2">
                  <h5>Detail</h5>
                  <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                      <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
                  </div>
                </div>

                <!-- <div class=" w-100 pb-3 ">
                  <h5>Style</h5>
                  <div class="dropdown mb-2" >
                    <a class="btn btn-secondary dropdown-toggle w-100" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Location or Near by
                    </a>

                    <ul class="dropdown-menu " aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>

                  </div>
                </div> -->
                


            
            </div>
             
          </div>
        </div>
      </section>

      <div class="container ">
        <h3  class=" mt-150px  mb-5 "  >Popular dishes</h3>
      </div>

      <section class=" pb-2">
          <div class="container pb-5 ">

              <div class="row text-center justify-content-sm-center no-gutters">

                  <div class="col-3  h-50">
                        <div class="card   shadow  ">
                          <div class=" card-body   p-md-3 ">
                              <img alt="image"
                              class="img-fluid d-block mx-auto mt-md-3 mb-4 mt-sm-2 w-100"
                              src=" https://dummyimage.com/100/5fa9f8/efefef">
                              
                              <form class="btn btn-secondary mb-4 w-100 ">
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

                                <div class=" align-items-center w-100">
                                  <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                                      <input type="text" class="form-control form-control-lg "  placeholder="Price" required/>
                                      <input type="text" class="form-control form-control-lg mt-2" placeholder="Name" required/>
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
                              
                              
                              <form class="btn btn-secondary mb-4 w-100 ">
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

                                <div class=" align-items-center w-100">
                                  <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                                      <input type="text" class="form-control form-control-lg "  placeholder="Price" required/>
                                      <input type="text" class="form-control form-control-lg mt-2" placeholder="Name" required/>
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
                              
                              
                                <form class="btn btn-secondary mb-4 w-100 ">
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

                                <div class=" align-items-center w-100">
                                  <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                                      <input type="text" class="form-control form-control-lg "  placeholder="Price" required/>
                                      <input type="text" class="form-control form-control-lg mt-2" placeholder="Name" required/>
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
                              
                              
                                <form class="btn btn-secondary mb-4 w-100 ">
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

                                <div class=" align-items-center w-100">
                                  <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                                      <input type="text" class="form-control form-control-lg "  placeholder="Price" required/>
                                      <input type="text" class="form-control form-control-lg mt-2" placeholder="Name" required/>
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
             
              <button class="btn btn-secondary w-50" type="button">
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