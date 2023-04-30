import React, { useState } from "react";
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
  HStack,
  FormLabel,
  VStack,
} from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { authenticated_operations } from "../../services/api/lightning_node_communication_service";
import QRCode from "react-qr-code";
import CopyToClipboard from "react-copy-to-clipboard";
import GenericLoadingComponent from "../GenericLoadingComponent";

function LightningPaymentModal({
  lightning_payment_modal,
  set_lightning_payment_modal,
}) {
const [showloadingDialog, setshowloadingDialog] = useState(false)
  const user_id = useSelector((state) => state?.user_id);
  const selected_node_id = useSelector((state) => state?.selected_node_id);

  const [pay_invoice_selected, set_pay_invoice_selected] = useState(false);
  const [invoice, set_invoice] = useState("");
  const [decoded_invoice_info, setdecoded_invoice_info] = useState({});
  const [tokens, set_tokens] = useState(100);
  const [memo, set_memo] = useState("");

  const [received_request_hash, set_received_request_hash] = useState(false);
  const [request_hash, setrequest_hash] = useState("");
  const [request_hash_copied, set_request_hash_copied] = useState(false);

  const [payment_request_decoded, setpayment_request_decoded] = useState(false);


  const on_create_invoice_clicked = async () => {
    setshowloadingDialog(true);
    let object = {
      user_id: user_id,
      unique_node_id: selected_node_id,
      operation: "create_invoice",
      mtokens: tokens * 1000,
      description: memo,
    };
    let resp = await authenticated_operations(object);
    if (resp?.success) {
      setrequest_hash(resp?.message?.request);
      set_received_request_hash(true);
    } 
    else{
        alert("Invoice creation failed");
    }
    setshowloadingDialog(false);
  };

  const on_pay_invoice_clicked = async () => {
    if (request_hash.length <= 1) {
      alert("Please enter a valid invoice");
      return;
    }
    setshowloadingDialog(true);
    let object = {
      user_id: user_id,
      unique_node_id: selected_node_id,
      operation: "pay",
      request: request_hash,
    };
    let resp = await authenticated_operations(object);
    if(resp?.success){
        alert("Payment Successful");
        set_lightning_payment_modal(false);
    }
    else{
        alert("Payment Failed");
    }
    setshowloadingDialog(false);
  };

  const on_decode_invoice_clicked = async () => {
    if (invoice.length <= 1) {
      alert("Please enter a valid invoice");
      return;
    }
    setshowloadingDialog(true);
    let object = {
      user_id: user_id,
      unique_node_id: selected_node_id,
      operation: "decode_payment_request",
      request: request_hash,
    };
    let resp = await authenticated_operations(object);
    if (resp?.success) {
      setdecoded_invoice_info(resp?.message);
      setpayment_request_decoded(true);
    }else{
        alert("Invalid Invoice");
    }
    setshowloadingDialog(false);
  };

  return (
    <Modal isOpen={lightning_payment_modal} aria-labelledby="form-dialog-title"   size={"lg"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader id="form-dialog-title" bg={"white"}>
          <Flex align={"center"} justify={"center"} fontFamily="Bekeley">
            Manage Lightning Payments
          </Flex>
        </ModalHeader>
        <ModalBody>
          <HStack spacing={4} justifyContent="center">
            <Button
              fontFamily="Bekeley"
              bg={pay_invoice_selected ? "#FFBB38" : "gray.100"}
              variant="ghost"
              px={4}
              py={2}
              borderRadius="md"
              borderWidth={2}
              borderColor="transparent"
              _hover={{
                backgroundColor: "#FFBB38",
              }}
              _active={{
                backgroundColor: "gray.200",
              }}
              onClick={() => {
                setpayment_request_decoded(false);
                set_pay_invoice_selected(true);
                
                // Add your logic for the "Pay" button
              }}
            >
              <Text>Pay</Text>
            </Button>
            <Button
              fontFamily="Bekeley"
              bg={pay_invoice_selected ? "gray.100" : "#FFBB38"}
              variant="ghost"
              px={4}
              py={2}
              borderRadius="md"
              borderWidth={2}
              borderColor="transparent"
              _hover={{
                backgroundColor: "#FFBB38",
              }}
              _active={{
                backgroundColor: "gray.100",
              }}
              onClick={() => {
                set_pay_invoice_selected(false);
                setrequest_hash("");
                set_received_request_hash(false);
                set_request_hash_copied(false);
              }}
            >
              <Text>Receive</Text>
            </Button>
          </HStack>
          {pay_invoice_selected ? (
            <Box>
              <FormLabel mt={5} fontFamily="Bekeley">
                <b>Invoice</b>
              </FormLabel>

              <Input
                fontFamily="Bekeley"
                mb={5}
                placeholder="Paste Invoice"
                value={invoice}
                onChange={(e) => set_invoice(e.target.value)}
                name={"invoice"}
                type={"text"}
              />
              {payment_request_decoded && (<>
              <Text fontFamily="Bekeley">Amount: {decoded_invoice_info?.tokens}</Text> <br/>
              <Text fontFamily="Bekeley">Description: {decoded_invoice_info?.description}</Text> </>)}
            </Box>
          ) : (
            <Box>
              <FormLabel mt={5} fontFamily="Bekeley">
                <b>Amount in Sats </b>
              </FormLabel>
              <Input
                fontFamily="Bekeley"
                mb={5}
                placeholder="0"
                value={tokens}
                onChange={(e) => set_tokens(e.target.value)}
                name={"tokens"}
                type={"number"}
              />
              <FormLabel mt={5} fontFamily="Bekeley">
                <b>Memo (Optional) </b>
              </FormLabel>
              <Input
                fontFamily="Bekeley"
                mb={8}
                placeholder="Memo"
                value={memo}
                onChange={(e) => set_memo(e.target.value)}
                name={"memo"}
                type={"text"}
              />

              {received_request_hash && (
                <VStack spacing={10}>
                  <QRCode value={request_hash} />
                  <CopyToClipboard
                    text={request_hash}
                    onCopy={() => set_request_hash_copied(true)}
                  >
                    <Button
                      bg={"#FFBB38"}
                      fontFamily="Bekeley"
                      my={5}
                      onClick={() => set_request_hash_copied(true)}
                    >
                      {request_hash_copied ? "Copied!" : "Copy"}
                    </Button>
                  </CopyToClipboard>
                </VStack>
              )}
            </Box>
          )}
        </ModalBody>
        <ModalFooter>
          {pay_invoice_selected ? (
            payment_request_decoded ? (
              <Button
                bg={"#FFBB38"}
                fontFamily="Bekeley"
                mx={5}
                onClick={() => on_pay_invoice_clicked()}
              >
                Pay
              </Button>
            ) : (
              <Button
                bg={"#FFBB38"}
                fontFamily="Bekeley"
                mx={5}
                onClick={() => on_decode_invoice_clicked()}
              >
                Decode
              </Button>
            )
          ) : (
            <Button
              bg={"#FFBB38"}
              fontFamily="Bekeley"
              mx={5}
              onClick={() => on_create_invoice_clicked()}
            >
              Create
            </Button>
          )}
          <Button
            fontFamily="Bekeley"
            //bg={titleColor}
            onClick={() => {
              set_lightning_payment_modal(false);
            }}
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
  );
}

export default LightningPaymentModal;
