import axios from "axios";

const api = axios.create({
    baseURL: "https://reqres.in/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export async function sendPortfolioData(data) {
    const response = await api.post("/users", data);

    return response.data;
}

export default api;