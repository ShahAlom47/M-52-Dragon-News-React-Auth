import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../AuthProbider/AuthProvider";

const LogInWith = () => {
     const {user}=useContext(AuthContext);
     

    const googleLogHendel=()=>{


    }
    const gitLogHendel=()=>{


    }



    return (
        <div>
            
            <h1 className=" text-xl font-bold text-gray-500 mb-4">Login With</h1>
            <div>
                <button onClick={googleLogHendel} className="btn border-[3px] bg-white w-full mb-2"> <span><FaGoogle className="text-red-500"></FaGoogle></span> Login with Google</button>
                <button onClick={gitLogHendel} className="btn border-[3px] bg-white w-full mb-2"> <span><FaGithub className=""></FaGithub> </span> Login with GitHub</button>
               
            </div>
        </div>
    );
};

export default LogInWith;