<template>
<section class="pt-5 pb-5 height: 100vh">         
    <div class="p-3 mb-2 ">
        <section class="  align-items-center d-flex  ">
            <div class="container ">
                <div class="row ">
                    <div class="col "> 
                        <h3 class="mb-5" style="text-align: center"><strong>Profile</strong></h3>
                        <div class=" justify-content-center align-items-center" style="text-align: center">
                            <img
                                :src="`http://localhost:5000/api/images/profile/${user.u_image}`"
                                class="img-fluid mx-2"
                                alt="..."
                                style="height : 20rem; border-radius:50%"
                                />
                            <h3 class="mt-3"><strong style="text-align: center">{{user.u_username}}</strong></h3>
                        </div> 
                
                        <div class="container py-5 ">
                        <div class="col-10 d-md-block mx-5">
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

                        <div class="scroll-container">
                            <div class="row">
                                <div class="col-6" v-for="(fav, index) in fav_cafe" :key="index">
                                    <div class="container">
                                        <div class="col mb-3">
                                            <div class="card shadow-sm">
                                                <div class="moreCafe card-body">
                                                    <img
                                                    width="100%"
                                                    height="150"
                                                    class="bd-placeholder-img card-img-top"
                                                    :src="`http://localhost:5000/api/images/cafe/${fav.c_image}`"
                                                    alt=""
                                                    />
                                                    <h5 class="card-title mt-2">{{fav.c_name}}</h5>
                                                    <p class="card-text"><i class="bi bi-star-fill" style="color: #ff9529"></i> {{fav.c_star.toFixed(1)}} ({{fav.c_review}} reviews)</p>
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
    },
} 
</script>

<style>
.scroll-container {
  overflow-y: scroll;
  overflow-x: none;
  height: 800px;
}
</style>