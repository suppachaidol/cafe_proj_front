<template>
<div class="bg-image height: 100vh" 
     style="background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg'); height: 100vh">
  <section class="pt-5 pb-5 mt-0 align-items-center d-flex text-light">
    <div class="container-fluid ">
      <div class="row align-items-center justify-content-center  text-center">
        <div class="col-12 col-md-5  ">
          <h1 class="display-3   mb-2 mt-5 text-white"><strong>Cafe Search</strong> </h1>
          <p class="lead   mb-5">Where do you want to go <strong>?</strong></p>

          <span
            class="text-center w-100 d-block text-center d-flex justify-content-center ">
            <form class="form-inline d-block  w-100" style="min-width:250px;">

              <input class="form-control form-control-lg mr-sm-2 mb-2 w-100"
                type="search" placeholder="Search" aria-label="Search">

                <div class ="pb-2" >
                  <input type="checkbox" name="pets" value="Other"><i class ="mx-2"  >Near by</i><br>
                </div>

                <div class="dropdown mb-2" >
                  <a class="btn btn-secondary dropdown-toggle w-100" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Star
                  </a>

                  <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#">
                      <div class="row">
                        <div class="col">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </div>
                      </div>  
                    </a></li>
                    <li><a class="dropdown-item" href="#">
                      <div class="row">
                        <div class="col">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </a></li>
                    <li><a class="dropdown-item" href="#">
                      <div class="row">
                        <div class="col">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </a></li>
                    <li><a class="dropdown-item" href="#">
                      <div class="row">
                        <div class="col">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </a></li>
                    <li><a class="dropdown-item" href="#">
                      <div class="row">
                        <div class="col">
                          <i class="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </a></li>
                  </ul>

                </div>

                <div class="dropdown mb-2" >
                  <a class="btn btn-secondary dropdown-toggle w-100" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Service
                  </a>

                  <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
                      <li><a class="dropdown-item" href="#">Creative Space</a></li>
                      <li><a class="dropdown-item" href="#">Screening Room</a></li>
                      <li><a class="dropdown-item" href="#"> Karaoke</a></li>
                      <li><a class="dropdown-item" href="#"> Good for Group</a></li>
                      <li><a class="dropdown-item" href="#"> Pet Friendly</a></li>
                      <li><a class="dropdown-item" href="#"> Kids Friendly</a></li>
                      <li><a class="dropdown-item" href="#"> Creative Space</a></li>
                      <li><a class="dropdown-item" href="#"> Screening Room</a></li>
                      <li><a class="dropdown-item" href="#"> Take Away</a></li>
                      <li><a class="dropdown-item" href="#"> No Reservations</a></li>
                      <li><a class="dropdown-item" href="#"> Cash Only</a></li>
                      <li><a class="dropdown-item" href="#"> Art Gallery</a></li>
                      <li><a class="dropdown-item" href="#"> Art Space</a></li>
                      <li><a class="dropdown-item" href="#"> Co-Working Space</a></li>
                  </ul>

                </div>


                
              <button class="btn btn-primary w-100 btn-lg  mt-2  "
                type="submit">Search</button>
            </form>
          </span>

          <div class="btn-container-wrapper p-relative d-block  ">
            <div
              class="btn-container-velocity justify-content-center d-flex mt-1 mb-3 text-center">
              <a class="btn btn-link btn-lg   mt-md-3 mb-4 scroll align-self-center text-light"
                href="#section-1">
                <i class="fa fa-angle-down fa-2x text-light"></i>
              </a>
            </div>
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
