

const API_URL = "http://localhost:8080"
async function httpGetUsers() {
    const res = await fetch(`${API_URL}/users/get-users`);
    return await res.json();
}

export {
    httpGetUsers,
};