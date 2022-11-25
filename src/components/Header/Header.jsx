import { Box, Container, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
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
import { IconBtn } from 'components/IconButton/IconButton';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container maxW="100%" h="80px" py="10px" bg="green.100">
        <Box maxW="1260px" mx="auto">
          <Flex justifyContent="space-between">
            <Heading as="h1" size="2xl" color="blue.500">
              <Flex>
                <TbPhoneCall />
                Phonebook
              </Flex>
            </Heading>

            {isLoggedIn ? <IconBtn onClick={onOpen} Icon={AddIcon} /> : ''}

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Flex>
        </Box>
      </Container>
      <Outlet />
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
