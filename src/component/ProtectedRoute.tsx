import { Navigate } from "react-router";
import { isLoggedIn } from "../utils/auth";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isUserLoggedIn = isLoggedIn();
  if (!isUserLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;