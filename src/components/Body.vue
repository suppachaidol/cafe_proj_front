<template>
  <div style="background-color:#f2eddd">
    <div class="title pt-5">
      <h1>
        CAFE HOPPER
        <img
          src="https://cdn-icons-png.flaticon.com/512/1992/1992706.png"
          class="img-fluid"
          alt="..."
          style="height: 4rem"
        />
      </h1>
    </div>
    <section class="py-4 text-center container">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://img.wongnai.com/p/1920x0/2021/02/17/de2c76b88b6b4d4e86542c780107e93d.jpg"
              class="img-fluid w-100"
              alt="..."
              style="height: 32rem"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://static1.squarespace.com/static/531a0cf3e4b04f773bfe0513/5aac1a77352f53c0c8a069db/5aac215a03ce64a52c2d528f/1528805272988/menu+boards.jpg?format=2500w"
              class="img-fluid w-100"
              alt="..."
              style="height: 32rem"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cms.dmpcdn.com/trueyouarticle/2020/05/01/7c1d95c0-8b11-11ea-ba62-5fddfdec27cd_1024.jpg"
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
    <div class="container">
      <h3 class="mb-2 mt-5 zindex-1">
        <strong>
          Cafe Recommend <i class="bi bi-fire" style="color: #d43614"></i>
        </strong>
      </h3>
    </div>

    <div class="album py-5">
      <div class="container">
        <div class="row g-3">
          <div
            class="col-md-3 col-sm-6 col-12"
            v-for="(cafe, index) in displayedCafesStar"
            :key="index"
          >
            <div class="card shadow-sm h-100">
              <img
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                :src="`http://localhost:5000/api/images/cafe/${cafe.c_image}`"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />

              <div class="card-body d-flex flex-column">
                <div>
                  <h5>{{ cafe.c_name }}</h5>
                  <div v-if="cafe.c_star>0">
                    <i class="bi bi-star-fill" style="color: #ff9529"></i>
                    {{ cafe.c_star.toFixed(1) }} ({{ cafe.c_review }} reviews)
                  </div>
                  <div v-else>
                    <i class="bi bi-star-fill" style="color: #ff9529"></i>
                    -  ({{ cafe.c_review }} reviews)
                  </div>
                </div>
                <p class="card-text"></p>
                <div class="mt-auto">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      @click="detailBTN(cafe.c_id)"
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class="mb-2 mt-5" style="text-align:center" v-if="cafe_star.length>8">
            <button type="button" class="btn" @click="previousPageStar">
              <img class ="rotate-img" src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/next-icon.png" alt="" style="width:3rem">
            </button>
            <span class="mx-2">Page {{ currentPageStar }} of {{ totalPagesStar }}</span>
            <button type="button" class="btn" @click="nextPageStar">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/next-icon.png" alt="" style="width:3rem">
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h3 class="mb-0 mt-5 zindex-1">
        <strong>
          New Cafe
          <img
            src="https://zeevector.com/wp-content/uploads/New-Transparent-Logo-label@zeevector.png"
            class="img-fluid mx-2"
            alt="..."
            style="height: 3rem"
          />
        </strong>
      </h3>
    </div>

    <div class="album py-5 ">
      <div class="container">
        <div class="row g-3">
          <div class="col-md-3 col-sm-6 col-12"
            v-for="(cafe, index) in displayedCafesDate"
            :key="index"
          >
            <div class="card shadow-sm h-100">
              <img
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                :src="`http://localhost:5000/api/images/cafe/${cafe.c_image}`"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />

              <div class="card-body d-flex flex-column">
                <div>
                  <h5>{{ cafe.c_name }}</h5>
                  <div v-if="cafe.c_star>0">
                    <i class="bi bi-star-fill" style="color: #ff9529"></i>
                    {{ cafe.c_star.toFixed(1) }} ({{ cafe.c_review }} reviews)
                  </div>
                  <div v-else>
                    <i class="bi bi-star-fill" style="color: #ff9529"></i>
                    -  ({{ cafe.c_review }} reviews)
                  </div>
                </div>
                <p class="card-text"></p>
                 <div class="mt-auto">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      @click="detailBTN(cafe.c_id)"
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div class="mb-2 mt-5" style="text-align:center" v-if="cafe_date.length>8">
        <button type="button" class="btn " @click="previousPageDate">
          <img class ="rotate-img" src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/next-icon.png" alt="" style="width:3rem">
        </button>
        <span class="mx-2">Page {{ currentPageDate }} of {{ totalPagesDate }}</span>
        <button type="button" class="btn " @click="nextPageDate">
           <img src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/next-icon.png" alt="" style="width:3rem ">
        </button>
      </div>

      <!-- <div class="container-xxl mt-5" v-if="isAuthen()">
        <button
          @click="addBTN"
          type="button"
          class="btn btn-sm btn-outline-secondary"
        >
          Add Cafe
        </button>
      </div> -->
    </div>

    <a
      href="#"
      class="scroll-top d-flex align-items-center justify-content-center"
      ><i class="bi bi-arrow-up-short"></i
    ></a>
  </div>
</template>

<script>
import CafeStore from "@/store/cafe";
import AuthUser from "@/store/AuthUser";
import ReviewStore from "@/store/review"

export default {
  name: "Body",
  data() {
    return {
      cafe_star: [],
      cafe_date: [],
      all_review: [],
      currentPageStar: 1,
      currentPageDate: 1,
      pageSize: 8,
    };
  },
  created() {
    this.fetchCafeStarData();
    this.fetchCafeDateData();
    //this.fetchAllReview();
  },
  methods: {
    async fetchAllReview(){
      await ReviewStore.dispatch("fetchAllReview");
      this.all_review = await ReviewStore.getters.allReview;
      
    },
    async fetchCafeStarData() {
      await CafeStore.dispatch("fetchCafe");
      this.cafe_star = await CafeStore.getters.cafe;
      //console.log(this.cafe_star)
    },
    async fetchCafeDateData() {
      await CafeStore.dispatch("fetchCafeByDate");
      this.cafe_date = await CafeStore.getters.cafe;
    },

    detailBTN(id) {
      this.$router
        .push({ path: "/detail/" + id, params: { id: id } })
        .then(() => {
          window.scrollTo(0, 0);
        });
    },
    async addBTN() {
      this.$router.push("/add").then(() => {
        window.scrollTo(0, 0);
      });
    },
    previousPageStar() {
      if (this.currentPageStar > 1) {
        this.currentPageStar--;
      }
    },
    nextPageStar() {
      if (this.currentPageStar < this.totalPagesStar) {
        this.currentPageStar++;
      }
    },
    previousPageDate() {
      if (this.currentPageDate > 1) {
        this.currentPageDate--;
      }
    },
    nextPageDate() {
      if (this.currentPageDate < this.totalPagesDate) {
        this.currentPageDate++;
      }
    },
    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
  },
  computed: {
    displayedCafesStar() {
      const start = (this.currentPageStar - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.cafe_star ? this.cafe_star.slice(start, end) : [];
    },
    totalPagesStar() {
      return this.cafe_star
        ? Math.ceil(this.cafe_star.length / this.pageSize)
        : 0;
    },
    displayedCafesDate() {
      const start = (this.currentPageDate - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.cafe_date ? this.cafe_date.slice(start, end) : [];
    },
    totalPagesDate() {
      return this.cafe_date
        ? Math.ceil(this.cafe_date.length / this.pageSize)
        : 0;
    },
  },
};
</script>

<style>
.rotate-img {
  transform: rotate(180deg);
}
.scroll-top {
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
  background: #9c7d5c;
  width: 44px;
  height: 44px;
  border-radius: 50px;
  transition: all 0.4s;
}

.scroll-top i {
  font-size: 24px;
  color: #fff;
  line-height: 0;
}

.scroll-top:hover {
  background: #ec2727;
  color: #fff;
}

.scroll-top.active {
  visibility: visible;
  opacity: 1;
}
.title {
  text-align: center;
}
</style>
