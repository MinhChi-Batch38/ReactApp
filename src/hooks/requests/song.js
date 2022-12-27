import axios from 'axios'
const API_URL = "http://localhost:8080"



async function httpGetAllSongs(kw, page, size) {
    const res = await axios.get(`${API_URL}/songs/get-songs/`, {params: {
        keywords: kw,
        page: page,
        size: size,
    }})
    .catch (function (error) {
        console.log(error);
    })
    return await res.data;
}

async function httpCountSongs() {
    const res = await axios.get(`${API_URL}/songs/count-songs`)
    .catch (function (error) {
        console.log(error);
    })
    return await res.data;
}

async function httpUpload(audio) {
    console.log(audio)
    const formData = new FormData()
    formData.append('file', audio)
    const res = await axios.post(`${API_URL}/upload`, formData)
    .catch(err=>{
        console.log(err)
    });
    return await res.data
}

async function httpAddSong(song) {
    try {
        const res = await axios.post(`${API_URL}/songs/add-song `, song)
        return await res.data
    }catch (err) {
        console.log(err)
        return "404"
    } 
}

async function httpEditSong(song) {
    try {
        const res = await axios.put(`${API_URL}/songs/edit-song `, song)
        return await res.data
    }catch (err) {
        console.log(err)
        return "404"
    } 
}

async function httpDeleteSongs(songs) {
    const ids = []
    songs.map(song => {
        ids.push(song.id)
        return
    })
    console.log(ids)
    try {
        const res = await axios.delete(`${API_URL}/songs/delete-songs/${ids}`)
        return await res.data
    } catch (err) {
        console.log(err)
        return "404"
    } 
}


async function httpSearchSong(kw, pageNumber, pageSize) {
    try {
        const res = await axios.post(`${API_URL}/songs/search/`, {params: {
            keywords: kw,
            page: pageNumber,
            size: pageSize,
        }})
        return await res.data
    }catch (err) {
        console.log(err)
        return "404"
    } 
}


export {
    httpGetAllSongs,
    httpCountSongs,
    httpAddSong,
    httpEditSong,
    httpUpload,
    httpDeleteSongs,
    httpSearchSong,
 };