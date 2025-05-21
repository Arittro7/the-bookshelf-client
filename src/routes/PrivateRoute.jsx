import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { currentUser } = useContext(AuthContext)
  if(currentUser){
    return children
  }
  return <Navigate to={'/login'} replace/>
};

export default PrivateRoute;