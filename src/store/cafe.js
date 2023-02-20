import Vuex from 'vuex'
import Axios from "axios"
import AuthUser from "@/store/AuthUser"

const api_endpoint = process.env.VUE_APP_ENDPOINT || "http://localhost:5000";
Axios.defaults.headers.common = { 'Authorization': `bearer ${AuthUser.getters.jwt}` };


export default new Vuex.Store({
    state: {
        cafe: [],
        images:[],
        times:[],
    },
    getters: {
        cafe: (state) => state.cafe,
        images: (state) => state.images,
        times: (state) => state.times,
    },
    mutations: {
        fetch(state, { res }) {
            state.cafe = res.data
        },
        fetchImage(state, { res }) {
            state.images = res.data
        },
        fetchTime(state, { res }) {
            state.times = res.data
        },
        add(state, { payload }) {
            state.cafe.push(payload)
        },
    },
    actions: {
        async fetchCafe({ commit }) {
            let res = await Axios.get(api_endpoint + '/api/cafe')
            commit('fetch', { res })
        },
        async fetchCafeByDate({ commit }) {
            let res = await Axios.get(api_endpoint + '/api/cafe_date')
            commit('fetch', { res })
        },
        async fetchCafeById({ commit }, id) {
            let res = await Axios.get(api_endpoint + '/api/cafe/' + id)
            commit('fetch', { res })
        },
        async fetchCafeImageById({commit},id){
            let res = await Axios.get(api_endpoint + '/api/cafe_image/' + id)
            commit('fetchImage', { res })
        },
        async fetchCafeTime({commit},id){
            let res = await Axios.get(api_endpoint + '/api/cafe_time/' + id)
            commit('fetchTime', { res })
        },
        async addTime({ commit }, payload) {
            try{
                let url = api_endpoint + '/api/cafe_time/create'
                let body = {
                    c_id: payload.c_id,
                    monday: payload.monday,
                    tuesday: payload.tuesday,
                    wednesday: payload.wednesday,
                    thursday: payload.thursday,
                    friday: payload.friday,
                    saturday: payload.saturday,
                    sunday:payload.sunday
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
        async addCafe({ commit }, payload) {
            let c_latlon = payload.c_latlon.split(", ")
            let c_lat = c_latlon[0]
            let c_lon = c_latlon[1]
            try{
                let url = api_endpoint + '/api/cafe/create'
                let body = {
                    c_name: payload.c_name,
                    c_location: payload.c_location,
                    c_detail: payload.c_detail,
                    c_service: payload.c_service,
                    c_status: payload.c_status,
                    c_lat: c_lat,
                    c_lon: c_lon,
                    c_map:payload.c_map
                }
                
                let res = await Axios.post(url, body)
                if (res.status === 200 || res.status === 201) {
                    return {
                        success: true,
                        c_id: res.data.cafe_id,                     
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
        async updateStar({ commit }, payload){
            try{
                let url = api_endpoint + '/api/cafe/update_star'
                let body = {
                    oldStar: payload.oldStar,
                    newStar: payload.newStar,
                    numReview: payload.numReview,
                    c_id: payload.c_id
                }
                
                let res = await Axios.put(url, body)
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
        }
    },
    modules: {}
})