import React, { useEffect, useState } from "react";
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
  VStack,
} from "@chakra-ui/react";
import QRCode from "react-qr-code";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSelector } from "react-redux";
import { get_on_chain_address_service } from "../../services/api/lightning_node_communication_service";

function DepositModal({ deposit_modal_state, set_deposit_modal_state }) {
  const user_id = useSelector((state) => state?.user_id);
  const selected_node_id = useSelector((state) => state?.selected_node_id);

  const [received_request_hash, set_received_request_hash] = useState(false);
  const [request_hash, setrequest_hash] = useState("");
  const [request_hash_copied, set_request_hash_copied] = useState(false);

  const [request_in_progress, setrequest_in_progress] = useState(false);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setrequest_in_progress(true);
      let get_object = {
        user_id: user_id,
        unique_node_id: selected_node_id,
        operation: "create_chain_address",
      };
      let resp = await get_on_chain_address_service(get_object);
      if (resp.success) {
        set_received_request_hash(true);
        setrequest_hash(resp.message.address);
      }
    };
    if (!request_in_progress) {
      fetchDataAsync();
    }
  }, []);

  return (
    <Modal isOpen={deposit_modal_state} aria-labelledby="form-dialog-title">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader id="form-dialog-title" bg={"white"}>
          <Flex align={"center"} justify={"center"} fontFamily="Bekeley">
            Bitcoin address to deposit
          </Flex>
        </ModalHeader>
        <ModalBody>
          {received_request_hash && (
            <Box>
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
            </Box>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            fontFamily="Bekeley"
            onClick={() => {
              set_deposit_modal_state(false);
              set_request_hash_copied(false);
              set_received_request_hash(false);
              setrequest_hash("");
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DepositModal;
