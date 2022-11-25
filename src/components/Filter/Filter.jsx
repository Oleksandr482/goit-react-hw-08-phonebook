import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilterValue } from 'redux/filterSlice';

import { selectFilterValue } from 'redux/contacts/selectors';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const onChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilterValue(filterValue));
  };

  return (
    <InputGroup my="20px">
      <InputLeftElement position="absolute" top="1">
        <SearchIcon color="gray.400" fontSize="25px" />
      </InputLeftElement>
      <Input
        w="100%"
        size="lg"
        color="blue.400"
        fontSize="22px"
        fontWeight="bold"
        colorScheme="blue"
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Find contacts by name"
      />
    </InputGroup>
  );
};
