import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
 const isAuthenticated=false
  useEffect(()=>{
    setTimeout(()=>{
      return true
    })
  },[isAuthenticated])
  console.log(isAuthenticated)
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }
 
  return children;
}

export default PrivateRoute;















// import { Navigate } from "react-router-dom";
// function PrivateRoute({ children }) {
//     let token=false
//     if(!token){
//         return <Navigate to={'/auth'}/>
//     }      
//   return children;
// }

// export default PrivateRoute;
