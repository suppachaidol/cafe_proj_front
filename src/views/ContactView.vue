<template>
    <div class="bg-secondary  height: 100hv">
        <div class="bg-image " 
        style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqBFAvlcnBTyqZdg8ClpCTnU3G_fTAOlm5aA&usqp=CAU')">
            <div class="mask " style="background-color: rgba(0, 0, 0, 0.6);">
                <section class="pt-5  align-items-center d-flex text-light ">
                    <div class="container ">
                        <h1 class="text-center  pt-5" style="font-family:Cursive ">We Are Here For You.</h1>
                        <p class="text-center pb-5 ">We can help. Our team of experts is on hand to answer your questions.</p>
                    </div>
                </section>
            </div>
        </div>
        <div class="p-3 text-dark vh-100" style = "background-color:#b49c74">
            <section class="pt-5  align-items-center d-flex  ">
            <div class="container ">
                <div class="row ">
                    <div class="col-12 col-md-6 col-lg-5">
                    <h2 class=" text-center ">Contact Us</h2>
                    <p class=" "></p>
                    <p class=" ">Should you have any enquiry or suggestion regarding our services please contact us. Please fill out the contact form and we will respond as soon as possible.</p>
                    <p class=" mt-5">
                        <strong><i class="bi bi-send"></i> Email : </strong>
                        <a href="#" style="color:black">cafehopper.ku@gmail.com</a>
                    </p>
                    <p class=" ">
                        <strong><i class="bi bi-telephone-fill"></i> Phone : </strong>
                        <a href="#" style="color:black">+66 123456789</a>
                    </p>
                    <div align = 'right'><strong>Thank you</strong></div>
                    <div align = 'right'>Puri Pitoonjaroenlap</div>
                    <div align = 'right'>Suppachai Glubpean</div>
                </div>
            <div class="col-12 col-md-6 ms-auto pt-5 pt-md-0">
                <form>
                    <div class="row">
                    <div class="col">
                        <input type="text" class="form-control"
                        placeholder="First name" v-model="state.firstname">
                        
                    </div>
                    <div class="col">
                        <input type="text" class="form-control"
                        placeholder="Last name" v-model="state.lastname">
                    </div>
                    </div>
                    <div class="row mt-4">
                    <div class="col">
                        <input type="email" class="form-control"
                        placeholder="Enter email" v-model="state.email">
                    </div>
                    </div>
                    <div class="row mt-4">
                    <div class="col">
                        <input type="text" class="form-control"
                        placeholder="Subject" v-model="state.subject">
                    </div>
                    </div>
                    <div class="row mt-4">
                    <div class="col">
                        <textarea class="form-control border border-secondary"
                        name="message" rows="3" placeholder="How can we help?"
                        style="" spellcheck="false" v-model="state.detail"></textarea>
                    </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col">
                            <button type="button" class="btn btn-primary" @click="sendContact">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
            </div>
            </section>
        </div>
    </div>
</template>

<script>
import CafeStore from "@/store/cafe";
import AuthUser from '@/store/AuthUser';
import Swal from "sweetalert2";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
    setup() {
    const state = reactive({
        firstname:"",
        lastname:"",
        email:"",
        subject:"",
        detail:"",
        u_id: AuthUser.getters.user.u_id,
        u_username: AuthUser.getters.user.u_username,
    });   
    const rules = computed(() => {
      return {
        firstname:{required},
        lastname:{required},
        email:{required, email},
        subject:{required},
        detail:{required},
      };
    });
    const v$ = useValidate(rules, state);

    return {
      state,
      v$,
    };
  },
  methods:{
    async sendContact(){
        this.v$.$validate();
        if (this.v$.$error) {
        Swal.fire({
          icon: "error",
          text: "Please fill out correct information.",
          confirmButtonColor: "#dd6b55",
        });
      } else {
          let payload = {
              firstname:this.state.firstname,
              lastname:this.state.lastname,
              email:this.state.email,
              subject:this.state.subject,
              detail:this.state.detail,
              u_id: this.state.u_id,
              u_username: this.state.u_username
          }
          let res = await CafeStore.dispatch("contact",payload);
          if(res.success){
            await Swal.fire({
            icon: "success",
            title: "Send success",
            text: "Thank you for contacting us.",
            showConfirmButton: false,
            timer: 1500,
            });
            this.$router.go(0)
          }else{
            Swal.fire({
            icon: "error",
            text: "Send failed",
            confirmButtonColor: "#dd6b55",
          });
          }
      }
    },
  },
}
</script>

<style>

</style>