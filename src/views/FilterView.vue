<template>
    <h2>Filter</h2>
    <div>
    <!-- <ul>
      <li v-for="cafe in filteredCafe" :key="cafe.c_id">{{ cafe.c_name }}</li>
    </ul> -->
    </div>
</template>

<script>
import CafeStore from "@/store/cafe";

export default {
  data(){
    return{
      cafe:[],
      cafe_filtered:[],
      name:null,
      latitude:0,
      longitude:0,
      star:null,
      service:null,
    }
  },
  created(){
    this.name = this.$route.query.name
    this.latitude = this.$route.query.latitude
    this.longitude = this.$route.query.longitude
    this.star = this.$route.query.star
    this.service = this.$route.query.service
    this.fetchCafeData()
  },
  methods:{
    async fetchCafeData() {
      await CafeStore.dispatch("fetchCafe");
      this.cafe = await CafeStore.getters.cafe;
      if(this.name != null){
        this.cafe_filtered = await this.cafe.filter(caf => {
        return caf.c_name.toLowerCase().includes(this.name.toLowerCase()) 
        })
      }else if(this.star !=0 && this.service != null){
        this.cafe_filtered = await this.cafe.filter(caf => {
        return Math.floor(caf.c_star) == this.star && caf.c_service.includes(this.service)
        })
      }else{
        this.cafe_filtered = await this.cafe.filter(caf => {
        return Math.floor(caf.c_star) == this.star || caf.c_service.includes(this.service)
        })
      }
      if(this.latitude != 0 && this.star !=0 || this.service != null){
        //filter distance
        this.cafe_filtered = await this.cafe_filtered.filter(caf => {
        return this.calDistance(this.latitude,this.longitude,caf.c_lat,caf.c_lon) < 10
        })
      }else if(this.latitude != 0 && this.star == 0 && this.service == null){
        this.cafe_filtered = await this.cafe.filter(caf => {
        return this.calDistance(this.latitude,this.longitude,caf.c_lat,caf.c_lon) < 2
        })
      }
      console.log(this.cafe_filtered )
    },
    calDistance(u_lat,u_lng,c_lat,c_lng){
      let lat1 = u_lat;
      let lon1 = u_lng;
      let lat2 = c_lat;
      let lon2 = c_lng;
      lon1 =  lon1 * Math.PI / 180;
      lon2 = lon2 * Math.PI / 180;
      lat1 = lat1 * Math.PI / 180;
      lat2 = lat2 * Math.PI / 180;

      let dlon = lon2 - lon1;
      let dlat = lat2 - lat1;
      let a = Math.pow(Math.sin(dlat / 2), 2)
              + Math.cos(lat1) * Math.cos(lat2)
              * Math.pow(Math.sin(dlon / 2),2);
    
      let c = 2 * Math.asin(Math.sqrt(a));
      let r = 6371;
      return(c * r);
    }   
  },
  
}

</script>
