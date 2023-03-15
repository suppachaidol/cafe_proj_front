<template>
  <div>
    <div class="title mt-5">
      <h1>
        CAFE HOPPER
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqBFAvlcnBTyqZdg8ClpCTnU3G_fTAOlm5aA&usqp=CAU"
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

              <div class="card-body">
                <div>
                  <h5>{{ cafe.c_name }}</h5>
                  <div>
                    <i class="bi bi-star-fill" style="color: #ff9529"></i>
                    {{ cafe.c_star.toFixed(1) }} ({{ cafe.c_review }} reviews)
                  </div>
                </div>
                <p class="card-text"></p>
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
          <div class="mb-2 mt-5" style="text-align:center" v-if="cafe_star.length>8">
            <button type="button" class="btn btn-dark" @click="previousPageStar">
              <i class="bi bi-caret-left-fill"></i>
            </button>
            <span class="mx-2">Page {{ currentPageStar }} of {{ totalPagesStar }}</span>
            <button type="button" class="btn btn-dark" @click="nextPageStar">
              <i class="bi bi-caret-right-fill"></i>
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

    <div class="album py-5">
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

              <div class="card-body">
                <div>
                  <h5>{{ cafe.c_name }}</h5>
                  <div>
                    <i class="bi bi-star-fill" style="color: #ff9529"></i>
                    {{ cafe.c_star.toFixed(1) }} ({{ cafe.c_review }} reviews)
                  </div>
                </div>
                <p class="card-text"></p>
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

      <div class="mb-2 mt-5" style="text-align:center" v-if="cafe_date.length>8">
        <button type="button" class="btn btn-dark" @click="previousPageDate">
          <i class="bi bi-caret-left-fill"></i>
        </button>
        <span class="mx-2">Page {{ currentPageDate }} of {{ totalPagesDate }}</span>
        <button type="button" class="btn btn-dark" @click="nextPageDate">
          <i class="bi bi-caret-right-fill"></i>
        </button>
      </div>

      <div class="container-xxl mt-5" v-if="isAuthen()">
        <button
          @click="addBTN"
          type="button"
          class="btn btn-sm btn-outline-secondary"
        >
          Add Cafe
        </button>
      </div>
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

export default {
  name: "Body",
  data() {
    return {
      cafe_star: [],
      cafe_date: [],
      currentPageStar: 1,
      currentPageDate: 1,
      pageSize: 8,
    };
  },
  created() {
    this.fetchCafeStarData();
    this.fetchCafeDateData();
  },
  methods: {
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
.scroll-top {
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
  background: red;
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
  margin-top: 30px;
}
</style>
