import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

const getToken = () => localStorage.getItem("token");

export const ApiService = {
    async register(data) {
        const res = await axios.post(BASE_URL + "/api/dj-rest-auth/registration/", data);
        console.log(res.data.key);
        localStorage.setItem("token", res.data.key);
    },

    async login(data) {
        const res = await axios.post(BASE_URL + "/api/dj-rest-auth/login/", data);

        if (res.data.key) localStorage.setItem("token", res.data.key);
        console.log(res.data.key);
    },

    async logout() {
        const res = await axios.post(BASE_URL + "/api/dj-rest-auth/logout/", {});
        console.log(res);
    },

    async apiGet(url) {
        const res = await axios.get(BASE_URL + url, {
            headers: {
                "Authorization": `Token ${getToken()}`,
                "Content-type": "application/json"
            }
        });
        return res.data
    },
};

