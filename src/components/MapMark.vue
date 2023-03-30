<template>
  <div style="background-color:#f2eddd">
    <section class="mx-2pt-5 pb-5 height: 100vh" >
      <div class="mx-5">
        <div class="row">
          <div class="col-2" >
                  <div class="scroll-top1">
        <div class=" mb-5 mt-5 " id="filter-bar">
          <nav
            class="navbar navbar-light bg-light rounded-4 border border-dark"
            style="background-image: url('https://i.pinimg.com/originals/64/26/35/6426354e65e2465b0160513b50f577a6.jpg');"
          >
            <div class="container">
              <form class="form-inline d-block">
                <input
                  class="input-search form-control form-control"
                  type="text"
                  v-model="input"
                  placeholder="Search"
                  @click="currentPage1"
                />
                <input
                  class="form-check-input"
                  v-model="nearBy"
                  type="checkbox"
                  @change="getCurrentLocation"
                />
                <span class="mx-2" id="checkmark">Near by</span>
              </form>

              <div class="col mt-3">
                <h4><strong>Services</strong></h4>
                <div
                  class="form-check"
                  v-for="item in items"
                  :key="item.value"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check1"
                    name="option1"
                    :value="item.value"
                    v-model="service_selected"
                    @change="currentPage1"
                  />
                  <label class="form-check-label">{{ item.text }}</label>
                </div>
              </div>
            </div>

            <div class="container text-light">
              <div class="container dropdown mt-3 mb-2">
                <button
                  class="btn btn-secondary dropdown-toggle w-100 text-white"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ selectedFilterOption ? selectedFilterOption : "Filter" }}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li v-for="(option, index) in filterOptions" :key="index">
                    <a
                      class="dropdown-item"
                      @click="selectFilterOption(option)"
                      >{{ option }}</a
                    >
                  </li>
                </ul>
              </div>

              <div class="container dropdown mb-2">
                <button
                  class="btn btn-secondary dropdown-toggle w-100"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ selectedStarOption ? selectedStarOption : "Star" }}
                  <i class="bi bi-star-fill"></i>
                </button>
                <ul
                  class="dropdown-menu w-100"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li v-for="(option, index) in starOptions" :key="index">
                    <a class="dropdown-item" @click="selectStarOption(option)"
                      >{{ option }} <i class="bi bi-star-fill"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <div class="container dropdown mb-2">
                  <button
                    class="btn btn-secondary dropdown-toggle w-100"
                    type="button"
                    id="dropdownTravel"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {{ selectedTravelOption}}
                    
                  </button>
                  <ul
                    class="dropdown-menu w-100"
                    aria-labelledby="dropdownTravel"
                  >
                    <li v-for="(option, index) in travelMode" :key="index">
                      <a class="dropdown-item" @click="selectTravelOption(option)"
                        >{{ option }} </a>
                    </li>
                  </ul>
                </div>
                <div class="container mb-2">
                  <button
                    class="btn btn-secondary w-100"
                    type="button"
                    @click="clear"
                  >
                    Clear Filter
                  </button>
                  
                </div>
            </div>
          </nav>
        </div>
      </div>

            <!-- <div class=" mb-5 mt-5 " id="filter-bar">
            <nav
              class="navbar navbar-light bg-light rounded-4 border border-dark"
              style="background-image: url('https://i.pinimg.com/originals/64/26/35/6426354e65e2465b0160513b50f577a6.jpg');"
            >
              <div class="container">
                <form class="form-inline d-block">
                  <input
                    class="input-search form-control form-control"
                    type="text"
                    v-model="input"
                    placeholder="Search"
                    @click="currentPage1"
                  />
                  <input
                    class="form-check-input"
                    v-model="nearBy"
                    type="checkbox"
                    @change="getCurrentLocation"
                  />
                  <span class="mx-2" id="checkmark">Near by</span>      
                </form>

                <div class="col mt-3">
                  <h4><strong>Services</strong></h4>
                  <div
                    class="form-check"
                    v-for="item in items"
                    :key="item.value"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="check1"
                      name="option1"
                      :value="item.value"
                      v-model="service_selected"
                      @change="currentPage1"
                    />
                    <label class="form-check-label">{{ item.text }}</label>
                  </div>
                </div>
              </div>

              <div class="container text-light">
                <div class="container dropdown mt-3 mb-2">
                  <button
                    class="btn btn-secondary dropdown-toggle w-100 text-white"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {{ selectedFilterOption ? selectedFilterOption : "Filter" }}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li v-for="(option, index) in filterOptions" :key="index">
                      <a
                        class="dropdown-item"
                        @click="selectFilterOption(option)"
                        >{{ option }}</a
                      >
                    </li>
                  </ul>
                </div>

                <div class="container dropdown mb-2">
                  <button
                    class="btn btn-secondary dropdown-toggle w-100"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {{ selectedStarOption ? selectedStarOption : "Star" }}
                    <i class="bi bi-star-fill"></i>
                  </button>
                  <ul
                    class="dropdown-menu w-100"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li v-for="(option, index) in starOptions" :key="index">
                      <a class="dropdown-item" @click="selectStarOption(option)"
                        >{{ option }} <i class="bi bi-star-fill"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div class="container dropdown mb-2">
                  <button
                    class="btn btn-secondary dropdown-toggle w-100"
                    type="button"
                    id="dropdownTravel"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {{ selectedTravelOption}}
                    
                  </button>
                  <ul
                    class="dropdown-menu w-100"
                    aria-labelledby="dropdownTravel"
                  >
                    <li v-for="(option, index) in travelMode" :key="index">
                      <a class="dropdown-item" @click="selectTravelOption(option)"
                        >{{ option }} </a>
                    </li>
                  </ul>
                </div>
                  <div class="container mb-2">
                  <button
                    class="btn btn-secondary w-100"
                    type="button"
                    @click="clear"
                  >
                    Clear Filter
                  </button>
                  
                </div>
              </div>
            </nav>
            </div> -->
          </div>
          <div class="col mt-5">
             <!-- <h3 class="col mt-4 mb-5 justify-content-center align-items-center" style="text-align: center" ><strong>Result Cafe</strong></h3> -->
            <div class="container" id="con">
              <div id="map"></div>
              <div v-for="dis in distance" :key="dis" class="distance">
                {{ dis }}
              </div>

              <div
                class="col justify-content-center align-items-center"
                style="text-align: center"
              >
                <h3 class="mt-4 mb-5"><strong>Result Cafe
                  <img src="https://cdn-icons-png.flaticon.com/512/2875/2875387.png" alt="" style="height: 3rem" ></strong></h3>

                <div class="row">
                  <div
                    class="col-3"
                    v-for="(place, index) in displayedCafes"
                    :key="index"
                  >
                    <div class="container">
                      <div class="col mb-3">
                        <div class="card shadow-sm" style="height: 350px">
                          <div class="moreCafe card-body">
                            <a href="#" @click="showMarkers(place)">
                              <img
                                width="100%"
                                height="150"
                                class="bd-placeholder-img card-img-top"
                                :src="`http://localhost:5000/api/images/cafe/${place.c_image}`"
                                alt=""
                              />
                              <h5 class="card-title mt-2">{{ place.c_name }}</h5>
                              <p class="card-text" v-if="place.c_star>0">
                                <i
                                  class="bi bi-star-fill"
                                  style="color: #ff9529"
                                ></i>
                                {{ place.c_star.toFixed(1) }} ({{
                                  place.c_review
                                }}
                                reviews)
                              </p>
                              <p class="card-text" v-else>
                                <i
                                  class="bi bi-star-fill"
                                  style="color: #ff9529"
                                ></i>
                                - ({{
                                  place.c_review
                                }}
                                reviews)
                              </p>
                              <div class="bottomButton">
                                <button
                                  @click="detailBTN(place.c_id)"
                                  href="#"
                                  class="btn btn-primary"
                                  style="direction: rtl"
                                >
                                  View
                                </button>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item error" v-if="!filteredList().length">
                  <p>No results found!</p>
                </div>
                <div
                  class="mb-2 mt-3"
                  style="text-align: center"
                  v-if="filteredList().length"
                >
                  <button
                    type="button"
                    class="btn "
                    @click="previousPage"
                  >
                    <img class ="rotate-img" src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/next-icon.png" alt="" style="width:3rem">
                  </button>
                  <span class="mx-2"
                    >Page {{ currentPage }} of {{ totalPages }}</span
                  >
                  <button type="button" class="btn" @click="nextPage">
                    <img  src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/next-icon.png" alt="" style="width:3rem">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  </div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";
import CafeStore from "@/store/cafe";

export default {
  data() {
    return {
      cafe: [],
      map: null,
      markers: [],
      num: 0,
      distance: [],
      currentPage: 1,
      pageSize: 8,
      input: "",
      service_selected: [],
      starOptions: [5, 4, 3, 2, 1],
      selectedStarOption: 0,
      maxPage: null,
      filtered_cafe: null,
      items: [
        { value: "Dine-in", text: "Dine-in" },
        { value: "Takeaway", text: "Takeaway" },
        { value: "Co-Working Space", text: "Co-Working Space" },
        { value: "Meeting", text: "Meeting" },
        //{ value: "Toilets", text: "Toilets" },
        { value: "Creative Space", text: "Creative Space" },
        { value: "Screening Room", text: "Screening Room" },
        { value: "Karaoke", text: "Karaoke" },
        { value: "Good for Group", text: "Good for Group" },
        { value: "Pet Friendly", text: "Pet Friendly" },
        { value: "Kids Friendly", text: "Kids Friendly" },
        { value: "Art Gallery", text: "Art Gallery" },
      ],
      filterOptions: ["New", "Recommend", "Review Low-High", "Review High-Low"],
      selectedFilterOption: null,
      nearBy: false,
      latitude: 0,
      longitude: 0,
      mak: [],
      di: [],
      travelMode:["Walking","Driving"],
      selectedTravelOption: "Walking",
      selectedTravelMode:"",
    };
  },
  created() {
    this.fetchCafeData();
  },

  methods: {
    async fetchCafeData() {
      await CafeStore.dispatch("fetchCafe");
      this.cafe = await CafeStore.getters.cafe;
      for (let i = 0; i < this.cafe.length; i++) {
        this.cafe[i].c_service = await this.cafe[i].c_service.split(",");
      }
    },
    selectTravelOption(option){
      this.selectedTravelOption = option
    },
    selectStarOption(option) {
      this.currentPage = 1;
      this.selectedStarOption = option;
    },
    selectFilterOption(option) {
      this.selectedFilterOption = option;
    },
    filteredList() {
      return this.displayedCafes;
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
    currentPage1() {
      this.currentPage = 1;
    },
    clear() {
      this.$router.go(0);
    },
    detailBTN(id) {
      this.$router
        .push({ path: "/detail/" + id, params: { id: id } })
        .then(() => {
          window.scrollTo(0, 0);
        });
    },
    showMarkers(place) {
      /* eslint-disable */
      const loader = new Loader({
        apiKey: "AIzaSyDdH-qwXfC5ZffV2-zVPLN38H4hsoLZcwE",
        version: "weekly",
        libraries: ["places"],
      });
      loader.load().then(() => {
        let status = true;
        for (let i = 0; i < this.mak.length; i++) {
          if (this.mak[i].getTitle() === place.c_name) {
            status = false;
            this.mak[i].setVisible(false);
            this.di[i].setMap(null);
            // Remove this.mak[i] from the array
            this.mak.splice(i, 1);
            this.di.splice(i, 1);
            this.distance.splice(i, 1);
            //console.log(this.mak)
            // Decrement the index so that the next iteration checks the correct element
            i--;
          }
        }
        if (status) {
          const newMarkers = [];
          const bounds = new google.maps.LatLngBounds();

          const marker = new google.maps.Marker({
            position: {
              lat: parseFloat(place.c_lat),
              lng: parseFloat(place.c_lon),
            },
            map: this.map,
            title: place.c_name,
          });
          newMarkers.push(marker);
          bounds.extend(marker.getPosition());
          this.mak.push(marker);

          this.map.setZoom(17);
          this.map.setCenter({
            lat: parseFloat(place.c_lat),
            lng: parseFloat(place.c_lon),
          });

          // Get user's current location
          navigator.geolocation.getCurrentPosition((position) => {
            const userLatLng = {
              // lat: position.coords.latitude,
              // lng: position.coords.longitude,
              lat: parseFloat(13.845931502442474),
              lng: parseFloat(100.57119222183442),
            };

            // Create marker for user's location
            const userMarker = new google.maps.Marker({
              position: userLatLng,
              map: this.map,
              title: "Your Location",
            });

            //Create direction service and renderer
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer({
              map: this.map,
              suppressMarkers: true,
            });

            if(this.selectedTravelOption === "Walking"){
              this.selectedTravelMode = google.maps.TravelMode.WALKING
            }else if(this.selectedTravelOption === "Driving"){
              this.selectedTravelMode = google.maps.TravelMode.DRIVING
            }
            // Set direction request options
            const request = {
              origin: userLatLng,
              destination: {
                lat: parseFloat(place.c_lat),
                lng: parseFloat(place.c_lon),
              },
              travelMode: this.selectedTravelMode
            };

            // Calculate direction and display on map
            directionsService.route(request, (result, status) => {
              if (status == google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);
                this.di.push(directionsRenderer);
                // Calculate and display distance
                const distance = result.routes[0].legs[0].distance.value / 1000;
                const distanceText = 
                  this.selectedTravelOption + " to " + place.c_name + " " + distance.toFixed(2) + " km";

                if (!this.distance.includes(distanceText)) {
                  this.distance.push(distanceText);
                }
              }
            });
          });
        }
      });
    },
    calDistance(u_lat, u_lng, c_lat, c_lng) {
      let lat1 = u_lat;
      let lon1 = u_lng;
      let lat2 = c_lat;
      let lon2 = c_lng;
      lon1 = (lon1 * Math.PI) / 180;
      lon2 = (lon2 * Math.PI) / 180;
      lat1 = (lat1 * Math.PI) / 180;
      lat2 = (lat2 * Math.PI) / 180;

      let dlon = lon2 - lon1;
      let dlat = lat2 - lat1;
      let a =
        Math.pow(Math.sin(dlat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

      let c = 2 * Math.asin(Math.sqrt(a));
      let r = 6371;
      return c * r;
    },
    mysqlDatetimeToDate(mysqlDatetime) {
      return new Date(mysqlDatetime.replace(/T/, " ").replace(/Z/, ""));
    },
    async getCurrentLocation() {
      if (this.nearBy == true) {
        const success = (position) => {
          //console.log(position.coords)
          // this.latitude = position.coords.latitude
          // this.longitude = position.coords.longitude
          this.latitude = parseFloat(13.845931502442474);
          this.longitude = parseFloat(100.57119222183442);
        };
        const error = () => {
          console.log("Unable to retrieve your location");
        };
        await navigator.geolocation.getCurrentPosition(success, error);
      } else {
        this.latitude = 0;
        this.longitude = 0;
        //this.clear();
      }
    },
  },

  mounted() {
    /* eslint-disable */
    const loader = new Loader({
      apiKey: "AIzaSyDdH-qwXfC5ZffV2-zVPLN38H4hsoLZcwE",
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: {
          lat: parseFloat(13.847724843525326),
          lng: parseFloat(100.56959164631704),
        },
        zoom: 15,
      });
      navigator.geolocation.getCurrentPosition((position) => {
        const userLatLng = {
          // lat: position.coords.latitude,
          // lng: position.coords.longitude,
          lat: parseFloat(13.845931502442474),
          lng: parseFloat(100.57119222183442),
        };

        // Create marker for user's location
        const userMarker = new google.maps.Marker({
          position: userLatLng,
          map: this.map,
          title: "Your Location",
        });
      });
    });
  },
  computed: {
    displayedCafes() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.filtered_cafe = this.cafe;

      if (this.nearBy) {
        this.filtered_cafe = this.filtered_cafe
          .filter(
            (caf) =>
              this.calDistance(
                this.latitude,
                this.longitude,
                caf.c_lat,
                caf.c_lon
              ) < 0.4
          )
          .sort(
            (a, b) =>
              this.calDistance(
                this.latitude,
                this.longitude,
                a.c_lat,
                a.c_lon
              ) -
              this.calDistance(this.latitude, this.longitude, b.c_lat, b.c_lon)
          );

        // this.filtered_cafe.forEach(cafe => {
        //   this.showMarkers(cafe)
        // });
      }
      if (this.input) {
        this.filtered_cafe = this.filtered_cafe.filter((caf) =>
          caf.c_name.toLowerCase().includes(this.input.toLowerCase())
        );
      }
      if (this.service_selected.length > 0) {
        this.filtered_cafe = this.filtered_cafe.filter((obj) =>
          this.service_selected.every((f) => obj.c_service.includes(f))
        );
      }
      if (this.selectedStarOption != 0) {
        this.filtered_cafe = this.filtered_cafe.filter(
          (obj) => Math.floor(obj.c_star) == this.selectedStarOption
        );
      }
      // if(this.service_selected.length>0 && this.selectedStarOption!=0){
      //   this.filtered_cafe = this.cafe.filter(obj => this.service_selected.every(f => obj.c_service.includes(f)) && Math.floor(obj.c_star) == this.selectedStarOption)//this.cafe.filter(obj => obj.c_service.every(s => this.service_selected.includes(s))).slice(start, end)
      // }else if(this.service_selected.length>0){
      //   this.filtered_cafe = this.cafe.filter(obj => this.service_selected.every(f => obj.c_service.includes(f)))
      // }else if(this.selectedStarOption!=0){
      //   this.filtered_cafe = this.cafe.filter((obj) => Math.floor(obj.c_star) == this.selectedStarOption )
      // }
      // else if(this.input){
      //   this.filtered_cafe = this.cafe.filter((caf) =>
      //     caf.c_name.toLowerCase().includes(this.input.toLowerCase())
      //     );
      // }
      if (this.selectedFilterOption !== null) {
        if (this.selectedFilterOption == "New") {
          this.filtered_cafe = this.filtered_cafe.sort((a, b) => {
            const dateA = this.mysqlDatetimeToDate(a.created_at);
            const dateB = this.mysqlDatetimeToDate(b.created_at);
            return dateB - dateA;
          });
        } else if (this.selectedFilterOption == "Recommend") {
          this.filtered_cafe = this.filtered_cafe.sort((a, b) => {
            return b.c_star - a.c_star;
          });
        } else if (this.selectedFilterOption == "Review Low-High") {
          this.filtered_cafe = this.filtered_cafe.sort((a, b) => {
            return a.c_review - b.c_review;
          });
        } else if (this.selectedFilterOption == "Review High-Low") {
          this.filtered_cafe = this.filtered_cafe.sort((a, b) => {
            return b.c_review - a.c_review;
          });
        }
      }

      //this.calTotalPage(filtered_cafe)
      return this.filtered_cafe.slice(start, end);

      // let cafe_filter = cafe_name.filter(caf => caf.c_service.some(s => this.service_selected.includes(s)));
      // console.log(cafe_filter)
    },
    totalPages() {
      return this.filtered_cafe
        ? Math.ceil(this.filtered_cafe.length / this.pageSize)
        : 0;
    },
  },
};
</script>

<style scoped>
.scroll-top1 {
  position: sticky;
  left: 48px;
  width: 217px;
  top:20px;
  bottom: 10px;
  z-index: 99999;
  border-radius: 30px;
  transition: all 0.4s;
  margin-top: 50px;
  
}
.card:hover {
  transform: scale(0.95);
}
a {
  text-decoration: none;
  color: black;
}
#map {
  height: 500px;
  width: 100%;
  border: solid black 1px;
}
.bottomButton {
  position: absolute;
  bottom: 20px;
  right: 40%;
  justify-content: center;
  align-items: center;
}
.distance{
  margin: 10px;
  font-size: 18px;
  border: solid black 1px;
  padding: 4px;
  border-radius: 8px;
  display: inline-block;
  background-color: #e6c7ad;
}


</style>
