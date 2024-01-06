import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineLogout } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const Navbar = () => {
   
    const {user,logOut} = useContext(AuthContext);
    const handleSignOut = ()=>{
        logOut()
          .then()
          .catch()
    }

    const NavItem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/shop'>Shop</NavLink></li>
        <li><NavLink to='/cart'>Cart</NavLink></li>
        <li><NavLink to='/addProduct'>Add Products</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        
    </>

    return (
        <div className='px-[5%] py-2'>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                       {
                        NavItem
                       }
                    </ul>
                </div>
                <a className=" normal-case text-xl">
                    <img src={logo} />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        NavItem
                    }
                </ul>
            </div>
            <div className="navbar-end ">
                {
                   user ? <button onClick={handleSignOut} className="btn text-[#ff475f] border border-[#ff475f]"><AiOutlineLogout/></button>:
                   <Link to='/login'><a className="btn text-[#ff475f] border border-[#ff475f]"><FaUserAlt/></a></Link>
                }
            </div>
        </div>
        </div>
    );
};

export default Navbar;