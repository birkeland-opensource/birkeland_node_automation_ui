import axios from "axios";


export const save_node_info = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/cred/info`, data);
        return {success: true, message: response.data};
    }   
    catch(err){
        return {success: false, message: err}
    }
}

export const get_all_node_info = async (get_object) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cred/all_info`, get_object);
        return {success: true, message: response.data};
    }   
    catch(err){
        return {success: false, message: err}
    }
}

export const delete_one_node_info = async (delete_object) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cred/delete_one_node`, delete_object);
        return {success: true, message: response.data};
    }   
    catch(err){
        return {success: false, message: err}
    }
}

