import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProtectedRoute({
  redirectPath = '/',
  status,
  children,
}) {
  if (status) {
    return <Navigate to={redirectPath} />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string.isRequired,
};
