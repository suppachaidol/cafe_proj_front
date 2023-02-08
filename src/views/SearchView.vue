<template>
  <div>
    <section class="vh-100" style="background-color: #eee">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style="border-radius: 1rem">
              <!-- <div class="row g-0"> -->

                <!-- <div class="col-md-6 col-lg-7 d-flex align-items-center"> -->
                  <div class="card-body p-4 p-lg-5 text-black  ">
                    <form>
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <span class="h1 fw-bold mb-0">Cafe Search</span>
                      </div>


                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          required
                        />
                        <label class="form-label" 
                          >Name</label
                        >
                      </div>

                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Location or Near by
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                          <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Style
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>


                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Service
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>


                     

                      <div class="pt-1 mb-4">
                        <button
                          @click="login"
                          class="btn btn-info btn-lg btn-block"
                          type="button"
                        >
                          Search
                        </button>
                      </div>

                      
                    </form>
                  </div>
                
                <!-- </div> -->
    
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

</script>

<style></style>
