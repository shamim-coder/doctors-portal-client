import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import auth from "../../Utilities/Firebase.init";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log(admin);

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-full px-10 lg:pr-28">
                {/* <!-- Page content here --> */}
                <h2 className="text-4xl font-bold text-center my-10">Welcome to your Dashboard</h2>
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side border shadow-lg">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <NavLink to="my-appointment">My Appointment</NavLink>
                    </li>
                    <li>
                        <NavLink to="my-review">My Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="setting">Setting</NavLink>
                    </li>
                    {admin && (
                        <li>
                            <NavLink to="users">All Users</NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
