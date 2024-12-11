import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>;
    }

    if (currentUser) {
        return children;
    }

    // Redirect to login and save the desired route
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
