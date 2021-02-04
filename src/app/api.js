import axios from "axios";
import config from "../etc/config";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
let {
    apiPrefix
} = config;
console.log(apiPrefix)
export function postLogin(data) { 
        return axios({
            url: `/api-token-auth/`,
            method: "post",
            data: data,
            //headers: {"Access-Control-Allow-Origin": "*"}
        })
}
export function verifyToken(data, token) { 
    return axios({
        url: `/api-token-verify/`,
        method: "post",
        data: data,
        //headers: {"Access-Control-Allow-Origin": "*"}
    })
}