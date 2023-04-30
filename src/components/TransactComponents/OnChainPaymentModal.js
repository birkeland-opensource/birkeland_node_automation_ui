import React,{ useState }  from 'react'
import {
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Box,
    Button,
    Input,
    Text,
  } from "@chakra-ui/react";
import { authenticated_operations } from '../../services/api/lightning_node_communication_service';
import { useSelector } from "react-redux";
import GenericLoadingComponent from '../GenericLoadingComponent';

function OnChainPaymentModal({header_message,on_chain_payment_modal_state,set_on_chain_payment_modal_state}) {

    const [showloadingDialog, setShowloadingDialog] = useState(false);
    const user_id = useSelector((state) => state?.user_id);
    const selected_node_id = useSelector((state) => state?.selected_node_id);
    const [tokens, set_tokens] = useState(100);
    const [address, set_address] = useState("");

    const on_send_btn_clicked = async () => {
        let object = {
            operation : "send_to_chain_address",
            tokens:tokens,
            address:address,
            user_id:user_id,
            unique_node_id : selected_node_id
        }
        setShowloadingDialog(true);
        let resp = await authenticated_operations(object);
        if(resp.success){
            set_tokens(100);
            set_address("");
            alert("Transfer Success");
        }
        else{
            alert("Transfer Failed");
        }
        setShowloadingDialog(false);
        set_on_chain_payment_modal_state(false);
    }
  return (
    <Modal
    isOpen={on_chain_payment_modal_state}
    aria-labelledby="form-dialog-title"
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader id="form-dialog-title" bg={"white"}>
        <Flex align={"center"} justify={"center"} fontFamily="Bekeley">
         {header_message}
        </Flex>
      </ModalHeader>
      <ModalBody>
        <Box my={2} p={1} border={2} borderRadius={10}>
          <Text mb={2} fontFamily="Bekeley">
            <b>Amount in Sats </b>
          </Text>
          <Input
            fontFamily="Bekeley"
            mb={5}
            placeholder="0"
            value={tokens}
            onChange={(e) => set_tokens(e.target.value)}
            name={"tokens"}
            type={"number"}
          />
          <Text mb={2} fontFamily="Bekeley">
            <b>On Chain Address </b>
          </Text>
          <Input
            fontFamily="Bekeley"
            mb={5}
            placeholder="Address"
            value={address}
            onChange={(e) => set_address(e.target.value)}
            name={"tokens"}
            type={"text"}
          />
        </Box>
      </ModalBody>
      <ModalFooter>
        <Button
        bg={"#FFBB38"}
        fontFamily="Bekeley"
          mx={5}
          onClick={() => on_send_btn_clicked()}
        >
          Send
        </Button>
        <Button
        fontFamily="Bekeley"
          //bg={titleColor}
          onClick={() =>{
            set_on_chain_payment_modal_state(false);
          } }
        >
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
    {showloadingDialog &&
      <GenericLoadingComponent
        loadingmessage={"Regitsering "}
        showloadingDialog={showloadingDialog}
      /> }
  </Modal>
  )
}

export default OnChainPaymentModal