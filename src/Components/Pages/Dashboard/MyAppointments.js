import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Utilities/Firebase.init";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Error from "../../Shared/Error/Error";
import { useEffect, useState } from "react";

const MyAppointments = () => {
    const [user] = useAuthState(auth);
    // const [isLoading, setIsLoading] = useState(true);
    // const [booking, setBooking] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (user) {
    //         fetch(`http://localhost:5000/booking?email=${user?.email}`, {
    //             method: "GET",
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //             },
    //         })
    //             .then((res) => {
    //                 if (res.status === 401 || res.status === 403) {
    //                     signOut(auth);
    //                     localStorage.removeItem("accessToken");
    //                     navigate("/login");
    //                 }
    //                 return res.json();
    //             })
    //             .then((data) => {
    //                 setBooking(data);
    //                 setIsLoading(false);
    //             });
    //     }
    // }, [navigate, user]);

    const { data: booking, isLoading } = useQuery(["booking", user?.email], async () => {
        const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`, {
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
                    </tr>
                </thead>
                <tbody>
                    {booking.map((book, index) => (
                        <tr key={book._id}>
                            <th>{index + 1}</th>
                            <td>{book.treatmentName}</td>
                            <td>{book.doctor}</td>
                            <td>{book.date}</td>
                            <td>{book.slot}</td>
                            <td>{book.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointments;
