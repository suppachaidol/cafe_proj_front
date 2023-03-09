<template>
  <div>
    <section class="pt-5 pb-5 height: 100vh">
      <div class="container mb-5">
        <nav class="navbar navbar-light bg-light rounded-4 border border-dark " style="background-color: #e3f2fd;">
          <div class="container-fluid mx-5">
            <form class="form-inline d-block w-25">
              <input
                class="input-search form-control form-control-lg"
                type="text"
                v-model="input"
                placeholder="Search"
              />
              <div class="item error" v-if="input && !filteredList().length">
                <p>No results found!</p>
              </div>
            </form>
            <section>
              <div class="row">
                <div class="col">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked>
                    <label class="form-check-label">Dine-in</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked>
                    <label class="form-check-label">Takeaway</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked>
                     <label class="form-check-label">Co-Working Space</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked>
                    <label class="form-check-label">Meeting</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked>
                    <label class="form-check-label">Toilets</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked>
                    <label class="form-check-label">Creative Space</label>
                  </div>
               
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked>
                    <label class="form-check-label">Screening Room</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked>
                    <label class="form-check-label">Karaoke</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked>
                    <label class="form-check-label">Good for Group</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked>
                    <label class="form-check-label">Pet Friendly</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked>
                    <label class="form-check-label">Art Gallery</label>
                  </div>
                </div>
              </div>
            </section>
            <div class="col-2">
              <div class="dropdown ">
                  <a class="btn btn-secondary dropdown-toggle w-100 text-white" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Fillter
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#">New</a></li>
                    <li><a class="dropdown-item" href="#">recommend</a></li>
                    <li><a class="dropdown-item" href="#">review Low-High</a></li>
                    <li><a class="dropdown-item" href="#">review High-Low</a></li>
                  </ul>
              </div>
            </div>
            <div class="dropdown" >
                  <button class="btn btn-secondary dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Star <i class="bi bi-star-fill"></i>
                  </button>
                  <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                    <li>
                      <a class="dropdown-item" >1<i class="bi bi-star-fill"></i></a>
                      <a class="dropdown-item" >2<i class="bi bi-star-fill"></i></a>
                      <a class="dropdown-item" >3<i class="bi bi-star-fill"></i></a>
                      <a class="dropdown-item" >4<i class="bi bi-star-fill"></i></a>
                      <a class="dropdown-item" >5<i class="bi bi-star-fill"></i></a>
                    </li>
                  </ul>

            </div>
            
          </div>
        </nav>
      </div>

      <div class="container">
        <div id="map"></div>
        <button @click="clear">Clear</button>
        <div v-for="dis in distance" :key="dis">
          {{ dis }}
        </div>
  
          <div
            class="col justify-content-center align-items-center"
            style="text-align: center"
          >
            <h3 class="mt-4 mb-5"><strong>Result Cafe</strong></h3>

            <div class="row">
              <div class="col-3" v-for="(place, index) in cafe" :key="index">
                <div class="container">
                  <div class="col mb-3">
                    <div class="card shadow-sm" style=" height: 350px;">
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
                          <p class="card-text">
                            <i
                              class="bi bi-star-fill"
                              style="color: #ff9529"
                            ></i>
                            {{ place.c_star.toFixed(1) }} ({{ place.c_review }}
                            reviews)
                          </p>
                          <div  class=" bottomButton">
                            <button
                              @click="detailBTN(place.c_id)"
                              href="#"
                              class="btn btn-primary "
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
            <div class="mb-2 mt-5" style="text-align:center" v-if="cafe.length>12">
              <button type="button" class="btn btn-dark" @click="previousPageDate">
                <i class="bi bi-caret-left-fill"></i>
              </button>
              <span class="mx-2">Page {{ currentPageCafe }} of {{ totalPagesCafe }}</span>
              <button type="button" class="btn btn-dark" @click="nextPageDate">
                <i class="bi bi-caret-right-fill"></i>
              </button>
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
      currentPageCafe: 1,
      pageSize: 12,
    };
  },
  created() {
    this.fetchCafeData();
  },

  methods: {
    async fetchCafeData() {
      await CafeStore.dispatch("fetchCafe");
      this.cafe = await CafeStore.getters.cafe;
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

        //this.markers.push(marker)

        // this.markers.forEach((mk) => {
           
        //   mk.setMap(null);
        // });
        
        // Update markers array with new markers
        //this.markers = newMarkers;

        this.map.setZoom(17);
        this.map.setCenter({
          lat: parseFloat(place.c_lat),
          lng: parseFloat(place.c_lon),
        });

        // Get user's current location
        navigator.geolocation.getCurrentPosition((position) => {
          const userLatLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // Create marker for user's location
          const userMarker = new google.maps.Marker({
            position: userLatLng,
            map: this.map,
            title: "Your Location",
          });

          // Create direction service and renderer
          const directionsService = new google.maps.DirectionsService();
          const directionsRenderer = new google.maps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true,
          });

          // Set direction request options
          const request = {
            origin: userLatLng,
            destination: {
              lat: parseFloat(place.c_lat),
              lng: parseFloat(place.c_lon),
            },
            travelMode: google.maps.TravelMode.DRIVING,
          };

          // Calculate direction and display on map
          directionsService.route(request, (result, status) => {
            if (status == google.maps.DirectionsStatus.OK) {
              directionsRenderer.setDirections(result);

              // Calculate and display distance
              const distance = result.routes[0].legs[0].distance.value / 1000;
              const distanceText =
                place.c_name + " " + distance.toFixed(2) + " km";

              if (!this.distance.includes(distanceText)) {
                this.distance.push(distanceText);
              }
              // const distanceElement = document.createElement("div");
              // distanceElement.innerText = distanceText;
              // marker.setLabel(distanceElement);
            }
          });
        });
      });
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
          lat: position.coords.latitude,
          lng: position.coords.longitude,
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
      const start = (this.currentPageDate - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.cafe_date ? this.cafe.slice(start, end) : [];
    },
    totalPagesCafe() {
      return this.cafe_date
        ? Math.ceil(this.cafe.length / this.pageSize)
        : 0;
    },
  },
};
</script>

<style scoped>
.card:hover{
  transform: scale(0.95);
}
a{
  text-decoration: none;
  color: black;
}
#map {
  height: 500px;
  width: 100%;
}
.bottomButton {
  position: absolute;
  bottom: 20px;
  right: 40%;
  justify-content: center;
  align-items: center;
}
</style>

