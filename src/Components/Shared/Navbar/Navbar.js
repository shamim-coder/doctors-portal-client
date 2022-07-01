import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = {
        backgroundColor: "#3A4256",
        color: "white",
        borderRadius: "5px",
    };

    const navItems = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Appointments",
            path: "/appointments",
        },
        {
            name: "Reviews",
            path: "/reviews",
        },
        {
            name: "Contact Us",
            path: "/contact",
        },
        {
            name: "Login",
            path: "/login",
        },
    ];

    return (
        <section className="container mx-auto">
            <div class="navbar bg-base-100">
                <div class="navbar-start flex-1">
                    <d iv class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems.map((nav) => (
                                <li>
                                    <Link to={nav.path}>{nav.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </d>
                    <Link to="/" class="font-semibold text-2xl">
                        Doctors Portal
                    </Link>
                </div>

                <div class="flex-none gap-2 ">
                    <div class="hidden lg:flex">
                        <ul class="flex gap-5 p-0 mr-5">
                            {navItems.map((nav) => (
                                <li>
                                    <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} className="px-3 py-2" to={nav.path}>
                                        {nav.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div class="dropdown dropdown-end ">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt="" />
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to="/profile" class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/settings">Settings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
