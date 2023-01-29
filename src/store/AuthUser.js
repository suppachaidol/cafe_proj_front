//import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from '../services/AuthService'


//Vue.use(Vuex)

let auth_key = 'Cafe-Login'
let auth = JSON.parse(localStorage.getItem(auth_key))

const initialState = {
    user: auth ? auth.user : "",
    jwt: auth ? auth.access_token : "",
    isAuthen: auth ? true : false
}

export default new Vuex.Store({
    state: initialState,
    mutations: {
        loginSuccess(state, res) {
            state.user = res.user
            state.jwt = res.jwt
            state.isAuthen = true
        },
        logoutSuccess(state) {
            state.user = ""
            state.jwt = ""
            state.isAuthen = false
        }
    },
    actions: {
        async login({ commit }, { u_username, u_password }) {
            let res = await AuthService.login({ u_username, u_password })
            if (res.success) {
                let res_auth = {
                    user: res.user,
                    jwt: res.jwt
                }
                commit('loginSuccess', res_auth)
            }
            return res
        },
        async logout({ commit }) {
            AuthService.logout()
            commit('logoutSuccess')
        },
        async register({ commit }, { u_name,u_username,u_password,password_confirmation,u_email,u_phone }) {
            let res = await AuthService.register({ u_name,u_username,u_password,password_confirmation,u_email,u_phone })
            if (res.success) {
                let res_auth = {
                    user: res.user,
                    jwt: res.jwt
                }
                commit('loginSuccess', res_auth)
            }
            return res
        },
    },
    getters: {
        user: (state) => state.user,
        jwt: (state) => state.jwt,
        isAuthen: (state) => state.isAuthen
    },
    modules: {
    }
})
