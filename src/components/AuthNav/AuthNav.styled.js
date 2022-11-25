import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavLink = styled(NavLink)`
  &.active {
    color: red;
    &::after {
      content: '';
      width: 100%;
      display: flex;
      height: 4px;
      border-radius: 2px;
      background-color: red;
    }
  }
`;
