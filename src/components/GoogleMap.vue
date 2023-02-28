<template>
  <div>
    <div ref="map" style="width: 600px;height: 450px;"></div>
  </div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader';

export default {
    props: {
    destLat: {
      type: Number, 
      required: true 
    },
    destLng: {
      type: Number, 
      required: true 
    },
  },
  data() {
    return {
      map: null,
      directionsService: null,
      userLat: null,
      userLng: null,
    };
  },

  mounted() {
    const loader = new Loader({
      apiKey: '',
      version: 'weekly',
      libraries: ['directions'],
    });
    
    loader.load().then(() => {
        /* eslint-disable */
      this.directionsService = new google.maps.DirectionsService();
      
      // Call a function to get the user's current location and then set the map center to it.
      this.getUserLocation((lat, lng) => {
        this.userLat = lat;
        this.userLng = lng;
        this.map = new google.maps.Map(this.$refs.map, {
          center: new google.maps.LatLng(lat, lng),
          zoom: 10,
        });

        this.calculateRoute(this.destLat, this.destLng);
      });
    });
  },

  methods: {
    getUserLocation(callback) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          callback(position.coords.latitude, position.coords.longitude);
        });
      }
    },
    
    calculateRoute(destLat, destLng) {
        
      this.directionsService.route(
        
        {
          origin: new google.maps.LatLng(this.userLat, this.userLng),
          destination: new google.maps.LatLng(destLat, destLng),
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === 'OK') {
            const directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(this.map);
            directionsRenderer.setDirections(response);
          } else {
            console.log('Directions request failed due to ' + status);
          }
        }
      );
    },
  },
};
</script>
