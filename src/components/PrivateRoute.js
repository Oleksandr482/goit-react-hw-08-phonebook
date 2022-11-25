import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigate to="/login" />}
    </Route>
  );
};
