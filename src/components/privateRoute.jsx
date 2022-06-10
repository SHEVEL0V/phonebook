import { Route } from 'react-router-dom';

export default function PrivateRoute({ children, ...routeProps }) {
  return <Route {...routeProps} element={children} />;
}
