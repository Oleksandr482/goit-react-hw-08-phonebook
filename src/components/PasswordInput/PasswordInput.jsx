import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';

export const PasswordInput = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <InputGroup>
      <Input
        borderColor="blue.500"
        size="lg"
        fontSize="26px"
        mb="30px"
        type={show ? 'text' : 'password'}
        name="password"
        required
        placeholder="Password"
      />
      <InputRightElement position="absolute" top="1" right="1">
        <Button
          borderRadius="50%"
          variant="link"
          verticalAlign="center"
          colorScheme="blue"
          size="md"
          onClick={handleClick}
        >
          {show ? <RiEyeCloseLine size="25px" /> : <RiEyeLine size="25px" />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
