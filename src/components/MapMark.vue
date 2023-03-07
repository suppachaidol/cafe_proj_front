<template>
  <div>
    <section class="pt-5 pb-5 height: 100vh">
      <div class="container">
        <div class="row">
          <div class="col mt-5 pt-5">
            <div id="map"></div>
            <button @click="clear">Clear</button>
            <div v-for="dis in distance" :key="dis">
              {{ dis }}
            </div>
          </div>
          <div
            class="col justify-content-center align-items-center"
            style="text-align: center"
          >
            <h3 class="mb-5"><strong>Cafe</strong></h3>

            <div class="row">
              <div class="col-6" v-for="(place, index) in cafe" :key="index">
                <div class="container">
                  <div class="col mb-3">
                    <div class="card shadow-sm">
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
                          <button
                            @click="detailBTN(place.c_id)"
                            href="#"
                            class="btn btn-primary"
                            style="direction: rtl"
                          >
                            View
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
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
</style>

