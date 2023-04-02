<template>
<section class="pt-5 pb-5 height: 100vh" style="background-color:#f2eddd">  
    <div class="p-3 mb-2 ">
        <section class="  align-items-center d-flex  ">
            <div class="container ">
                <div class="row ">
                    <div class="col "> 
                        <h3 class="mb-5" style="text-align: center"><strong>Profile</strong></h3>
                        <div class=" justify-content-center align-items-center" style="text-align: center">
                            <img
                                :src="`http://localhost:5000/api/images/profile/${user.u_image}`"
                                class="img-fluid mx-2 shadow-lg"
                                alt="..."
                                style="height : 20rem; border-radius:50%; width:50%"
                                />
                            <h3 class="mt-4"><strong style="text-align: center">{{user.u_username}}</strong></h3>
                        </div> 
                
                        <div class="container py-5 ">
                        <div class="col-10 d-md-block mx-5" style="font-size:1.3rem">
                            <div class ="row pb-2">
                                <div class="col" align = 'right'><strong>Name : </strong></div>
                                <div class="col">{{user.u_name}}</div>
                                
                            </div>
                            <div class ="row pb-2">
                                <div class="col" align = 'right' ><strong>Email : </strong></div>
                                <div class="col">{{user.u_email}}</div>
                            </div>
                            <div class ="row pb-2">
                                <div class="col" align = 'right'><strong>Phone : </strong></div>
                                <div class="col">{{user.u_phone}}</div>
                            </div>
                            <div class ="row pb-2">
                                <div class="col" align = 'right'><strong>Role : </strong></div>
                                <div class="col">{{user.u_role}}</div>
                            </div> 
                                    
                        </div>
                        </div>
                    </div> 
                    <div class="col justify-content-center align-items-center" style="text-align: center">
                        <h3 class="mb-5"><strong>Your list</strong></h3>
                        <div v-if="!fav_cafe.length" style="text-align:center;margin-top:200px">
                            <h3>There is no favorite cafe.</h3>
                        </div> 
                        <div class="scrollable" v-scroll="onScroll" v-else>
                            <div class="row"  style=" width: 100% ">
                                
                                <div class="col-6" v-for="(fav, index) in fav_cafe" :key="index">
                                    <div class="container">
                                        <div class="col mb-3">
                                            <div class="card shadow-sm" style="height: 20em;">
                                                <div class="moreCafe card-body">
                                                    <img
                                                    width="100%"
                                                    height="150"
                                                    class="bd-placeholder-img card-img-top"
                                                    :src="`http://localhost:5000/api/images/cafe/${fav.c_image}`"
                                                    alt=""
                                                    />
                                                    <h5 class="card-title mt-2">{{fav.c_name}}</h5>
                                                    <p class="card-text" v-if="fav.c_star>0"><i class="bi bi-star-fill" style="color: #ff9529"></i> {{fav.c_star.toFixed(1)}} ({{fav.c_review}} reviews)</p>
                                                    <p class="card-text" v-else><i class="bi bi-star-fill" style="color: #ff9529"></i> - ({{fav.c_review}} reviews)</p>
                                                    <button @click="detailBTN(fav.c_id)" href="#" class="btn btn-primary" style="direction: rtl"
                                                    >View</button
                                                    >
                                                </div> 
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
  </section> 
</template>

<script>
import AuthUser from "@/store/AuthUser";
import UserCafeStore from "@/store/user_cafe";

export default {
    data(){
        return{
            user: AuthUser.getters.user,
            fav_cafe: [],
        }
    },
    created(){
        this.fetchFavoriteCafe()
    },
    methods: {
       async fetchFavoriteCafe(){
        await UserCafeStore.dispatch("fetchFavoriteCafe", this.user.u_id);
        this.fav_cafe = await UserCafeStore.getters.favorite_cafe
       },
       detailBTN(id){
        this.$router.push({ path: "/detail/" + id, params: { id: id } }).then(() => {
        window.scrollTo(0, 0)}); 
        },
        onScroll() {
            const content = this.$el.querySelector('.content')
            if (content.scrollTop + content.clientHeight >= content.scrollHeight) {
                // User has reached the bottom of the scrollable area
                this.page++
                // Fetch more data from the API
                this.fetchItems()
            }
        },
        fetchItems() {
        // Fetch more items from the API and add them to the items array
        }
    },
} 
</script>

<style>
.scrollable {
  height: 800px;
  overflow-y: scroll;
}
</style>