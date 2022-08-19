import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {

    const menuItems = <>
        <li>
            <a href='/'>Home</a>
        </li>
        <li>
            <a href='/'>Services</a>
        </li>
        <li>
            <a href='/'>About</a>
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
                <a href='/' className="btn btn-ghost normal-case text-xl">Pathshala</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                   {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn">Get started</Link>
            </div>
        </div>

    );
};

export default Navbar;