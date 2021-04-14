import axios from "axios";

const API_KEY = "a4a5bb0f047622fb0fa5cdf1c07372bf";
const base_url = "https://api.themoviedb.org/3/movie";
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export const fetchMovieVideos = async (id) => {
    try {
        const { data } = await axios.get(`${base_url}/${id}/videos`, {
            params: {
                api_key: API_KEY,
            }
        });
        return data['results'][0];
    } catch (error) { }
}


export default instance;