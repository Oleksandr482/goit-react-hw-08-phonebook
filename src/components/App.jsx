import { Header } from './Header/Header';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
// import { PrivateRoute } from './PrivateRoute';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={isLoggedIn ? <Contacts /> : <Navigate to="/login" />}
          />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Login />}
          />
        </Route>
      </Routes>
    </>
  );
};
