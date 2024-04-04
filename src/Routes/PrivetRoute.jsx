import { useContext } from "react";
import { AuthContext } from "../AuthProbider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6


const PrivetRoute = ({children}) => {
   
    const  location =useLocation()
   

    const { user,loading } = useContext(AuthContext)
if(loading){
    return <div className=" flex justify-center p-48"> <span className="loading loading-spinner  w-40 h-40 "></span> </div>
}

    if (user) {
        return (
            children

        )
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>


};

export default PrivetRoute;
    PrivetRoute.propTypes = {

        children: PropTypes.node.isRequired
    }