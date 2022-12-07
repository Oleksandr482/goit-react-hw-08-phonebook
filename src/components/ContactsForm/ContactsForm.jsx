import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { Button, FormControl, Input } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactsForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onChange = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
      case 'number':
        return setNumber(e.target.value);
      default:
        return;
    }
  };

  const formSubmit = e => {
    e.preventDefault();

    const normalName = name
      .split(' ')
      .filter(el => el.trim())
      .join(' ');

    if (
      contacts.find(item => {
        return item.name === normalName;
      })
    ) {
      return alert(`${normalName} is already in contacts`);
    } else {
      dispatch(addContact({ name: normalName, number }));
    }

    onClose();
    setName('');
    setNumber('');
  };

  return (
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
        Add contact
      </Button>
    </FormControl>
  );
};

ContactsForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
