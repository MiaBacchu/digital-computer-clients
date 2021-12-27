import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/Context/useAuth";


function PrivateRoute({ children, redirectTo }) {
    const {user,loading} = useAuth();
    const location=useLocation()
    console.log(loading)
    if (loading) {
        return 'loading...'
    }
    return (
        user.email ? children : <Navigate to={redirectTo} state={{from:location}}/>
    )
  }
  export default PrivateRoute;