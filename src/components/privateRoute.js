import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedIn } from 'redux/contacts/contacts-selectors';

export default function PrivateRoute({ children, ...routeProps }) {
  return <Route {...routeProps} element={children} />;
}
