import { REDUCER_ACTIONS } from "../utlis/const_objects";

const mapStateToProps = (state) => ({

    user_id : state.user_id,
    selected_node_id: state.selected_node_id,
    selected_node_alias : state.selected_node_alias,
    auth_token: state.auth_token

});

const mapDispatchToProps = (dispatch) => ({
    
    set_user_id : (user_id) => dispatch({type: REDUCER_ACTIONS.SET_USER_ID,user_id}),
    set_selected_node_id : (selected_node_id) => dispatch({type: REDUCER_ACTIONS.SET_SELECTED_NODE_ID, selected_node_id}),
    set_selected_node_alias : (selected_node_alias) => dispatch({type: REDUCER_ACTIONS.SET_SELECTED_NODE_ALIAS,selected_node_alias}),
    set_auth_token : (auth_token) => dispatch({type: REDUCER_ACTIONS.SET_AUTH_TOKEN,auth_token}),


});

export {mapStateToProps, mapDispatchToProps}