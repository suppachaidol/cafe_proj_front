import Axios from "axios"

const auth_key = "Cafe-Login"
let auth = JSON.parse(localStorage.getItem(auth_key))
const user = auth ? auth.user : ""
const jwt = auth ? auth.access_token : ""

const api_endpoint = "http://localhost:5000"

export default {
    isAuthen() {
        return (user !== "") && (jwt !== "")
    },
    getUser() {
        return user
    },
    getJwt() {
        return jwt
    },
    getApiHeader(){
        if (this.jwt !== "" && this.jwt !== undefined)
        {
            return {
                headers: {
                    Authorization: `Bearer ${this.jwt}`
                }
            }
        }
        else
        {
            this.jwt = JSON.parse(localStorage.getItem(auth_key)).access_token
            return {
                headers: {
                    Authorization: `Bearer ${this.jwt}`
                }
            }
        }
    },

    async login({ u_username, u_password }) {
        try {
            let url = api_endpoint + "/api/login"
            let body = {
                u_username: u_username,
                u_password: u_password
            }
            let res = await Axios.post(url, body)
            if (res.status === 200) {
                // console.log(res.data)
                localStorage.setItem(auth_key, JSON.stringify(res.data))
                return {
                    success: true,
                    user: res.data.user,
                    jwt: res.data.access_token
                }
            } else {
                console.log("NOT 200", res)
            }
        } catch (e) {
            if (e.response.status === 400) {
                console.error(e)
                console.log("ERROR  " + e.response.status + " |   " + e.response.statusText)
                //console.log(e.response.data.error)
                return {
                    success: false,
                    message: e.response.data.error,
                }
            } else {
                //422,401 ?
                console.error(e)
                console.log("ERROR " + e.response.status + " | " + e.response.data.error)
                return {
                    success: false,
                    message: e.response.data.error,
                }
            }
        }
    },
    logout() {
        localStorage.removeItem(auth_key)
    },

    async register({ u_name,u_username,u_password,password_confirmation,u_email,u_phone }) {
        try {
            let url = api_endpoint + "/api/register"
            let body = {
                u_name: u_name,
                u_username: u_username,
                u_password: u_password,
                password_confirmation: password_confirmation,
                u_email: u_email,
                u_phone: u_phone,
            }
            let res = await Axios.post(url, body)
            if (res.status === 200 || res.status === 201) {
                localStorage.setItem(auth_key, JSON.stringify(res.data))
                return {
                    success: true,
                    u_id: res.data.u_id,
                    user: res.data.user,
                    jwt: res.data.access_token
                }
            } else {
                console.log("NOT 200", res)
            }
        } catch (e) {
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
}