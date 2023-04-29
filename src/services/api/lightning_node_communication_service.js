import axios from "axios";

export const get_accounting_info = async (get_object) =>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/accounting/get_simple_accounting_info`, get_object);
   
        return {success: true, message: response.data?.message};
    }   
    catch(err){
        return {success: false, message: err}
    }

}

export const call_grpc_ops = async (get_object) =>{
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/accounting/call_grpc_ops`, get_object);
        return {success: true, message: response.data?.message};
    }   
    catch(err){
        return {success: false, message: err}
    }

}

export const get_forwards = async (get_object) =>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/accounting/get_forwards`, get_object);
        return {success: true, message: response.data?.message};
    }   
    catch(err){
        return {success: false, message: err}
    }

}

export const get_rebalance_fee = async (get_object) =>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/accounting/get_rebalance_fee`, get_object);
   
        return {success: true, message: response.data?.message};
    }   
    catch(err){
        return {success: false, message: err}
    }

}