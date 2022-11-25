import { Button, Flex, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { selectUser } from 'redux/auth/auth-selectors';

import { FiLogOut } from 'react-icons/fi';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <Flex align="center">
      <Text fontSize="2xl" color="blue.500" fontWeight="bold" mr="15px">
        Hello, {user.name}!
      </Text>
      <Button
        fontSize="30px"
        w="60px"
        h="60px"
        // fontWeight="bold"
        borderRadius="50%"
        colorScheme="blue"
        variant="ghost"
        onClick={handleClick}
      >
        <FiLogOut />
      </Button>
    </Flex>
  );
};
