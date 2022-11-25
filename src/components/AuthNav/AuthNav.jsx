import { Flex } from '@chakra-ui/react';

import { AuthNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <Flex
        maxW="200px"
        h="50px"
        align="center"
        color="blue.500"
        fontSize="22px"
        fontWeight="bold"
      >
        <Flex mr="15px">
          <AuthNavLink to="/register">Register</AuthNavLink>
        </Flex>
        <Flex flexDirection="column">
          <AuthNavLink to="/login">Log In</AuthNavLink>
        </Flex>
      </Flex>
    </>
  );
};
