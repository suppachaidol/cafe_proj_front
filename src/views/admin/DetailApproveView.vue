<template>
  <div class="container mt-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carouselDetail"
            style="margin-top: 1em"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item active"
                v-for="(img, index) in cafe_images_place"
                :key="index"
              >
                <img
                  :src="`http://localhost:5000/api/images/cafe/${img.i_name}`"
                  class="img-fluid w-100"
                  alt="..."
                  style="height: 25rem"
                />
              </div>
              <!-- <div class="carousel-item  ">
                <div class="ratio ratio-16x9 shadow-lg">
                  <iframe class="ratio ratio-16x9"
                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                    allowfullscreen=""></iframe>
                </div>
              </div> -->
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
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
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="mt-2">
            <p v-html="iframe"></p>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg mb-3 ">
                <h2>{{ cafe ? cafe[0].c_name : "" }}</h2>             
            </div>

          </div>

          <strong>Address</strong>
          <div class="container">
            <div class="col">
              {{ cafe ? cafe[0].c_location : "" }}
            </div>
          </div>

          <strong>Service</strong>
          <div class="container">
            <div class="col">
              {{ cafe ? cafe[0].c_service : "" }}
            </div>
          </div>

        

          <strong>Hours:</strong>
          <div class="container">
            <div class="col">
              <div>Monday: {{ time ? time[0].monday : ""}}</div>
              <div>tuesday: {{ time ? time[0].tuesday : ""}}</div>
              <div>Wednesday: {{ time ? time[0].wednesday : ""}}</div>
              <div>Thursday: {{ time ? time[0].thursday : ""}}</div>
              <div>Friday: {{ time ? time[0].friday : ""}}</div>
              <div>Saturday: {{ time ? time[0].saturday : ""}}</div>
              <div>Sunday: {{ time ? time[0].sunday : ""}}</div>
            </div>
          </div>

          <strong>Detail</strong>
          <div class="container">
            <div class="col">
              {{ cafe ? cafe[0].c_detail : "" }}
            </div>
          </div>
        </div>
      </div>

    
    </div>
  </div  >
  <div class="container">
    <div class="mt-3 mb-3">
    <h2><strong> Popular Dishes</strong></h2>
    </div>
  </div>
  <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div
          class="col mb-4"
          v-for="(img, index) in cafe_images_dish"
          :key="index"
        >
          <div class="card shadow">
            <div class="card-body">
              <img
                alt="image"
                width="100%"
                height="225"
                class="bd-placeholder-img card-img-top"
                :src="`http://localhost:5000/api/images/cafe/${img.i_name}`"
              />
              <hr>
              <div class="row mt-2">
                <div class="col">
                  <h5 style="direction: ltl">{{ img.i_menu_name }}</h5>
                  <h4 style="direction: ltl">฿ {{ img.i_price }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  <div class="d-flex row align-items-center mb-5 mt-5">
      <div class="col " align = 'right'>
          <button type="button" class="btn btn-success" @click="approve">Approve</button>
      </div>
      <div class="col ">
        <button type="button" class="btn btn-danger" @click="reject">Reject</button>
      </div>
  </div>
</template>
<script>
import CafeStore from "@/store/cafe";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      cafe: null,
      c_id: 0,
      iframe: null,
      cafe_images: [],
      cafe_images_place: [],
      cafe_images_dish: [],
      time:null,
    };
  },
  created() {
    this.c_id = this.$route.query.id
    this.fetchCafeData()
    this.fetchCafeImage()
    this.fetchCafeTime();
  },
  methods: {
    async fetchCafeData() {
      await CafeStore.dispatch("fetchCafeById", this.c_id);
      this.cafe = await CafeStore.getters.cafe;
      this.iframe = this.cafe[0].c_map  
      console.log(this.cafe) 
    },
    async fetchCafeTime(){
      let id = this.c_id
      await CafeStore.dispatch("fetchCafeTime", id);
      this.time = await CafeStore.getters.times;
    },
    async fetchCafeImage() {
      await CafeStore.dispatch("fetchCafeImageById", this.c_id);
      this.cafe_images = await CafeStore.getters.images;
      console.log(this.cafe_images)
      this.filterImg(this.cafe_images);
    },
    filterImg(images) {
      for (let i = 0; i < images.length; i++) {
        if (images[i].i_popular === null) {
          this.cafe_images_place.push(images[i]);
        } else {
          this.cafe_images_dish.push(images[i]);
        }
      }
    },
    async approve() {
        Swal.fire({
        icon: "question",
        text: "Are you sure to approve cafe?",
        showCancelButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, approve cafe!",
      }).then(async (result) => {
        if (result.isConfirmed) {
            let payload = {
            c_id: this.c_id,
            };
            let res = await CafeStore.dispatch("updateStatus", payload);
            console.log(res);
            await Swal.fire({title:"Approved!",text:"cafe has been approved.",icon:"success",showConfirmButton: false,timer: 1000,});
            this.$router.push("/approve");
        }
      });
    },
    async reject() {
        Swal.fire({
        icon: "warning",
        title: "Are you sure to reject?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, reject cafe!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          let res = await CafeStore.dispatch("rejectCafe", this.c_id);
          console.log(res);
          await Swal.fire({title:"Rejected!",text:"cafe has been deleted.",icon:"success",showConfirmButton: false,timer: 1000,});
          this.$router.push("/approve");
        }
      });
    },
  },
  computed:{

  }
}
</script>
<style scoped>
.myDIV {
  width: 100%;
  padding: 50px 0;
  text-align: center;
  background-color: lightblue;
  margin-top: 20px;
}
.moreCafe {
  text-align: center;
}
.line {
  text-align: center;
  color: rgb(121, 121, 121);
  font-size: 10px;
}
.col-5-1 {
  background-color: #bab0b0;
  width: 100%;
}
.star-rating {
  display: inline-block;
}
.star {
  font-size: 1.2rem;
  color: #ccc;
  cursor: pointer;
}
.filled {
  color: #ff9529;
}
.star-comment {
  color: #ff9529;
}

</style>
