//import axios from "axios";

import axios from "axios";

const API_URL = "http://localhost:8080"
async function httpGetUsers() {
    //return axios(`${API_URL}/users/get-users`);
    return await (await fetch(`${API_URL}/users/get-users`)).json();
}

async function httpGetUserByUsernameAndPassword(user) {
    // const res = await fetch({
    //     method: "post",
    //     url:`${API_URL}/users/login`,
    //     data: 
    //     {
    //         username: user.username,
    //         password: user.password
    //     }
    // })
    // console.log(res);
    // return await res.json();
    const res = await axios.post(`${API_URL}/users/login`, {
        username: user.username,
        password: user.password
    }).catch(function (error) {
        console.log(error);
    });
    return await res.data;
}

export {
    httpGetUsers,
    httpGetUserByUsernameAndPassword
};