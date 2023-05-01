import React, { useState } from "react";


import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  Flex,
  Switch,
  Box,
} from "@chakra-ui/react";
import "./Connect.css"
import Header1 from "../components/Header1";
import { titleColor } from "../utlis/color_themes";
import { delete_one_node_info_service, get_all_node_info_service, save_node_info_service } from "../services/api/node_info_service";
import GenericLoadingComponent from "../components/GenericLoadingComponent";


const ConnectNode = (props) => {
  const {user_id,selected_node_id,selected_node_alias,set_selected_node_id,set_selected_node_alias} = props;
  const [showloadingDialog, setShowloadingDialog] = useState(false);
  const ACTION = {
    SET_ADD_NODE_MODAL_DIALOG_STATE: "SET_ADD_NODE_MODAL_DIALOG_STATE",
    SET_NODE_ALIAS: "SET_NODE_ALIAS",
    SET_MACAROON: "SET_MACAROON",
    SET_TLS_CERT: "SET_TLS_CERT",
    SET_LOADING_DIALOG_STATE: "SET_LOADING_DIALOG_STATE",
    SET_SAVED_NODES: "SET_SAVED_NODES",
    SET_SOCKET : "SET_SOCKET"
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION.SET_ADD_NODE_MODAL_DIALOG_STATE:
        return { ...state, show_add_node_modal: action.payload };
      case ACTION.SET_NODE_ALIAS:
        return { ...state, node_alias: action.payload };
      case ACTION.SET_MACAROON:
        return { ...state, macaroon: action.payload };
      case ACTION.SET_TLS_CERT:
        return { ...state, tls_cert: action.payload };
      case ACTION.SET_LOADING_DIALOG_STATE:
        return { ...state, show_loading_dialog: action.payload };
      case ACTION.SET_SAVED_NODES:
        return { ...state, saved_nodes: action.payload };
      case ACTION.SET_SOCKET:
        return { ...state, socket: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, {
    show_add_node_modal: false,
   // node_alias: "",
    macaroon: "",
    tls_cert: "",
    socket : "",
    show_loading_dialog: false,
    selected_node_id: selected_node_id,
    saved_nodes: [],
  });

  React.useEffect(() => {
    async function fetchData() {
      let get_object = {
        params : {user_id : user_id}
      }
      setShowloadingDialog(true);
      let resp = await get_all_node_info_service(get_object);
     
      if(resp.success){
        dispatch({
          type: ACTION.SET_SAVED_NODES,
          payload: resp?.message?.message,
        });
        setShowloadingDialog(false);
      }
     
      else{
        setShowloadingDialog(false);
      }
    }
    fetchData();
  }, [state?.show_add_node_modal]);


  const handle_add_node_btn_click = () => {
    dispatch({
      type: ACTION.SET_ADD_NODE_MODAL_DIALOG_STATE,
      payload: true,
    });
  };

  const handle_create_node_btn_click = async () => {
    let new_node_object = {
      user_id : user_id,
      node_alias: state.node_alias,
      macaroon: state.macaroon,
      tls_cert: state.tls_cert,
      socket : state.socket
    };

    let resp = await save_node_info_service(new_node_object);
    if(resp?.success){
      alert("Node created successfully");
      dispatch({
        type: ACTION.SET_ADD_NODE_MODAL_DIALOG_STATE,
        payload: false,
      });
    }
    else{
      alert("Error creating node");
      dispatch({
        type: ACTION.SET_ADD_NODE_MODAL_DIALOG_STATE,
        payload: true,
      });
    }
  };


  const switch_selected_node_info = (node_info,event) =>{
      if(event?.target?.checked)
      {
        set_selected_node_alias(node_info?.node_alias);
        set_selected_node_id(node_info?.unique_node_id);
        window.location.reload();
      } 
      else if(node_info?.node_alias === selected_node_alias){
        set_selected_node_alias("");
        set_selected_node_id("");
      }   
  }


  const delete_a_node = async (node_id) =>{

    let delete_params = {params :{unique_node_id : node_id, user_id :user_id } }
    let resp = await delete_one_node_info_service(delete_params);
    if(resp?.success){
      alert("Delete successful");
      window.location.reload();
    }
    else{
      alert("Error deleting node");
    }
  }

  return (
    <div className="pb-97 ">
      <Header1 />
      <div className="data-details mission_control full-screen">
        <div>
          <h1>Manage Your Nodes</h1>
        </div>
        <div className="container">
      <div>
            <h2>Active Node - {selected_node_alias}</h2>
            <Box py={10}>
            <table className="table">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Alias</th>
                  <th>Control</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {state.saved_nodes.map((node, index) => (
                <tr key={node?.unique_node_id}>
                  <td>{index + 1}</td>
                  <td>{node?.node_alias}</td>
                  <td>
                      <Switch
                      defaultChecked={node?.unique_node_id === selected_node_id}
                      onChange = {(e)=>switch_selected_node_info(node,e)}
                      colorScheme="yellow"
                      />
                    </td>
                   <td><Button onClick={()=>delete_a_node(node?.unique_node_id)} fontFamily="Bekeley"  bg={titleColor} color={'black'}>Delete</Button></td> 
                </tr>
              ))}
            </table>
            </Box>
        
          </div>

          <Button
            bg={"yellow.500"}
            color="black"
            onClick={() => handle_add_node_btn_click()}
            _hover={{
              bg: "yellow.200",
              transition: "background-color 0.2s ease-in-out",
            }}
          >
            Add
          </Button>
        </div>
      </div>
      {state.show_add_node_modal && (
        <Modal
          size={"lg"}
          isOpen={state.show_add_node_modal}
          onClose={() =>
            dispatch({
              type: ACTION.SET_ADD_NODE_MODAL_DIALOG_STATE,
              payload: false,
            })
          }
        >
          <ModalOverlay />
          <ModalContent>
          <ModalHeader id="form-dialog-title" bg={'white'}>
          <Flex align={"center"} justify={"center"} fontFamily="Bekeley">
            Add new lightning node server info
          </Flex>
        </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                fontFamily="Bekeley"
                value={state.node_alias}
                type="text"
                placeholder={"NODE ALIAS"}
                onChange={(e) =>
                  dispatch({
                    type: ACTION.SET_NODE_ALIAS,
                    payload: e.target.value,
                  })
                }
              />

              <Input
                fontFamily="Bekeley"
                value={state.macaroon}
                type="text"
                placeholder={"MACAROON"}
                onChange={(e) =>
                  dispatch({
                    type: ACTION.SET_MACAROON,
                    payload: e.target.value,
                  })
                }
              />

              <Input
                fontFamily="Bekeley"
                value={state.tls_cert}
                type="text"
                placeholder={"TLS CERTIFICATE"}
                onChange={(e) =>
                  dispatch({
                    type: ACTION.SET_TLS_CERT,
                    payload: e.target.value,
                  })
                }
              />

              <Input
                fontFamily="Bekeley"
                value={state.socket}
                type="text"
                placeholder={"GRPC SOCKET"}
                onChange={(e) =>
                  dispatch({
                    type: ACTION.SET_SOCKET,
                    payload: e.target.value,
                  })
                }
              />        
            </ModalBody>

            <ModalFooter>
              <Button
                fontFamily="Bekeley"
                bg={titleColor}
                mr={3}
                onClick={() => handle_create_node_btn_click()}
              >
                Add
              </Button>
              <Button
                fontFamily="Bekeley"
                bg={titleColor}
                onClick={() =>
                  dispatch({
                    type: ACTION.SET_ADD_NODE_MODAL_DIALOG_STATE,
                    payload: false,
                  })
                }
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
       {showloadingDialog &&
      <GenericLoadingComponent
        loadingmessage={"Regitsering "}
        showloadingDialog={showloadingDialog}
      /> }
    </div>
  );
};

export default ConnectNode;
