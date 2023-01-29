<template>
  <div>
    <Upperbar />
    <router-view />
  </div>
</template>

<script>
import Upperbar from '@/components/Upperbar.vue';
export default {
  components: {
    Upperbar,
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  }
}

</script>

<style>
  
</style>
