import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilterValue } from 'redux/filterSlice';

import { FormInput, Label } from 'components/App.styled';
import { selectFilterValue } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const onChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilterValue(filterValue));
  };

  return (
    <Label>
      Find contacts by name
      <FormInput type="text" value={filter} onChange={onChange} />
    </Label>
  );
};
