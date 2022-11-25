import { Button, FormControl, FormLabel, Input, Link } from '@chakra-ui/react';
import { PasswordInput } from 'components/PasswordInput/PasswordInput';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/auth/auth-operations';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    dispatch(
      logIn({
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
        Hello, guest! To be able to create contacts, please log in or{' '}
        <Link as={NavLink} color="red.500" to="/register">
          register
        </Link>
      </FormLabel>
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
        Log In
      </Button>
    </FormControl>
  );
};
