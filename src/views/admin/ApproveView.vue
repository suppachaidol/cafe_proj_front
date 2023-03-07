<template>
  <div class=" container-fluid min-vh-100" style="background-color:#6c757d" id="bg">
    <div class="container-fluid pt-5" >
      <div class="row align-items-center justify-content-center text-center">
        <div class="col-12 col-md-5">
          <span
            class="text-center w-100 d-block text-center d-flex justify-content-center"
          >
            <form class="form-inline d-block w-100" style="min-width: 250px">
              <!-- <input class="form-control form-control-lg mr-sm-2 mb-2 w-100"
                            type="search" placeholder="Search" aria-label="Search"> -->

              <input
                class="input-search form-control form-control-lg mr-sm-2 mb-5 w-100 my-5"
                type="text"
                v-model="input"
                placeholder="Search"
                @click="currentPage1"
              />
              <!-- <div class="item cafe" v-for="cafe in filteredList()" :key="cafe">
                <p>{{ cafe.c_name }}</p>
              </div> -->
              <div class="item error" v-if="input && !filteredList().length">
                <p>No results found!</p>
              </div>
            </form>
          </span>
        </div>
      </div>
    </div>

    <section class="pt-5 pb-5">
      <div class="container">
        <div class="row" >
          <div
            class="col-md-4"
            v-for="(cafe, index) in displayedCafes"
            :key="index"
          >
            <div class="card mb-4 shadow-sm">
              <a href="" @click="goToDetail(cafe.c_id)"
                ><img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="250"
                  :src="`http://localhost:5000/api/images/cafe/${cafe.c_image}`"
                  alt=""
              /></a>
              <div class="card-body">
                <div class="row">
                  <a
                    class=""
                    href=""
                    id="cafeName"
                    @click="goToDetail(cafe.c_id)"
                    >{{ cafe.c_name }}</a
                  >
                </div>

                <!-- <p class="card-text">
                  {{cafe.c_detail}}
                </p> -->
                <div
                  class="d-flex justify-content-between align-items-center mt-5"
                >
                  <div>
                    <button
                      style="color: green;border:none;background-color:white;text-decoration: underline"
                      href=""
                      @click="approve(cafe.c_id)"
                      ><strong>Approve</strong></button
                    >
                  </div>
                  <div>
                    <button
                      
                      style="color: red;border:none;background-color:white;text-decoration: underline"
                      href=""
                      @click="reject(cafe.c_id)"
                      ><strong>Reject</strong></button
                    >
                  </div>
                  <!-- <small class="text-muted">9 mins</small> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-2 mt-3" v-if="totalPages" style="text-align: center">
        <button type="button" class="btn btn-dark" @click="previousPage">
          <i class="bi bi-caret-left-fill"></i>
        </button>
        <span class="mx-2">Page {{ currentPage }} of {{ totalPages }}</span>
        <button type="button" class="btn btn-dark" @click="nextPage">
          <i class="bi bi-caret-right-fill"></i>
        </button>
      </div>
    </section>
    <!-- <nav class="pb-3" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" aria-label="Previous" tabindex="-1">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span class="sr-only">Next</span>
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav> -->
  </div>
</template>

<script>
import CafeStore from "@/store/cafe";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      cafe: ["Read", "XYZ", "orange"],
      cafe_notpass: [],
      num_cafe_notpass: 0,
      input: "",
      currentPage: 1,
      pageSize: 6,
      cafe_filter:[],
    };
  },
  created() {
    this.fetchNotpassCafe();
  },
  methods: {
    async fetchNotpassCafe() {
      await CafeStore.dispatch("fetchNotpassCafe");
      this.cafe_notpass = await CafeStore.getters.cafe_notpass;
      this.num_cafe_notpass = this.cafe_notpass.length
    },
    filteredList() {
      return this.cafe_notpass.filter((caf) =>
        caf.c_name.toLowerCase().includes(this.input.toLowerCase())
      );
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
    currentPage1(){
        this.currentPage = 1
    },
    goToDetail(id) {
      this.$router
        .push({
          path: "/detailApprove",
          query: {
            id: id,
          },
        })
        .then(() => {
          window.scrollTo(0, 0);
        });
    },
    async approve(id) {
        Swal.fire({
        title: "Are you sure to approve cafe?",
        showCancelButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, approve cafe!",
      }).then(async (result) => {
        if (result.isConfirmed) {
            let payload = {
            c_id: id,
            };
            let res = await CafeStore.dispatch("updateStatus", payload);
            console.log(res);
            await Swal.fire({title:"Approved!",text:"cafe has been approved.",icon:"success",showConfirmButton: false,timer: 1000,});
            this.$router.go(0)
        }
      });
    },
    async reject(id) {
        Swal.fire({
        title: "Are you sure to reject?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, reject cafe!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          let res = await CafeStore.dispatch("rejectCafe", id);
          console.log(res);
          await Swal.fire({title:"Rejected!",text:"cafe has been deleted.",icon:"success",showConfirmButton: false,timer: 1000,});
          this.$router.go(0)
        }
      });
    },
  },
  computed: {
    displayedCafes() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.cafe_notpass.filter((caf) =>
        caf.c_name.toLowerCase().includes(this.input.toLowerCase())
        ).slice(start, end);
    //   return this.cafe_notpass ? this.cafe_notpass.slice(start, end) : [];
    },
    totalPages() {
      return this.cafe_notpass
        ? Math.ceil(this.filteredList().length / this.pageSize)
        : 0;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

.input-search {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.cafe {
  background-color: rgb(97, 62, 252);
  cursor: pointer;
}

.error {
  background-color: tomato;
}
#cafeName {
  color: black;
}

</style>
