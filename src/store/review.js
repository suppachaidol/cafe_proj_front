import Vuex from 'vuex'
import Axios from "axios"
import AuthUser from "@/store/AuthUser"

const api_endpoint = process.env.VUE_APP_ENDPOINT || "http://localhost:5000";
Axios.defaults.headers.common = { 'Authorization': `bearer ${AuthUser.getters.jwt}` };


export default new Vuex.Store({
    state: {
        review: [],
    },
    getters: {
        review: (state) => state.review,
    },
    mutations: {
        fetch(state, { res }) {
            state.review = res.data
        },
        add(state, { payload }) {
            state.review.push(payload)
        },
    },
    actions: {  
        async fetchReviewByCafeId({ commit }, id) {
            let res = await Axios.get(api_endpoint + '/api/review/cafe/' + id)
            commit('fetch', { res })
        },
        async addReview({ commit }, payload) {
            try{
                let url = api_endpoint + '/api/review/create'
                let body = {
                    u_id: payload.u_id,
                    c_id: payload.c_id,
                    r_comment: payload.r_comment,
                    r_star: payload.r_star,
                }
                
                let res = await Axios.post(url, body)
                if (res.status === 200 || res.status === 201) {
                    return {
                        success: true,                     
                    }
                } else {
                    console.log("NOT 200", res)
                }
            }catch(e){
                if (e.response.status === 400) {
                    console.log(e)
                    console.log("ERROR  " + e.response.status + " |   " + e.response.statusText)
                    return {
                        success: false,
                        message: e.response.data.error,
                    }
                } else {
                    console.error(e)
                    console.log("ERROR  " + e.response.status + " |   " + e.response.statusText)
                    return {
                        success: false,
                        message: e.response.data,
                    }
                }
            }
        },
        
    },
    modules: {}
})