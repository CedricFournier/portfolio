import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const RequireAuth = () => {
    
    const location = useLocation();
    const {user} = useContext(UserContext)
    
    return (
        (user
            ? <Outlet />
            : <Navigate to="/Signin" state={{ from: location }} replace />)
    )
}
export default RequireAuth