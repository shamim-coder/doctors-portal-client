import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content w-full px-10 lg:pr-28">
                {/* <!-- Page content here --> */}
                <h2 className="text-4xl font-bold text-center my-10">Welcome to your Dashboard</h2>
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div class="drawer-side border shadow-lg">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
