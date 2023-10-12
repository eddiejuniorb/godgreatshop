import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";
let refresh = false;

axios.interceptors.response.use(
    (resp) => {
        return resp;
    },
    async (error) => {
        if (error.response.status === 401 && !refresh) {
            refresh = true;
        }
        refresh = false;
        return error
    }
);
