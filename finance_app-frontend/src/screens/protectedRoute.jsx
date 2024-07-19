import { useNavigate } from 'react-router-dom';
import useAuth from '../hook/authticate'; // replace with the path to the useAuth hook

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) {
    navigate('/');
    return null;
  }

  return children;
}

export default ProtectedRoute;