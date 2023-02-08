<template>
    <div class="row g-0">
        <div class="col-md-6 col-lg-7 d-flex align-items-center">
            <div style="background: rgba(0, 128, 0, 0.3)  "> 

                <div id="carouselExampleDark" class="carousel carousel-dark slide " data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="https://c.myholidays.com/blog/blog/content/images/2021/03/Urban-Caf-.jpg" 
                                class="d-block w-100" 
                                alt="..." 
                                style="height: 32rem" 
                            />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
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
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> 

                  <section id="milestone">
        <div class="container">
            <div class="row text-center justify-content-center gy-4">
                <div class="col-lg-2 col-sm-6">
                    <h1 class="display-4">90K+</h1>
                    <p class="mb-0">Happy Clients</p>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <h1 class="display-4">45M</h1>
                    <p class="mb-0">Lines of code</p>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <h1 class="display-4">190</h1>
                    <p class="mb-0">Total Downloads</p>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <h1 class="display-4">380K</h1>
                    <p class="mb-0">YouTube Subscribers</p>
                </div>
            </div>
        </div>
    </section>
                <i class="bi bi-search"></i>
            </div>

            <div>

                <div class ="justify-content-center align-items-center h-100">
                    <div class="row g-0">
                        <div class="col-md-6 col-lg-7 d-flex align-items-center w-100">
                            <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                                <input type="text" class="form-control form-control-lg" required/>
                            </div>
                            <h5>Name</h5>
                        </div>
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


                    <div class="row g-0">
                        <div class="col-md-6 col-lg-7 d-flex align-items-center w-100">
                            <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                               <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
                            </div>
                            <h5>Detail</h5>
                        </div>
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

                     <div class="row g-0">
                        <div class="col-md-6 col-lg-7 d-flex align-items-center w-100">
                            <div class="form-outline mb-4 justify-content-center align-items-center h-100" >
                                <input type="text" class="form-control form-control-lg" required/>
                            </div>
                            <h5>Service</h5>
                        </div>
                     </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>
<style>
  .carouselExampleDark{
     width: 50%;
  }
</style>