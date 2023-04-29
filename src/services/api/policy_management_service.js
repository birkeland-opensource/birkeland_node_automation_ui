import axios from "axios";

export const save_policy_info = async (get_object) =>{
    try {
        const response = await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/policy`, get_object);
   
        return {success: true, message: response.data?.message};
    }   
    catch(err){
        return {success: false, message: err}
    }

}

export const get_policy_info = async (get_object) =>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/policy`, get_object);
   
        return {success: true, message: response.data?.message};
    }   
    catch(err){
        return {success: false, message: err}
    }

}