
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUsOn = () => {
    return (
        <div>
            <h1 className=" text-xl font-bold text-gray-500 my-4">Login With</h1>


            <div className="font-medium  text-gray-500 ">

                <div className="flex items-center font-medium border-[3px] p-4  rounded-t-lg  ">
                    <span className="bg-gray-100 text-xl rounded-full mr-3 p-1 text-blue-700">  <FaFacebookF /></span>
                    <a href="https://www.facebook.com/" target="blank"> Facebook</a>
                </div>
                <div className="flex items-center font-medium  p-4  border-x-[3px]  ">
                    <span className="bg-gray-100 text-xl rounded-full mr-3 p-1  text-blue-600" >  <FaTwitter></FaTwitter> </span>
                    <a href="#"> Twitter</a>
                </div>
                <div className="flex items-center font-medium border-[3px] p-4  rounded-b-lg  ">
                    <span className="bg-gray-100 text-xl rounded-full mr-3 p-1 text-red-700 ">  <FaInstagram /></span>
                    <a href="#"> Instagram</a>
                </div>



            </div>
        </div>
    );
};

export default FindUsOn;