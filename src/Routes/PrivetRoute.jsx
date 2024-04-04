import { useContext } from "react";
import { AuthContext } from "../AuthProbider/AuthProvider";
import { Navigate, useParams } from "react-router-dom";
import NewsDetails from "../Pages/News Details/NewsDetails";


const PrivetRoute = () => {
   


    const { user } = useContext(AuthContext)
    if (user) {
        return (
            <NewsDetails></NewsDetails>

        )
    }

    return <Navigate to={'/login'}></Navigate>


};

export default PrivetRoute;