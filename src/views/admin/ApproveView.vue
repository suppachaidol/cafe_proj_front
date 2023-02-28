<template>
    <div class ="bg-secondary" >
        <div class="container-fluid pt-5">
            <div class="row align-items-center justify-content-center  text-center">
                <div class="col-12 col-md-5  ">
                    <span
                        class="text-center w-100 d-block text-center d-flex justify-content-center ">
                        <form class="form-inline d-block  w-100" style="min-width:250px;">
                           
                            <!-- <input class="form-control form-control-lg mr-sm-2 mb-2 w-100"
                            type="search" placeholder="Search" aria-label="Search"> -->

                            <input class ="input-search form-control form-control-lg mr-sm-2 mb-5 w-100 my-5" type="text" v-model="input" placeholder="Search" />
                            <div class="item cafe" v-for="cafe in filteredList()" :key="cafe">
                                <p>{{ cafe }}</p>
                            </div>
                            <div class="item error" v-if="input&&!filteredList().length">
                                <p>No results found!</p>
                            </div>
                             
                            
                

                        </form>
                    </span>
                   
                </div>
            </div>
        </div>

        <section class="pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <a href="#" ><img class="card-img-top img-fluid"
                            src="https://dummyimage.com/350x225/5fa9f8/efefef" alt=""></a>
                        <div class="card-body">
                            <div class="row">
                                <a class="col-5" href="/detailApprove">R.E.A.D. Cafe</a>
                                <div class="col">
                                    <div class="row">
                                        <div class="col star-comment  text-warning">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            <p class="card-text">R.E.A.D. Cafe เป็นร้านคาเฟ่ที่เหมาะกับการนั่งทํางานหรืออ่านหนังสือ มีขายทั้งขนมและเครื่องดื่ม นอกจากนั้นยังมีอาหารบริการด้วย.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                        <a class="col-5"  style="color:green" href="#"><strong>Approve</strong></a>
                                
                                </div>
                                    <div>
                                        <a class="col-5"  style="color:red" href="#"><strong>Reject</strong></a>
                                
                                </div>
                                <!-- <small class="text-muted">9 mins</small> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <a href="#" ><img class="card-img-top img-fluid"
                            src="https://dummyimage.com/350x225/5fa9f8/efefef" alt=""></a>
                        <div class="card-body">
                            <div class="row">
                                <a class="col-5" href="#">R.E.A.D. Cafe</a>
                                <div class="col">
                                    <div class="row">
                                        <div class="col star-comment  text-warning">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            <p class="card-text">R.E.A.D. Cafe เป็นร้านคาเฟ่ที่เหมาะกับการนั่งทํางานหรืออ่านหนังสือ มีขายทั้งขนมและเครื่องดื่ม นอกจากนั้นยังมีอาหารบริการด้วย.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                        <a class="col-5"  style="color:green" href="#"><strong>Approve</strong></a>
                                
                                </div>
                                    <div>
                                        <a class="col-5"  style="color:red" href="#"><strong>Reject</strong></a>
                                
                                </div>
                                <!-- <small class="text-muted">9 mins</small> -->
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <a href="#" ><img class="card-img-top img-fluid"
                            src="https://dummyimage.com/350x225/5fa9f8/efefef" alt=""></a>
                        <div class="card-body">
                            <div class="row">
                                <a class="col-5" href="#">R.E.A.D. Cafe</a>
                                <div class="col">
                                    <div class="row">
                                        <div class="col star-comment  text-warning">
                                            <i class="bi bi-star-fill"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="card-text">R.E.A.D. Cafe เป็นร้านคาเฟ่ที่เหมาะกับการนั่งทํางานหรืออ่านหนังสือ มีขายทั้งขนมและเครื่องดื่ม นอกจากนั้นยังมีอาหารบริการด้วย.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                        <a class="col-5"  style="color:green" href="#"><strong>Approve</strong></a>
                                
                                </div>
                                    <div>
                                        <a class="col-5"  style="color:red" href="#"><strong>Reject</strong></a>
                                
                                </div>
                                <!-- <small class="text-muted">9 mins</small> -->
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <a href="#" ><img class="card-img-top img-fluid"
                            src="https://dummyimage.com/350x225/5fa9f8/efefef" alt=""></a>
                        <div class="card-body">
                            <div class="row">
                                <a class="col-5" href="#">R.E.A.D. Cafe</a>
                                <div class="col">
                                    <div class="row">
                                        <div class="col star-comment  text-warning">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="card-text">R.E.A.D. Cafe เป็นร้านคาเฟ่ที่เหมาะกับการนั่งทํางานหรืออ่านหนังสือ มีขายทั้งขนมและเครื่องดื่ม นอกจากนั้นยังมีอาหารบริการด้วย.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                        <a class="col-5"  style="color:green" href="#"><strong>Approve</strong></a>
                                
                                </div>
                                    <div>
                                        <a class="col-5"  style="color:red" href="#"><strong>Reject</strong></a>
                                
                                </div>
                                <!-- <small class="text-muted">9 mins</small> -->
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <a href="#" ><img class="card-img-top img-fluid"
                            src="https://dummyimage.com/350x225/5fa9f8/efefef" alt=""></a>
                        <div class="card-body">
                            <div class="row">
                                <a class="col-5" href="#">R.E.A.D. Cafe</a>
                                <div class="col">
                                    <div class="row">
                                        <div class="col star-comment  text-warning">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="card-text">R.E.A.D. Cafe เป็นร้านคาเฟ่ที่เหมาะกับการนั่งทํางานหรืออ่านหนังสือ มีขายทั้งขนมและเครื่องดื่ม นอกจากนั้นยังมีอาหารบริการด้วย.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                        <a class="col-5"  style="color:green" href="#"><strong>Approve</strong></a>
                                
                                </div>
                                    <div>
                                        <a class="col-5"  style="color:red" href="#"><strong>Reject</strong></a>
                                
                                </div>
                                <!-- <small class="text-muted">9 mins</small> -->
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <a href="#" ><img class="card-img-top img-fluid"
                            src="https://dummyimage.com/350x225/5fa9f8/efefef" alt=""></a>
                        <div class="card-body">
                            <div class="row">
                                <a class="col-5" href="#">R.E.A.D. Cafe</a>
                                <div class="col">
                                    <div class="row">
                                        <div class="col star-comment  text-warning">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="card-text">R.E.A.D. Cafe เป็นร้านคาเฟ่ที่เหมาะกับการนั่งทํางานหรืออ่านหนังสือ มีขายทั้งขนมและเครื่องดื่ม นอกจากนั้นยังมีอาหารบริการด้วย.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                        <a class="col-5"  style="color:green" href="#"><strong>Approve</strong></a>
                                
                                </div>
                                    <div>
                                        <a class="col-5"  style="color:red" href="#"><strong>Reject</strong></a>
                                
                                </div>
                                <!-- <small class="text-muted">9 mins</small> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        </section>
        <nav class ="pb-3" aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous"  tabindex="-1">
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
        </nav>

    </div>
</template>

<script setup>
import { ref } from "vue";
let input = ref("");
const cafe = ["Read", "XYZ", "orange"];
function filteredList() {
  return cafe.filter((cafe) =>
    cafe.toLowerCase().includes(input.value.toLowerCase())
  );
}
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
</style>