import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';

export const EditModal = ({ isOpen, onClose, userName, userNumber, id }) => {
  const [name, setUserName] = useState(userName);
  const [number, setUserNumber] = useState(userNumber);

  const dispatch = useDispatch();

  const onChange = e => {
    switch (e.target.name) {
      case 'name':
        return setUserName(e.target.value);
      case 'number':
        return setUserNumber(e.target.value);
      default:
        return;
    }
  };

  const formSubmit = e => {
    e.preventDefault();

    dispatch(editContact({ id, name, number }));

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="max-content">
        <ModalHeader fontSize="32px" textAlign="center">
          Edit contact
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl
            as="form"
            align="center"
            maxW="450px"
            p="30px"
            onSubmit={formSubmit}
          >
            <Input
              borderColor="green.500"
              size="lg"
              fontSize="26px"
              mb="30px"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={onChange}
              placeholder="Name"
            />

            <Input
              borderColor="green.500"
              size="lg"
              fontSize="26px"
              mb="30px"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={onChange}
              placeholder="Number"
            />

            <Button
              fontSize="26px"
              size="lg"
              borderColor="green.500"
              colorScheme="green"
              variant="outline"
              type="submit"
            >
              Edit contact
            </Button>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
