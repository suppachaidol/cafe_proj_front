<template>
  <div style="background-color: #eee">
    <section class="pt-5">
      <div class="container">
        <div class="row ">
          <div class="col-12 col-md-7 mt-4 mt-md-0">
            <section class="py-5 text-center container">
              <div v-if="!state.s1">
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="https://alxgroup.com.au/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
                        class="img-fluid w-100"
                        alt="..."
                        style="height: 32rem"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
                v-else
              >
                <div class="carousel-inner">
                  <div
                    class="carousel-item active"
                    v-for="(img, index) in state.urlImage"
                    :key="index"
                  >
                    <img
                      :src="`${img}`"
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
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </section>
            <form class="btn btn-secondary mb-2">
              <div class="d-flex flex-row align-items-center">
                <div class="uploadImg file">
                  <label class="file-label">
                    <input
                      name="photo"
                      class="file-input"
                      type="file"
                      multiple
                      @change="onFileSelected"
                      style="display:none;"
                    />
                    Click to upload images
                    <i class="ms-2 bi bi-cloud-upload"></i>
                  </label>
                </div>
              </div>
            </form>
          </div>

          <div class="col-12 col-md-4 offset-md-1">
            <div class="w-100">
              <h5>Cafe Name</h5>
              <div
                class="form-outline mb-4 justify-content-center align-items-center h-100"
                placeholder="Name of Cafe"
                aria-label="Name of Cafe"
              >
                <input
                  type="text"
                  placeholder="Name of Cafe"
                  aria-label="Name of Cafe"
                  class="form-control form-control-lg"
                  required
                  v-model="state.c_name"
                />
              </div>
            </div>

            <div class="w-100">
              <h5>Location in Google Map (Latitude,Longtitude)</h5>
              <div
                class="form-outline mb-4 justify-content-center align-items-center h-100"
                placeholder="Name of Cafe"
                aria-label="Name of Cafe"
              >
                <input
                  type="text"
                  placeholder=""
                  class="form-control form-control-lg"
                  required
                  v-model="state.c_latlon"
                />
              </div>
            </div>

            <div class="w-100">
              <h5>Link to show map</h5>
              <div
                class="form-outline mb-4 justify-content-center align-items-center h-100"
                placeholder="Name of Cafe"
                aria-label="Name of Cafe"
              >
                <input
                  type="text"
                  placeholder=""
                  class="form-control form-control-lg"
                  required
                  v-model="state.c_map"
                />
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

            <div class="w-100 pb-2">
              <h5>Address</h5>
              <div
                class="form-outline mb-4 justify-content-center align-items-center h-100"
              >
                <textarea
                  class="form-control"
                  id="textAreaExample"
                  rows="4"
                  v-model="state.c_location"
                ></textarea>
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
                            <input v-model="state.mondayAM" type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          AM
                          <div class="col">    
                            <input v-model="state.mondayPM" type="text" placeholder="" class="form-control form-control-sm" required/> 
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
                            <input v-model="state.tuesdayAM" type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          AM
                          <div class="col">    
                            <input v-model="state.tuesdayPM" type="text" placeholder="" class="form-control form-control-sm" required/> 
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
                            <input v-model="state.wednesdayAM" type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          AM
                          <div class="col">    
                            <input v-model="state.wednesdayPM" type="text" placeholder="" class="form-control form-control-sm" required/> 
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
                            <input v-model="state.thursdayAM" type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          AM
                          <div class="col">    
                            <input v-model="state.thursdayPM" type="text" placeholder="" class="form-control form-control-sm" required/> 
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
                            <input v-model="state.fridayAM" type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          AM
                          <div class="col">    
                            <input v-model="state.fridayPM" type="text" placeholder="" class="form-control form-control-sm" required/> 
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
                            <input v-model="state.saturdayAM" type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          AM
                          <div class="col">    
                            <input v-model="state.saturdayPM" type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          PM
                      </div>
                    </div>
                  </div>
                  <div class ="row pb-2">
                    <div class="col-3">
                     Sunday
                    </div>
                    <div class="col">
                      <div class ="row">
                          <div class="col">    
                            <input v-model="state.sundayAM" type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          AM
                          <div class="col">    
                            <input v-model="state.sundayPM" type="text" placeholder="" class="form-control form-control-sm" required/> 
                          </div>
                          PM
                      </div>
                    </div>
                  </div>
                    If your cafe is closed fill " - " in time
                </div>
            

            <div class="w-100 pb-2">
              <h5>Detail</h5>
              <div
                class="form-outline mb-4 justify-content-center align-items-center h-100"
              >
                <textarea
                  class="form-control"
                  id="textAreaExample"
                  rows="4"
                  v-model="state.c_detail"
                ></textarea>
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

            <div class="container-fluid">
              <h5>Service</h5>

              <div class="row">
                <div
                  class="col-6"
                  v-for="item in state.items"
                  :key="item.value"
                >
                  <input
                    type="checkbox"
                    :value="item.value"
                    v-model="state.selectedValues"
                  />
                  {{ item.text }}
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <h3 class="mt-150px mb-5">Popular dishes</h3>
    </div>

    <section class="pb-2">
      <div class="container pb-5">
        <div class="row text-center justify-content-sm-center no-gutters">
          <div class="col-md-3 col-sm-6 col-12 h-50">
            <div class="card shadow">
              <div class="card-body p-md-3">
                <div v-if="!state.urlImageDish1">
                  <img
                  class="img-fluid"
                    alt="img"
                    src="https://alxgroup.com.au/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
                    style="width: 250px; height: 250px;"
                  />
                </div>
                <div v-else>
                  <img
                  class="img-fluid"
                    alt="img"
                    :src="state.urlImageDish1"
                    style="width: 250px; height: 250px;"
                  />
                </div>

                <form class="btn btn-secondary mb-4 w-100 mt-3">
                  <div class="d-flex flex-row align-items-center">
                    <div class="uploadImg file">
                      <label class="file-label">
                        <input
                          name="photo1"
                          class="file-input"
                          type="file"
                          @change="onFileSelectedDish($event, 1)"
                          style="display:none;"
                        />
                        Click to upload image
                        <i class="ms-2 bi bi-cloud-upload"></i>
                      </label>
                    </div>
                  </div>
                </form>

                <div class="align-items-center w-100">
                  <div
                    class="form-outline mb-4 justify-content-center align-items-center h-100"
                  >
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Price"
                      required
                      v-model="state.i_price1"
                    />
                    <input
                      type="text"
                      class="form-control form-control-lg mt-2"
                      placeholder="Name"
                      required                     
                      v-model="state.i_menu_name1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-12 h-50">
            <div class="card shadow">
              <div class="card-body p-md-3">
                <div v-if="!state.urlImageDish2">
                  <img
                  class="img-fluid"           
                    alt="img"
                    src="https://alxgroup.com.au/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
                    style="width: 250px; height: 250px;"
                  />
                </div>
                <div v-else>
                  <img
                  class="img-fluid"             
                    alt="img"
                    :src="state.urlImageDish2"
                    style="width: 250px; height: 250px;"
                  />
                </div>

                <form class="btn btn-secondary mb-4 w-100 mt-3">
                  <div class="d-flex flex-row align-items-center">
                    <div class="uploadImg file">
                      <label class="file-label">
                        <input
                          name="photo1"
                          class="file-input"
                          type="file"
                          @change="onFileSelectedDish($event, 2)"
                          style="display:none;"
                        />
                        Click to upload image
                        <i class="ms-2 bi bi-cloud-upload"></i>
                      </label>
                    </div>
                  </div>
                </form>

                <div class="align-items-center w-100">
                  <div
                    class="form-outline mb-4 justify-content-center align-items-center h-100"
                  >
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Price"
                      required
                      v-model="state.i_price2"
                    />
                    <input
                      type="text"
                      class="form-control form-control-lg mt-2"
                      placeholder="Name"
                      required
                      v-model="state.i_menu_name2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-12 h-50">
            <div class="card shadow">
              <div class="card-body p-md-3">
                <div v-if="!state.urlImageDish3">
                  <img
                  class="img-fluid"
                    alt="img"
                    src="https://alxgroup.com.au/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
                    style="width: 250px; height: 250px;"
                  />
                </div>
                <div v-else>
                  <img
                  class="img-fluid"
                    alt="img"
                    :src="state.urlImageDish3"
                    style="width: 250px; height: 250px;"
                  />
                </div>

                <form class="btn btn-secondary mb-4 w-100 mt-3">
                  <div class="d-flex flex-row align-items-center">
                    <div class="uploadImg file">
                      <label class="file-label">
                        <input
                          name="photo1"
                          class="file-input"
                          type="file"
                          @change="onFileSelectedDish($event, 3)"
                          style="display:none;"
                        />
                        Click to upload image
                        <i class="ms-2 bi bi-cloud-upload"></i>
                      </label>
                    </div>
                  </div>
                </form>

                <div class="align-items-center w-100">
                  <div
                    class="form-outline mb-4 justify-content-center align-items-center h-100"
                  >
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Price"
                      required
                      v-model="state.i_price3"
                    />
                    <input
                      type="text"
                      class="form-control form-control-lg mt-2"
                      placeholder="Name"
                      required
                      v-model="state.i_menu_name3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-12 h-50">
            <div class="card shadow">
              <div class="card-body p-md-3">
                <div v-if="!state.urlImageDish4">
                  <img
                  class="img-fluid"
                    alt="img"
                    src="https://alxgroup.com.au/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
                    style="width: 250px; height: 250px;"
                  />
                </div>
                <div v-else>
                  <img
                  class="img-fluid"
                    alt="img"
                    :src="state.urlImageDish4"
                    style="width: 250px; height: 250px;"
                  />
                </div>

                <form class="btn btn-secondary mb-4 w-100 mt-3">
                  <div class="d-flex flex-row align-items-center">
                    <div class="uploadImg file">
                      <label class="file-label">
                        <input
                          name="photo1"
                          class="file-input"
                          type="file"
                          @change="onFileSelectedDish($event, 4)"
                          style="display:none;"
                        />
                        Click to upload image
                        <i class="ms-2 bi bi-cloud-upload"></i>
                      </label>
                    </div>
                  </div>
                </form>

                <div class="align-items-center w-100">
                  <div
                    class="form-outline mb-4 justify-content-center align-items-center h-100"
                  >
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Price"
                      required
                      v-model="state.i_price4"
                    />
                    <input
                      type="text"
                      class="form-control form-control-lg mt-2"
                      placeholder="Name"
                      required
                      v-model="state.i_menu_name4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="pb-5 ov-hidden align-items-bottom d-flex cover ov-hidden container-fluid"
    >
      <div class="container-fluid">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-12 col-md-8 p-0 p-md-3">
            <button
              class="btn btn-secondary w-50"
              type="button"
              @click="addCafe"
            >
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
import { required } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import CafeStore from "@/store/cafe";
import Axios from "axios";
Axios.defaults.headers.common = { 'Authorization': `bearer ${AuthUser.getters.jwt}` };
export default {
  name: "AddCafe",
  setup() {
    const state = reactive({
      c_name: "",
      c_location: "",
      c_detail: "",
      c_service: "",
      c_status: "",
      c_latlon: "",
      c_map: "",

      mondayAM:"",
      tuesdayAM:"",
      wednesdayAM:"",
      thursdayAM:"",
      fridayAM:"",
      saturdayAM:"",
      sundayAM:"",

      mondayPM:"",
      tuesdayPM:"",
      wednesdayPM:"",
      thursdayPM:"",
      fridayPM:"",
      saturdayPM:"",
      sundayPM:"",

      items: [
        { value: "Dine-in", text: "Dine-in" },
        { value: "Takeaway", text: "Takeaway" },
        { value: "Co-Working Space", text: "Co-Working Space" },
        { value: "Meeting", text: "Meeting" },
        { value: "Toilets", text: "Toilets" },
        { value: "Creative Space", text: "Creative Space" },
        { value: "Screening Room", text: "Screening Room" },
        { value: "Karaoke", text: "Karaoke" },
        { value: "Good for Group", text: "Good for Group" },
        { value: "Pet Friendly", text: "Pet Friendly" },
        { value: "Kids Friendly", text: "Kids Friendly" },
        { value: "Art Gallery", text: "Art Gallery" },
      ],
      selectedValues: [],

      i_menu_name1: "",
      i_price1: "",
      i_menu_name2: "",
      i_price2: "",
      i_menu_name3: "",
      i_price3: "",
      i_menu_name4: "",
      i_price4: "",

      selectedFile: [],
      urlImage: [],
      selectedFileDish1: null,
      urlImgDish1: null,
      selectedFileDish2: null,
      urlImgDish2: null,
      selectedFileDish3: null,
      urlImgDish3: null,
      selectedFileDish4: null,
      urlImgDish4: null,
      s1: false,
    });
    const rules = computed(() => {
      return {
        c_name: { required },
        c_location: { required },
        c_detail: { required },
        selectedFile: { required },
        c_latlon: { required },
        c_map: { required },
        i_menu_name1: { required },
        i_price1: { required },
        i_menu_name2: { required },
        i_price2: { required },
        i_menu_name3: { required },
        i_price3: { required },
        i_menu_name4: { required },
        i_price4: { required },
        selectedFileDish1: { required },
        selectedFileDish2: { required },
        selectedFileDish3: { required },
        selectedFileDish4: { required },
        mondayAM:{ required },
        tuesdayAM:{ required },
        wednesdayAM:{ required },
        thursdayAM:{ required },
        fridayAM:{ required },
        saturdayAM:{ required },
        sundayAM:{ required },
        mondayPM:{ required },
        tuesdayPM:{ required },
        wednesdayPM:{ required },
        thursdayPM:{ required },
        fridayPM:{ required },
        saturdayPM:{ required },
        sundayPM:{ required },
      };
    });
    const v$ = useValidate(rules, state);

    return {
      state,
      v$,
    };
  },

  methods: {
    onFileSelectedDish(event, num) {
      if (num == 1) {
        this.state.selectedFileDish1 = event.target.files[0];
        this.state.urlImageDish1 = URL.createObjectURL(
          this.state.selectedFileDish1
        );
        event.target.value = null;
      } else if (num == 2) {
        this.state.selectedFileDish2 = event.target.files[0];
        this.state.urlImageDish2 = URL.createObjectURL(
          this.state.selectedFileDish2
        );
        event.target.value = null;
      } else if (num == 3) {
        this.state.selectedFileDish3 = event.target.files[0];
        this.state.urlImageDish3 = URL.createObjectURL(
          this.state.selectedFileDish3
        );
        event.target.value = null;
      } else {
        this.state.selectedFileDish4 = event.target.files[0];
        this.state.urlImageDish4 = URL.createObjectURL(
          this.state.selectedFileDish4
        );
        event.target.value = null;
      }
    },

    onFileSelected(event) {
      this.state.selectedFile = event.target.files;
      // console.log(event.target.files);
      for (let i = 0; i < this.state.selectedFile.length; i++) {
        this.state.urlImage.push(this.addImgUrl(this.state.selectedFile[i]));
      }
      this.state.s1 = true;
    },
    addImgUrl(img) {
      return URL.createObjectURL(img);
    },
    async checkRole(){
      if(AuthUser.getters.user.u_role === "admin"){
        this.state.c_status = "pass"
      }else{
        this.state.c_status = "notpass"
      }
    },
    async addCafe() {
      this.v$.$validate();
      if (this.v$.$error) {
        Swal.fire({
          icon: "error",
          text: "Please fill in all information.",
          confirmButtonColor: "#dd6b55",
        });
      } else {
        await this.checkRole()
        this.state.c_service = this.state.selectedValues.join(",")
        let res = await CafeStore.dispatch("addCafe", this.state);
        //this.$router.push("/");
        if(res.success){
        //upload time open-closed
        let res_time = await this.uploadTime(res.c_id)
        
        //upload image cafe profile
        const fdprofile = new FormData();
        fdprofile.append("c_image", this.state.selectedFile[0]);
        fdprofile.append("c_id",res.c_id)
        const api_endpoint = "http://localhost:5000"
        let res_profile = await Axios.put(api_endpoint+"/api/cafe/upload_profile", fdprofile)
        // console.log(res_profile)

        //upload image cafe
        const fdmul = new FormData();
        fdmul.append("c_id", res.c_id);
        for (let i = 0; i < this.state.selectedFile.length; i++) {
          fdmul.append("i_name", this.state.selectedFile[i]);
        }
        let res_mul = await Axios.post(api_endpoint + "/api/cafe/uploadmul-img",fdmul);
        // console.log(res_mul);

        //upload image dish1-4
        await this.uploadDish(res.c_id)

        Swal.fire({
            icon: "success",
            title: "Add cafe successful",
            showConfirmButton: false,
            timer: 1500,
          });
        this.$router.push("/");
        }else{
          Swal.fire({
            icon: "error",
            text: res.message,
            confirmButtonColor: "#dd6b55",
          });
        }
      }
    },
    async uploadTime(c_id){
      let payload = {
        c_id: c_id,
        monday: this.state.mondayAM + " AM to " + this.state.mondayPM + " PM",
        tuesday: this.state.tuesdayAM + " AM to " + this.state.tuesdayPM + " PM",
        wednesday: this.state.wednesdayAM + " AM to " + this.state.wednesdayPM + " PM",
        thursday: this.state.thursdayAM + " AM to " + this.state.thursdayPM + " PM",
        friday: this.state.fridayAM + " AM to " + this.state.fridayPM + " PM",
        saturday: this.state.saturdayAM + " AM to " + this.state.saturdayPM + " PM",
        sunday: this.state.sundayAM + " AM to " + this.state.sundayPM + " PM",
      }
      let res = await CafeStore.dispatch("addTime", payload);
      console.log(res)
    },
    async uploadDish(c_id){
      const api_endpoint = "http://localhost:5000"
      const fddish1 = new FormData();
        fddish1.append("c_id",c_id)
        fddish1.append("i_name", this.state.selectedFileDish1);
        fddish1.append("i_menu_name",this.state.i_menu_name1)
        fddish1.append("i_price",this.state.i_price1)
        fddish1.append("i_popular","yes")
  
        const fddish2 = new FormData();
        fddish2.append("c_id",c_id)
        fddish2.append("i_name", this.state.selectedFileDish2);
        fddish2.append("i_menu_name",this.state.i_menu_name2)
        fddish2.append("i_price",this.state.i_price2)
        fddish2.append("i_popular","yes")
  
        const fddish3 = new FormData();
        fddish3.append("c_id",c_id)
        fddish3.append("i_name", this.state.selectedFileDish3);
        fddish3.append("i_menu_name",this.state.i_menu_name3)
        fddish3.append("i_price",this.state.i_price3)
        fddish3.append("i_popular","yes")
  
        const fddish4 = new FormData();
        fddish4.append("c_id",c_id)
        fddish4.append("i_name", this.state.selectedFileDish4);
        fddish4.append("i_menu_name",this.state.i_menu_name4)
        fddish4.append("i_price",this.state.i_price4)
        fddish4.append("i_popular","yes")
  
        let res_dish1 = await Axios.post(api_endpoint+"/api/cafe/upload-img", fddish1)
        let res_dish2 = await Axios.post(api_endpoint+"/api/cafe/upload-img", fddish2)
        let res_dish3 = await Axios.post(api_endpoint+"/api/cafe/upload-img", fddish3)
        let res_dish4 = await Axios.post(api_endpoint+"/api/cafe/upload-img", fddish4)
        // console.log(res_dish1)
        // console.log(res_dish2)
        // console.log(res_dish3)
        // console.log(res_dish4)
    }
  },
};
</script>
<style></style>
