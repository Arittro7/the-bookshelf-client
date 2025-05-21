import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { currentUser, loading } = useContext(AuthContext)
  if(currentUser){
    return children
  }
  if(loading){
    return <div className="size-20"><span className="loading loading-dots loading-xl"></span></div>
  }
  return <Navigate to={'/login'} replace/>
};

export default PrivateRoute;