import axios from 'axios'
const API_URL = "http://localhost:8080"
async function httpGetAllSongs() {
    const res = await axios.get(`${API_URL}/songs/get-all`)
    .catch (function (error) {
        console.log(error);
    })
    
    return await res.data;
}

export {
   httpGetAllSongs,
};