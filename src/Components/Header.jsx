import logo from '../../src/assets/image/logo.png'
import moment from 'moment';
moment().format('LLLL');


const Header = () => {
    return (
        <div className=" flex flex-col justify-center items-center my-4">
           
            <img src={logo} alt="" />
            <p className=" text-gray-500 font-semibold">Journalism Without Fear or Favour</p>
            <p className=" text-gray-500 font-bold text-lg">{moment().format("dddd, MMMM D YYYY, h:mm:ss a")}</p>
            
        </div>
    );
};

export default Header;