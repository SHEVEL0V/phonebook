import { Navigate } from 'react-router-dom';

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
