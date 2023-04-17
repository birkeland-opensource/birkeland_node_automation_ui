import { REDUCER_ACTIONS } from "../utlis/const_objects";

const authReducer = (state = { 
      last_executed_ops : "",
      last_returned_result : {},
      node_public_key : "",
      is_connected_to_remote_host : false,
      birkeland_port : "http://localhost:9990",
      username: "",
      password: "", 
      business_user_id: "",
      email: "",
      user_id : "",
      auth_token: {} }, action) => {
  
  switch (action.type) {
    case REDUCER_ACTIONS.SET_IS_CONNECTED_TO_REMOTE_HOST : 
      return {...state, is_connected_to_remote_host :action.is_connected_to_remote_host}
    case REDUCER_ACTIONS.SET_BIRKELAND_PORT : 
      return {...state, birkeland_port :action.birkeland_port}
    case REDUCER_ACTIONS.SET_USERNAME:
      return { ...state, username: action.username };
    case REDUCER_ACTIONS.SET_PASSWORD:
      return { ...state, password: action.password };
    case REDUCER_ACTIONS.SET_BUSINESS_USER_ID:
      return { ...state, business_user_id: action.business_user_id };
    case REDUCER_ACTIONS.SET_EMAIL:
      return { ...state, email: action.email };
    case REDUCER_ACTIONS.SET_AUTH_TOKEN:
      return { ...state, auth_token: action.auth_token };
    case REDUCER_ACTIONS.SET_NODE_PUBLIC_KEY:
      return { ...state, node_public_key: action.node_public_key };
    case REDUCER_ACTIONS.SET_LAST_EXECUTED_OPS:
      return { ...state, last_executed_ops: action.last_executed_ops };
    case REDUCER_ACTIONS.SET_LAST_RETURNED_RESULT:
      return { ...state, last_returned_result: action.last_returned_result };
    case REDUCER_ACTIONS.SET_USER_ID:
      return { ...state, user_id: action.user_id };
    default:
      return state;
  }
};

export default authReducer;
