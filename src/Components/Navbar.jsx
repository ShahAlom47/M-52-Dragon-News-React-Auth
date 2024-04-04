import { NavLink } from "react-router-dom";
import userLogo from '../../src/assets/image/user.png'
import { AuthContext } from "../AuthProbider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    const { user, LogOutUser } = useContext(AuthContext)

    const logOutHandel = () => {
        LogOutUser()
            .then()
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  text-xl text-gray-500 font-semibold">
                        <NavLink to={'/'}> <li><a>Home</a></li></NavLink>
                        <NavLink to={'/'} > <li><a>About</a></li></NavLink>
                        <NavLink to={'/'} > <li><a>Career</a></li></NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl text-gray-500 font-semibold">
                    <NavLink to={'/'}> <li><a>Home</a></li></NavLink>
                    <NavLink to={'/'} > <li><a>About</a></li></NavLink>
                    <NavLink to={'/'} > <li><a>Career</a></li></NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-2 my-6">
                <div className="w-12 h-12 rounded-full "><img className="rounded-full" src={user ? "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" : userLogo} alt="" /></div>
                {
                    user ? <NavLink ><button onClick={logOutHandel} className="btn bg-gray-700 text-white"> Logout</button></NavLink> : <NavLink to={'/login'} ><button className="btn bg-gray-700 text-white"> LogIn</button></NavLink>
                }


            </div>
        </div>
    );
};

export default Navbar;