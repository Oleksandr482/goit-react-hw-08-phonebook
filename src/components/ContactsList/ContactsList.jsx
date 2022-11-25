import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from '@chakra-ui/react';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <List as="ul">
      {filteredContacts.map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </List>
  );
};
