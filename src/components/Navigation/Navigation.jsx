import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

import { IconBtn } from 'components/IconButton/IconButton';
import { AddIcon } from '@chakra-ui/icons';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = ({ onOpen }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {isLoggedIn ? <IconBtn onClick={onOpen} Icon={AddIcon} /> : ''}

      <nav>{isLoggedIn ? <UserMenu /> : <AuthNav />}</nav>
    </>
  );
};

Navigation.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
