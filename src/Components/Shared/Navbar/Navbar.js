import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import useNavItems from "../../../Hooks/useNavItems";
import auth from "../../Utilities/Firebase.init";

const Navbar = () => {
    const activeStyle = {
        backgroundColor: "#3A4256",
        color: "white",
        borderRadius: "5px",
    };

    const { navItems } = useNavItems();
    const [user] = useAuthState(auth);

    return (
        <header className="py-5 shadow">
            <div className="navbar bg-base-100 container mx-auto md:px-20">
                <div className="navbar-start flex-1">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems.map((nav) => (
                                <li key={nav._id}>
                                    <Link to={nav.path}>{nav.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link to="/" className="font-semibold text-2xl">
                        Doctors Portal
                    </Link>
                </div>

                <div className="flex-none gap-2 ">
                    <div className="hidden lg:flex">
                        <ul className="flex gap-5 p-0 mr-5">
                            {navItems.map((nav) => (
                                <li key={nav._id}>
                                    <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} className="px-3 py-2" to={nav.path}>
                                        {nav.name}
                                    </NavLink>
                                </li>
                            ))}

                            {!user && (
                                <li>
                                    <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} className="px-3 py-2" to="/login">
                                        Login
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                    {user && (
                        <div className="dropdown dropdown-end ">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img className="" src={user && auth?.currentUser?.photoURL} alt="" />
                                </div>
                            </label>
                            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <NavLink to="/profile" className="justify-between">
                                        Profile
                                        <span className="badge">{user?.displayName}</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard">Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => signOut(auth)} to="/login">
                                        Logout
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
