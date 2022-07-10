import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import UserRow from "./UserRow";

const Users = () => {
    const getUsers = async () => {
        const res = await fetch("http://localhost:5000/users", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        const data = await res.json();
        return data;
    };

    const { data: users, isLoading, refetch } = useQuery("users", getUsers);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>User Email</th>
                            <th>User Role/Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <UserRow key={user._id} user={user} index={index} refetch={refetch} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
