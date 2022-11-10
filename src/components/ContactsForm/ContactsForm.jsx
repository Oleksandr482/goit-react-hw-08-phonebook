import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { Form, FormInput, Label, SubmitBtn } from '../App.styled';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onChange = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
      case 'phone':
        return setNumber(e.target.value);
      default:
        return;
    }
  };

  const formSubmit = e => {
    e.preventDefault();

    if (
      contacts.find(item => {
        return item.name === name;
      })
    ) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, phone }));
    }

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={formSubmit}>
      <Label>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChange}
        />
      </Label>
      <Label>
        Number
        <FormInput
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={onChange}
        />
      </Label>
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
};
