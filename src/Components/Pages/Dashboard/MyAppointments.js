import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Utilities/Firebase.init";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const MyAppointments = () => {
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const { data: booking, isLoading } = useQuery(["booking", user?.email], async () => {
        const res = await fetch(`https://doctors-portal-shamim.herokuapp.com/booking?email=${user?.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/login");
        }
        return await res.json();
    });

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Treatment</th>
                        <th>Doctors</th>
                        <th>Date</th>
                        <th>Slot</th>
                        <th>Phone</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {booking.map((book, index) => {
                        const { _id, treatmentName, doctor, date, slot, phone, price, paid } = book;
                        return (
                            <tr key={_id}>
                                <th>{index + 1}</th>
                                <td>{treatmentName}</td>
                                <td>{doctor}</td>
                                <td>{date}</td>
                                <td>{slot}</td>
                                <td>{phone}</td>
                                <td>${price}</td>
                                <td>
                                    {price && !paid ? (
                                        <Link to={`/dashboard/payment/${_id}`} className="text-white py-1 text-base btn-sm btn-success">
                                            Pay
                                        </Link>
                                    ) : (
                                        <p className="text-success text-base">Paid</p>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointments;
