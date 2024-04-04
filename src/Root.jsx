import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";



const Root = () => {
    return (
        <div className="poppins">
           
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;