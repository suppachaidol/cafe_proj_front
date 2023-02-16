<template>
  <div class="container mt-5">
    <div class="container-fluid">

      <div class="row">

        <div class="col-6">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carouselDetail" style=" width:50% margin-top: 20px;">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner" >
              <div class="carousel-item active">
                <div class="fakeimg "><h1 style = "text-align: center">Uplode image 1</h1></div>
              </div>
              <div class="carousel-item">
                <div class="fakeimg"><h1 style = "text-align: center">Uplode image 2</h1></div>
              </div>
              <div class="carousel-item">
                <div class="fakeimg"><h1 style = "text-align: center">Uplode image 3</h1></div>
              </div>
              <div class="carousel-item  ">
                <div class="ratio ratio-16x9 shadow-lg">
                  <iframe class="ratio ratio-16x9"
                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                    allowfullscreen=""></iframe>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div>
          
                <p>
                  <a 
                    href="`+https://www.google.com/maps/place/Kasetsart+University/@13.8573562,100.5581778,14.59z/data=!4m21!1m15!4m14!1m6!1m2!1s0x30e282ef46dd656b:0x11b58fd82d82a774!2s111%2F161+Soi+Kheha+Thung+Song+Hong,+Thung+Song+Hong,+Lak+Si,+Bangkok!2m2!1d100.5870692!2d13.8990298!1m6!1m2!1s0x30e29d1e111be769:0x4332e8cd6aec8c31!2sKasetsart+University,+50+Ngamwongwan+Rd,+Lat+Yao,+Chatuchak,+Bangkok+10900!2m2!1d100.5696188!2d13.8475694!3m4!1s0x30e29d1e111be769:0x4332e8cd6aec8c31!8m2!3d13.8475694!4d100.5696188+ `"
                  >
                    Go to Google Map
                  </a>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3552.38725126451!2d100.57268192602788!3d13.844694666112678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d8e6ceb6111%3A0x897f574b5877462e!2sStarbucks!5e0!3m2!1sth!2sth!4v1676524633789!5m2!1sth!2sth" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                </p>

           
          </div>
        </div>


        <div class="col">
          <div class="container-fluid">
            <div class="row">

              <div class="col-5 ">
                <h2>Amazon Cafe </h2>
                <div>
                  <i class="bi bi-star"></i> 
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <!-- <i class="bi bi-star-half"></i>
                  <i class="bi bi-star-half"></i>
                  <i class="bi bi-star-half"></i>
                  <i class="bi bi-star-half"></i>
                  <i class="bi bi-star-half"></i> -->
                  (2 reviews)
                </div>
              </div>

              <div class="col-6 mt-2 word-spacing: 5px; ">
                <h5><i class="bi bi-star ml-1"></i>  <strong>Favorite</strong></h5> 
              </div>

            </div>

            <strong>Address</strong>
            <div class="container">
              <div class ="col">
                50 Ngamwongwan Rd, Khwaeng Lat Yao, Khet Chatuchak, Krung Thep Maha Nakhon 10900
              </div>
            </div>

            <strong>Service</strong>
            <div class="container">
              <div class ="col">
                Creative Space, Kids Friendly
              </div>
            </div>

         <!-- <button  @change="myFunction">Try it</button>

<div id="myDIV">
This is my DIV element.
</div> -->

            <strong>Hours:</strong>
            <div class="container">
              <div class ="col">
                <div>Sunday	9 AM - 5 PM</div>
                <div>Monday	9 AM - 5 PM</div>
                <div>Tuesday	9 AM - 5 PM</div>
                <div> Wednesday	9 AM - 5 PM </div>
                <div>Thursday	9 AM - 5 PM</div>
                <div>Friday	9 AM - 5 PM</div>
                <div>Saturday	Closed</div>
              </div>
            </div>

            <strong>Detail</strong>
            <div class="container">
              <div class ="col">
                คาเฟ่ติดแอร์ เปิด เที่ยงวันยังยันเที่ยงคืน อาหารดี ห้องน้ำสะอาด ปราศจากความอร่อย <b style="color:red">!! ห้ามนำสัตว์เลี้ยงเข้ามาในร้าน ปรับ 2000 บาท !! </b>
              </div>
            </div>
          </div>
        </div>



      </div>

      <div class ="mt-3 mb-3">
        <h2><strong> Popular Dishes</strong></h2>
      </div>

      

    </div>

    <div class="container-fluid">
      <div class="row">

        <div class="col-3     ">
          <div class="card   shadow  ">
            <div class=" card-body    ">
                <img alt="image"
                class="img-fluid d-block mx-auto mt-md-3 mb-4 mt-sm-2 w-100"
                src="https://image.bestreview.asia/wp-content/uploads/2022/05/best-cafe-amazon-menu.jpg">
                <div class="row">
                  <div class= "col">
                    <h4 style = "direction: rtl;">500 Bath </h4> 
                  </div>
                </div>
                
                
            </div>
          </div> 
        </div>

        <div class="col-3     ">
          <div class="card   shadow  ">
            <div class=" card-body    ">
                <img alt="image"
                class="img-fluid d-block mx-auto mt-md-3 mb-4 mt-sm-2 w-100"
                src="https://image.bestreview.asia/wp-content/uploads/2022/05/best-cafe-amazon-menu.jpg">
                <h4 style = "direction: rtl;">500 Bath </h4> 
                
            </div>
          </div> 
        </div>

        <div class="col-3     ">
          <div class="card   shadow  ">
            <div class=" card-body    ">
                <img alt="image"
                class="img-fluid d-block mx-auto mt-md-3 mb-4 mt-sm-2 w-100"
                src="https://image.bestreview.asia/wp-content/uploads/2022/05/best-cafe-amazon-menu.jpg">
                <h4 style = "direction: rtl;">500 Bath </h4> 
                
            </div>
          </div> 
        </div>

        <div class="col-3     ">
          <div class="card   shadow  ">
            <div class=" card-body    ">
                <img alt="image"
                class="img-fluid d-block mx-auto mt-md-3 mb-4 mt-sm-2 w-100"
                src="https://image.bestreview.asia/wp-content/uploads/2022/05/best-cafe-amazon-menu.jpg">
                <h4 style = "direction: rtl;">500 Bath </h4> 
                
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

              <div class="col-6 w-500px mt-5 mb-3 ">
                <h4>Overall ratings and reviews</h4>
                <div> Reviews can only be made by who have eaten at this cafe </div>
              </div>

              <div class="col-6 mt-5 mb-3">

                <div class="container-fluid">
                  <div class="row">
                    <div class="col-4 ">
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i> 
                    </div>
                    <div class="col-3 ">
                        (5 reviews)
                    </div>
                  </div>
                </div>

                <div class="container-fluid">
                  <div class="row">
                    <div class="col-4 ">
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i> 
                    </div>
                    <div class="col-3">
                        (4 reviews)
                    </div>
                  
                  </div>
                </div>

                <div class="container-fluid">
                  <div class="row">
                    <div class="col-4 ">
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i> 
                    </div>
                    <div class="col-3">
                        (3 reviews)
                    </div>
                  </div>
                </div>

                <div class="container-fluid">
                  <div class="row">
                    <div class="col-4 ">
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i> 
                    </div>
                    <div class="col-3">
                        (2 reviews)
                    </div>
                  </div>
                </div>


                <div class="container-fluid">
                  <div class="row">
                    <div class="col-4 ">
                      <i class="bi bi-star"></i>    
                    </div>
                    <div class="col-3">
                        (1 reviews)
                    </div>
                  </div>
                </div>

                  
                

              </div>

            </div>
          </div>

          <div class="container-fluid">
            <div class="row"> 
              <div class="col-5-1 mb-2">
                <div class="pt-2">
                  <h5>Your first-hand experiences really help other travelers. Thanks!</h5>
                  <p>
                    <i class="mx-2">Your overall rating of this Cafe : </i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                  </p>
                </div>
                <div class="container-fluid">
                    <div class="row">

                      <div class="col-2 mt-1">
                        <h5>comment </h5>          
                      </div>

                      <div class="col mb-3">
                        <input type="text" class="form-control w-100" placeholder="What do you think ?" required/>
                      </div>


                      <div class="col-2 ">
                        <button type="button" class="btn btn-secondary">Confirm</button>
                      </div>
                    </div>
                  
                </div>
                <p class="line pb-3" >
                  _______________________________________________________________________________________________________
                </p>
                <div>
                  <div class="container-fluid">
                    <div class="row">

                      <div class="col-2">
                        <div style = "text-align: center">
                          <img class="img-fluid w-75 " src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" >
                        </div>
                        <p style = "text-align: center">P****</p>
            
                      </div>

                      <div class="col-5">
                        <div class="mb-2">
                          <i class="bi bi-star"></i>
                          <i class="bi bi-star"></i>
                          <i class="bi bi-star"></i>        
                          December 28, 2022
                        </div>
                        <p> Everything was delicious and the service was outstanding</p>
                      </div>
                  
                    </div>
                    <div class="line  pb-3">
                          _______________________________________________________________________________________________________
                      <p> 
                        This review is the subjective opinion of a Tripadvisor member and not of Tripadvisor LLC. Tripadvisor performs checks on reviews.
                      </p> 
                    </div>
                  </div>

                  <div class="container-fluid">
                    <div class="row">

                      <div class="col-2">
                        <div style = "text-align: center">
                          <img class="img-fluid w-75 " src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" >
                        </div>
                        <p style = "text-align: center">D**</p>
            
                      </div>

                      <div class="col-5">
                        <div class="mb-2">
                          <i class="bi bi-star"></i>
                          <i class="bi bi-star"></i>
                          <i class="bi bi-star"></i> 
                          <i class="bi bi-star"></i>        
                          December 20, 2022
                        </div>
                        <p> Everything was delicious and the service was outstanding</p>
                      </div>
                  
                    </div>
                    <div class="line  pb-3">
                          _______________________________________________________________________________________________________
                      <p> 
                        This review is the subjective opinion of a Tripadvisor member and not of Tripadvisor LLC. Tripadvisor performs checks on reviews.
                      </p> 
                    </div>
                  </div>
                </div>
              </div> 
            <div>
            </div>
            </div>
          </div>
        </div>
        <div class="col ">
          <section class="pt-5 pb-5">
            <h2 class ="pb-2" style="text-align: center">Near by </h2> 
            <div class="container w-75">
                <div class="col mb-3">
                  <div class="card shadow-sm">
                    <div class="moreCafe card-body " >
                      <img class="img-fluid pb-2 " src="https://image.bestreview.asia/wp-content/uploads/2022/05/best-cafe-amazon-menu.jpg" alt="" >
                      <h4 class="card-title">ERD Cafe</h4>
                      <p class="card-text">Cafe in forest.</p>
                      <a href="#" class="btn btn-primary" style = "direction: rtl;">View</a>
                    </div>
                  </div>
                </div>
            
            </div>
            <div class="container w-75">
                <div class="col mb-3">
                  <div class="card shadow-sm">
                    <div class="moreCafe card-body " >
                      <img class="img-fluid pb-2 " src="https://image.bestreview.asia/wp-content/uploads/2022/05/best-cafe-amazon-menu.jpg" alt="" >
                      <h4 class="card-title">ERD Cafe</h4>
                      <p class="card-text">Cafe in forest.</p>
                      <a href="#" class="btn btn-primary" style = "direction: rtl;">View</a>
                    </div>
                  </div>
                </div>
            
            </div>
            <div class="container w-75">
                <div class="col mb-3">
                  <div class="card shadow-sm">
                    <div class="moreCafe card-body " >
                      <img class="img-fluid pb-2 " src="https://image.bestreview.asia/wp-content/uploads/2022/05/best-cafe-amazon-menu.jpg" alt="" >
                      <h4 class="card-title">ERD Cafe</h4>
                      <p class="card-text">Cafe in forest.</p>
                      <a href="#" class="btn btn-primary" style = "direction: rtl;">View</a>
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
<style  >
.myDIV {
  width: 100%;
  padding: 50px 0;
  text-align: center;
  background-color: lightblue;
  margin-top: 20px;
}
.moreCafe{
   text-align: center ;
}
.line{
  text-align: center ;
  color:rgb(121, 121, 121);
  font-size: 10px;
}
.fakeimg {
  height: 300px;
  background: #aaa;
}
.col-5-1 {
  background-color: #bab0b0;
  width: 100%;
}
</style>

<script>
//  function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

</script>
