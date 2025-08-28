import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { fetchProfile } from "../features/emp/empAPI";

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.userR);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  if (loading) return <div>লোড হচ্ছে...</div>;
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  return children;
};

export default PrivateRoute;
