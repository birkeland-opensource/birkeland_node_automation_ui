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

export const get_closed_channels_fee = async (get_object) =>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/accounting/get_closed_channels_fee`, get_object);
   
        return {success: true, message: response.data?.message};
    }   
    catch(err){
        return {success: false, message: err}
    }

}


export const get_on_chain_address_service = async (get_object) =>{

    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/lnd/auth_macarooon_ops`, get_object);
        return {success: true, message: response.data?.message};
    }   
    catch(err){
        return {success: false, message: err}
    }
}

export const make_on_chain_transfer = async (get_object) =>{

    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/lnd/auth_macarooon_ops`, get_object);
        return {success: true, message: response.data?.message};
    }   
    catch(err){
        return {success: false, message: err}
    }
}
