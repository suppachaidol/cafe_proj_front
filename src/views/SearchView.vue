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

              <input v-model="name" class="form-control form-control-lg mr-sm-2 mb-2 w-100"
                type="search" placeholder="Name" aria-label="Search">

                <h4>or</h4>
                <div class ="pb-2">
                  <label id="container">
                    <input v-model="nearBy" type="checkbox" @change="getCurrentLocation">
                    <span class="ms-2" id="checkmark">Near by</span>
                  </label>
                </div>
                

                <div class="dropdown mb-2" >
                  <button class="btn btn-secondary dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ selectedStarOption ? selectedStarOption : 'Star' }} <i class="bi bi-star-fill"></i>
                  </button>
                  <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                    <li v-for="(option, index) in starOptions" :key="index">
                    <a class="dropdown-item"  @click="selectStarOption(option)">{{ option }} <i class="bi bi-star-fill"></i></a>
                    </li>
                  </ul>

                </div>

                <!-- <div class="dropdown mb-2" >
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

                </div> -->

                <div class="dropdown mb-2" >
                  <button class="btn btn-secondary dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ selectedServiceOption ? selectedServiceOption : 'Service' }}
                  </button>
                  <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                    <li v-for="(option, index) in serviceOptions" :key="index">
                    <a class="dropdown-item"  @click="selectServiceOption(option)">{{ option }}</a>
                    </li>
                  </ul>

                </div>

                
              <button @click="goToFilter" class="btn btn-primary w-100 btn-lg  mt-2  "
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

export default {
  data(){
    return{
      name:null,
      nearBy:false,
      latitude:0,
      longitude:0,
      serviceOptions: ['Dine-in','Takeaway', 'Co-Working Space', 'Meeting','Toilets','Creative Space','Screening Room','Karaoke','Good for Group',
      'Pet Friendly','Kids Friendly','Art Gallery'],
      selectedServiceOption: null,
      starOptions:[5,4,3,2,1],
      selectedStarOption: 0,
      hideComponent:false
    }
  },
  methods:{
     selectServiceOption(option) {
      this.selectedServiceOption = option;
    },
    selectStarOption(option) {
      this.selectedStarOption = option;
    },
    async getCurrentLocation(){
      if(this.nearBy == true){
        const success = (position)=>{
          console.log(position.coords)
          this.latitude = position.coords.latitude
          this.longitude = position.coords.longitude    
        }
        const error = () =>{
          console.log('Unable to retrieve your location')
        }
        await navigator.geolocation.getCurrentPosition(success,error)  
      }else{
        this.latitude = 0
        this.longitude = 0
      }
    },
    goToFilter(){
      this.$router.push({ 
        path: '/filter', 
        query: { 
          name: this.name,
          latitude: this.latitude,
          longitude: this.longitude,
          star: this.selectedStarOption,
          service: this.selectedServiceOption
        } 
})
    },

  }
}
</script>

<style scoped>
.bi-star-fill{
  color: #ff9529;
}

</style>
