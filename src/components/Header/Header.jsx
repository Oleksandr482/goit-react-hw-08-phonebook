import { Box, Container, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { TbPhoneCall } from 'react-icons/tb';
import { Navigation } from 'components/Navigation/Navigation';

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container as="header" maxW="100%" h="80px" py="10px" bg="green.100">
        <Box maxW="1260px" mx="auto">
          <Flex justifyContent="space-between">
            <Heading as="h1" size="2xl" color="blue.500">
              <Flex>
                <TbPhoneCall />
                Phonebook
              </Flex>
            </Heading>
            {/* Navigation */}
            <Navigation onOpen={onOpen} />
            {/* ////////////////////////////// */}
          </Flex>
        </Box>
      </Container>
      <Outlet />
      {/* /////////////Modal//////////////// */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="max-content">
          <ModalHeader fontSize="32px" textAlign="center">
            Add contact
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ContactsForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
