import axios from "axios";


export const login_user_service = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL_MAIN}/business_users/login`, data);
        return {success: true, message: response.data};
    }   
    catch(err){
        return {success: false, message: err}
    }
}

export const register_user_service = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL_MAIN}/business_users/register`, data);
        return {success: true, message: response.data};
    }   
    catch(err){
        return {success: false, message: err}
    }
}
