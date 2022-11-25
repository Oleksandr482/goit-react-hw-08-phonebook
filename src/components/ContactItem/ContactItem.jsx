import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import { IconBtn } from 'components/IconButton/IconButton';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

import css from './ContactsList.module.css';
import { EditModal } from 'components/EditModal/EditModal';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      fontSize="32px"
      fontWeight="bold"
      color="blue.400"
      justifyContent="space-between"
      mb="10px"
      px="100px"
      className={css.contactsList}
    >
      <Flex w="700px" justifyContent="space-between" align="center">
        <Box>{contact.name}</Box> <Box>{contact.number}</Box>
      </Flex>
      <Flex w="130px" justifyContent="space-between">
        <IconBtn onClick={onOpen} Icon={EditIcon} />
        <IconBtn onClick={onDelete} Icon={DeleteIcon} />
      </Flex>
      <EditModal
        isOpen={isOpen}
        onClose={onClose}
        userName={contact.name}
        userNumber={contact.number}
        id={contact.id}
      />
    </Flex>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
