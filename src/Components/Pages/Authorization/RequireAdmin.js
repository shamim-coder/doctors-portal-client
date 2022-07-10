import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import Spinner from "../../Shared/Spinner/Spinner";
import auth from "../../Utilities/Firebase.init";

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [admin, adminLoading] = useAdmin(user);

    if (loading || adminLoading) {
        return <Spinner />;
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;
