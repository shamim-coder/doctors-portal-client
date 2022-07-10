import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
    const { email } = user;

    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    toast.error("you are not permission to make an admin");
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success("Make an admin successfully");
                }
            });
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {user?.role !== "admin" ? (
                    <button onClick={handleMakeAdmin} className="btn btn-xs">
                        Make Admin
                    </button>
                ) : (
                    "Admin"
                )}
            </td>
            <td>Blue</td>
        </tr>
    );
};

export default UserRow;
