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
            <!-- <p v-if="cafe[0] ? cafe[0] : null"> -->
              <p v-html="iframe"></p>
              <!-- <iframe
                :src="iframe"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> -->
              <!-- <GoogleMap :destLat="cafe[0].c_lat" :destLng="cafe[0].c_lon"/> -->
            <!-- </p> -->
          </div>
        </div>

        <div class="col-lg-6">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 col-lg-5 mb-3 mb-md-0">
                <h2>
                  {{ cafe[0] ? cafe[0].c_name : "" }}
                </h2>
                <div v-if="cafe[0] ? cafe[0] : null">
                  <span
                    class="star-comment"
                    v-if="cafe[0].c_star >= 0 && cafe[0].c_star < 0.5"
                  >
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                  </span>
                  <span
                    class="star-comment"
                    v-if="cafe[0].c_star >= 0.5 && cafe[0].c_star < 1"
                  >
                    <i class="bi bi-star-half"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                  </span>                   
                  <span
                    class="star-comment"
                    v-if="cafe[0].c_star >= 1 && cafe[0].c_star < 1.5"
                  >
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                  </span>
                  <span
                    class="star-comment"
                    v-if="cafe[0].c_star >= 1.5 && cafe[0].c_star < 2"
                  >
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                  </span>
                  <span
                    class="star-comment"
                    v-if="cafe[0].c_star >= 2 && cafe[0].c_star < 2.5"
                  >
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                  </span>
                  <span
                    class="star-comment"
                    v-if="cafe[0].c_star >= 2.5 && cafe[0].c_star < 3"
                  >
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                  </span>
                  <span
                    class="star-comment"
                    v-if="cafe[0].c_star >= 3 && cafe[0].c_star < 3.5"
                  >
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                  </span>
                  <span
                    class="star-comment"
                    v-if="cafe[0].c_star >= 3.5 && cafe[0].c_star < 4"
                  >
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                    <i class="bi bi-star"></i>
                  </span>
                  <span
                    class="star-comment"
                    v-if="cafe[0].c_star >= 4 && cafe[0].c_star < 4.5"
                  >
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                  </span>
                  <span
                    class="star-comment"
                    v-if="cafe[0].c_star >= 4.5 && cafe[0].c_star < 5"
                  >
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </span>
                  <span class="star-comment" v-if="cafe[0].c_star >= 5">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </span>
                  {{ cafe[0] ? cafe[0].c_star.toFixed(1) : "" }}
                  ({{ numAllReview }} reviews)
                </div>
              </div>

              <div class="col-6 mt-2 word-spacing: 5px;">
                <h5>
                  <div class="star-rating" v-if="isAuthen()">
                    <span class="star" @click="toggleFavorite">
                      <i :class="favoriteClass"></i> </span
                    ><strong> Favorite</strong>
                  </div>
                </h5>
              </div>
            </div>

            <strong>Address</strong>
            <div class="container">
              <div class="col">
                {{ cafe[0] ? cafe[0].c_location : "" }}
              </div>
            </div>

            <strong>Service</strong>
            <div class="container">
              <div class="col">
                {{ cafe[0] ? cafe[0].c_service : "" }}
              </div>
            </div>

            <!-- <button  @change="myFunction">Try it</button>

<div id="myDIV">
This is my DIV element.
</div> -->

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
                {{ cafe[0] ? cafe[0].c_detail : "" }}
              </div>
            </div>
          </div>
        </div>
      </div>

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
    <div class="container-fluid">
      <div class="row">
        <div class="col-8">
          <div class="container-fluid">
            <div class="row">
              <div class="col-6 w-500px mt-5 mb-3">
                <h4>Overall ratings and reviews</h4>
                <div>
                  Reviews can only be made by who have eaten at this cafe
                </div>
              </div>

              <div class="col-6 mt-5 mb-3">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-4 star-comment">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <div class="col-3">({{ review_5star }} reviews)</div>
                  </div>
                </div>

                <div class="container-fluid">
                  <div class="row">
                    <div class="col-4 star-comment">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <div class="col-3">({{ review_4star }} reviews)</div>
                  </div>
                </div>

                <div class="container-fluid">
                  <div class="row">
                    <div class="col-4 star-comment">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <div class="col-3">({{ review_3star }} reviews)</div>
                  </div>
                </div>

                <div class="container-fluid">
                  <div class="row">
                    <div class="col-4 star-comment">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <div class="col-3">({{ review_2star }} reviews)</div>
                  </div>
                </div>

                <div class="container-fluid">
                  <div class="row">
                    <div class="col-4 star-comment">
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <div class="col-3">({{ review_1star }} reviews)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid">
            <div class="row">
              <div class="col-5-1 mb-2">
                <div class="pt-2">
                  <h5 v-if="!isAuthen()">Reviews from other</h5>
                  <h5 v-if="isAuthen()">
                    Your first-hand experiences really help other. Thanks!
                  </h5>

                  <i class="mx-2" v-if="isAuthen()"
                    >Your overall rating of this Cafe :
                  </i>

                  <div class="star-rating" v-if="isAuthen()">
                    <span
                      v-for="n in maxRating"
                      :key="n"
                      class="star"
                      :class="{ filled: n <= currentRating }"
                      @click="rate(n)"
                    >
                      <i class="bi bi-star-fill"></i
                    ></span>
                    {{ currentRating }}
                  </div>
                </div>
                <div class="container-fluid mt-2" v-if="isAuthen()">
                  <div class="row">
                    <div class="col-2 mt-1">
                      <h5>comment</h5>
                    </div>

                    <div class="col mb-3">
                      <input
                        type="text"
                        class="form-control w-100"
                        placeholder="What do you think ?"
                        required
                        v-model="r_comment"
                      />
                    </div>

                    <div class="col-2">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        @click="createReview"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
                <p class="line pb-3">
                  _______________________________________________________________________________________________________
                </p>
                <div>
                  <div
                    class="container-fluid"
                    v-for="(review, index) in displayedReviews"
                    :key="index"
                  >
                    <div class="row">
                      <div class="col-2">
                        <div style="text-align: center">
                          <img
                            class="img-fluid w-75"
                            :src="`http://localhost:5000/api/images/profile/${review.u_image}`"
                            alt=""
                            style="
                              width: 50px;
                              height: 50px;
                              border-radius: 50%;
                            "
                          />
                        </div>
                        <p style="text-align: center">{{ review.u_name }}</p>
                      </div>

                      <div class="col-5">
                        <div class="mb-2">
                          <span
                            class="star-comment"
                            v-for="n in review.r_star"
                            :key="n"
                          >
                            <i class="bi bi-star-fill"></i
                          ></span>
                          {{ formattedDatetime(review.r_date) }}
                        </div>
                        <p>{{ review.r_comment }}</p>
                      </div>
                    </div>
                    <div class="line pb-3">
                      _______________________________________________________________________________________________________
                    </div>
                  </div>
                  <div class="mb-2 mt-3" v-if="numAllReview>6" style="text-align:center">
                    <button type="button" class="btn btn-dark" @click="previousPage"><i class="bi bi-caret-left-fill"></i></button>
                    <span class="mx-2">Page {{ currentPage }} of {{ totalPages }}</span>
                    <button type="button" class="btn btn-dark" @click="nextPage"><i class="bi bi-caret-right-fill"></i></button>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="col">
          <section class="pt-5 pb-5">
            <h2 class="pb-2" style="text-align: center">Near by</h2>
            <div class="container w-75">
              <div class="col mb-3">
                <div class="card shadow-sm">
                  <div class="moreCafe card-body">
                    <img
                      class="img-fluid pb-2"
                      src="https://image.bestreview.asia/wp-content/uploads/2022/05/best-cafe-amazon-menu.jpg"
                      alt=""
                    />
                    <h4 class="card-title">ERD Cafe</h4>
                    <p class="card-text">Cafe in forest.</p>
                    <a href="#" class="btn btn-primary" style="direction: rtl"
                      >View</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="container w-75">
              <div class="col mb-3">
                <div class="card shadow-sm">
                  <div class="moreCafe card-body">
                    <img
                      class="img-fluid pb-2"
                      src="https://image.bestreview.asia/wp-content/uploads/2022/05/best-cafe-amazon-menu.jpg"
                      alt=""
                    />
                    <h4 class="card-title">ERD Cafe</h4>
                    <p class="card-text">Cafe in forest.</p>
                    <a href="#" class="btn btn-primary" style="direction: rtl"
                      >View</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="container w-75">
              <div class="col mb-3">
                <div class="card shadow-sm">
                  <div class="moreCafe card-body">
                    <img
                      class="img-fluid pb-2"
                      src="https://image.bestreview.asia/wp-content/uploads/2022/05/best-cafe-amazon-menu.jpg"
                      alt=""
                    />
                    <h4 class="card-title">ERD Cafe</h4>
                    <p class="card-text">Cafe in forest.</p>
                    <a href="#" class="btn btn-primary" style="direction: rtl"
                      >View</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CafeStore from "@/store/cafe";
import ReviewStore from "@/store/review";
import UserCafeStore from "@/store/user_cafe";
import AuthUser from "@/store/AuthUser";
import Swal from "sweetalert2";
import GoogleMap from '../components/GoogleMap.vue';

export default {
  //components: { GoogleMap },
  data() {
    return {
      cafe: [],
      c_id: null,
      u_id: AuthUser.getters.user.u_id,
      cafe_images: null,
      cafe_images_place: [],
      cafe_images_dish: [],
      cafe_star: 0,
      reviews: null,
      r_comment: null,
      maxRating: 5,
      currentRating: 0,
      numAllReview: 0,
      review_1star: 0,
      review_2star: 0,
      review_3star: 0,
      review_4star: 0,
      review_5star: 0,
      currentPage: 1,
      pageSize: 6,
      iframe: null,
      isFavorite: null,
      time:null,
    };
  },
  created() {
    this.c_id = this.$route.params.id;
    this.fetchCafeData();
    this.fetchCafeImage();
    this.fetchReview();
    this.fetchCafeTime();
    if(this.isAuthen()){
      this.fetchFavorite();
    }
  },
  methods: {
    // async findMtstate(){
    //   const success = (position)=>{
    //     console.log(position)
    //     const latitude = position.coords.latitude
    //     const longtitude = position.coords.longtitude
        
    //   }
    //   const error = () =>{
    //     this.location = 'Unable to retrieve your location'
    //   }
    //   navigator.geolocation.getCurrentPosition(success,error)
    // },
    async fetchCafeData() {
      await CafeStore.dispatch("fetchCafeById", this.c_id);
      this.cafe = await CafeStore.getters.cafe;
      this.cafe_star = this.cafe[0].c_star.toFixed(1);
      this.iframe = this.cafe[0].c_map   
      //await this.splitIframe(this.cafe[0].c_map);
    },
    async fetchCafeImage() {
      await CafeStore.dispatch("fetchCafeImageById", this.c_id);
      this.cafe_images = await CafeStore.getters.images;
      this.filterImg(this.cafe_images);
    },
    async fetchReview() {
      await ReviewStore.dispatch("fetchReviewByCafeId", this.c_id);
      this.reviews = await ReviewStore.getters.review;
      this.numAllReview = this.reviews.length;
      this.countStar();
    },
    async fetchFavorite(){
      let payload = {
          u_id: this.u_id,
          c_id: this.c_id,
        };
      await UserCafeStore.dispatch("fetchUserCafe", payload);
      if(UserCafeStore.getters.user_cafe.length==1){
        this.isFavorite = true
      }else{
        this.isFavorite = false
      }
    },
    async fetchCafeTime(){
      let id = this.c_id
      await CafeStore.dispatch("fetchCafeTime", id);
      this.time = await CafeStore.getters.times;
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
    countStar() {
      for (let i = 0; i < this.reviews.length; i++) {
        if (this.reviews[i].r_star == 1) {
          this.review_1star++;
        } else if (this.reviews[i].r_star == 2) {
          this.review_2star++;
        } else if (this.reviews[i].r_star == 3) {
          this.review_3star++;
        } else if (this.reviews[i].r_star == 4) {
          this.review_4star++;
        } else if (this.reviews[i].r_star == 5) {
          this.review_5star++;
        }
      }
    },
    rate(rating) {
      this.currentRating = rating;
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    async createReview() {
      if (this.currentRating == 0) {
        Swal.fire({
          icon: "error",
          text: "Please rate this cafe",
          confirmButtonColor: "#dd6b55",
        });
      } else {
        let playload = {
          u_id: this.u_id,
          c_id: this.c_id,
          r_comment: this.r_comment,
          r_star: this.currentRating,
        };
        let res = await ReviewStore.dispatch("addReview", playload);
        this.updateStar();
        this.$router.go(0);
      }
    },
    async updateStar() {
      let playload = {
        oldStar: this.cafe_star,
        newStar: this.currentRating,
        numReview: this.numAllReview,
        c_id: this.c_id,
      };
      let res = await CafeStore.dispatch("updateStar", playload);
    },
    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
    // splitIframe(data) {
    //   let arr = data.split(" ");
    //   this.iframe = arr[1].slice(5, -1);
    //   console.log(this.iframe)
    // },
    async toggleFavorite() {
      let payload = {
          u_id: this.u_id,
          c_id: this.c_id,
        };
        //console.log(UserCafeStore.getters.user_cafe)
      if(UserCafeStore.getters.user_cafe.length==0){
        let res = await UserCafeStore.dispatch("addUserCafe", payload);
        //console.log(res)
        this.isFavorite = !this.isFavorite;
        this.fetchFavorite()       
      }else if(UserCafeStore.getters.user_cafe.length==1){
        let id = UserCafeStore.getters.user_cafe[0].uc_id
        let res = await UserCafeStore.dispatch("removeUserCafe", id);
        //console.log(res)
        this.isFavorite = !this.isFavorite;
        this.fetchFavorite()
      }

    },
  },
  computed: {
    formattedDatetime() {
      return function (datetimeString) {
        const date = new Date(datetimeString);
        const options = { timeZone: "Asia/Bangkok" };
        const formatted = date.toLocaleString("en-US", options);
        return formatted;
      };
    },
    displayedReviews() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.reviews ? this.reviews.slice(start, end) : [];
    },
    totalPages() {
      return this.reviews ? Math.ceil(this.reviews.length / this.pageSize) : 0;
    },
    favoriteClass() {
      return this.isFavorite ? 'bi bi-star-fill text-warning ml-1' : 'bi bi-star ml-1';
    },
  },
};
//  function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
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
.fakeimg {
  height: 300px;
  background: #5f4545;
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
