import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../firebase.init';
import SmallLoading from './SmallLoading';

const Navbar = () => {

    const [user, loading] = useAuthState(auth)

    const menuItems = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/services'>Services</Link>
        </li>
        <li>
            <Link to='/'>About</Link>
        </li>
    </>

    return (
        <div className="navbar z-20 sticky top-0 bg-base-100 border-b-2 shadow-lg md:px-36">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Pathshala</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {
                loading ? <div className="navbar-end"><SmallLoading></SmallLoading> </div> : <div className="navbar-end">
                    {
                        user ? <>
                            <button className='btn btn-ghost btn-xs mr-2'>{user?.displayName?.slice(0, 11)}</button>
                            <button onClick={() => signOut(auth)} className='btn btn-primary'>Logout</button></> :
                            <Link to='/login' className="btn">Login</Link>
                    }
                </div>
            }
        </div>

    );
};

export default Navbar;