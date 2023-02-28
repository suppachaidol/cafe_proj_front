import Vuex from 'vuex'
import Axios from "axios"
import AuthUser from "@/store/AuthUser"

const api_endpoint = process.env.VUE_APP_ENDPOINT || "http://localhost:5000";
Axios.defaults.headers.common = { 'Authorization': `bearer ${AuthUser.getters.jwt}` };


export default new Vuex.Store({
    state: {
        user_cafe: [],
        favorite_cafe:[],
    },
    getters: {
        user_cafe: (state) => state.user_cafe,
        favorite_cafe: (state) => state.favorite_cafe,
    },
    mutations: {
        fetch(state, { res }) {
            state.user_cafe = res.data
        },
        fetchFavoriteCafe(state, { res }) {
            state.favorite_cafe = res.data
        },
        add(state, { payload }) {
            state.user_cafe.push(payload)
        },
        remove(state, { payload }) {
            state.user_cafe.pop(payload)
        },
    },
    actions: {
        async fetchUserCafe({ commit }, payload) {
            try{
                let url = api_endpoint + '/api/user_cafe/uc'
                let body = {
                    u_id: payload.u_id,
                    c_id: payload.c_id,
                }
                
                let res = await Axios.post(url, body)
                if (res.status === 200 || res.status === 201) {
                    commit('fetch', { res })
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
        async fetchFavoriteCafe({ commit }, id) {
            try{
                let url = api_endpoint + '/api/user_cafe/u/' + id
            
                let res = await Axios.get(url)
                if (res.status === 200 || res.status === 201) {
                    commit('fetchFavoriteCafe', { res })
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
        async addUserCafe({ commit }, payload) {
            try{
                let url = api_endpoint + '/api/user_cafe/create'
                let body = {
                    u_id: payload.u_id,
                    c_id: payload.c_id,
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
        async removeUserCafe({ commit }, id) {
            try{
                let url = api_endpoint + '/api/user_cafe/delete/'+id
                   
                let res = await Axios.delete(url)
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