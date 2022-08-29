import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './components/container';
import Header from 'components/header';
import Footer from 'components/footer';
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedIn } from 'redux/user/user-selectors';
import { fetchCurentUser } from 'redux/user/user-operations';
import ContactsPage from 'views/contacts-page';
import { useEffect } from 'react';
import PrivateRoute from './components/Private-route';

const Home = lazy(() => import('views/home-page'));
const UserPage = lazy(() => import('views/user-page'));

export default function App() {
  const status = useSelector(isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurentUser());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute redirectPath="/contacts" status={status}>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectPath="/" status={!status}>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute redirectPath="/" status={!status}>
                <UserPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<h2>Address not found</h2>} />
        </Routes>
      </Suspense>
      <Footer />
    </Container>
  );
}
