import { IconButton } from '@chakra-ui/react';

export const IconBtn = ({ onClick, Icon }) => {
  return (
    <IconButton
      onClick={onClick}
      w="60px"
      h="60px"
      fontSize="36px"
      borderRadius="50%"
      colorScheme="blue"
      icon={<Icon />}
    />
  );
};
