import React from "react";

import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { Circles } from "react-loader-spinner";

function GenericLoadingComponent({ showloadingDialog }) {
  return (
    <Modal
      isOpen={showloadingDialog}
      aria-labelledby="form-dialog-title"
      bg={"rbga(0,0,0,0"}
    >
      <ModalOverlay />
      <ModalContent bg={"rbga(0,0,0,0"}>
   

        <ModalBody bg={"rbga(0,0,0,0"} minH={100}>
          <Flex
            align={"center"}
            justify={"center"}
            bg={"rbga(0,0,0,0"}
            minH={1000}
          >
            <Center>
              <Spacer />
              <Circles
                height="160"
                width="160"
                color="#FFBB38"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </Center>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default GenericLoadingComponent;
