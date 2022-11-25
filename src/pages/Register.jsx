import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { PasswordInput } from 'components/PasswordInput/PasswordInput';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <FormControl
      as="form"
      align="center"
      maxW="450px"
      mx="auto"
      p="30px"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <FormLabel fontSize="32px" color="blue.500" mb="30px">
        Fill in all the fields to register
      </FormLabel>
      <Input
        borderColor="blue.500"
        size="lg"
        fontSize="26px"
        mb="30px"
        type="name"
        name="name"
        required
        placeholder="Name"
      />
      <Input
        borderColor="blue.500"
        size="lg"
        fontSize="26px"
        mb="30px"
        type="email"
        name="email"
        required
        placeholder="Email"
      />
      <PasswordInput />

      <Button type="submit" size="lg" colorScheme="blue" variant="outline">
        Register
      </Button>
    </FormControl>
  );
};
