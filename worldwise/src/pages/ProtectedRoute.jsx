import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAutenthicated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAutenthicated) navigate("/");
  }, [isAutenthicated, navigate]);

  return isAutenthicated ? children : null;
};

export default ProtectedRoute;
