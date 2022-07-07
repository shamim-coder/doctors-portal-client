import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Utilities/Firebase.init";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";

const MyAppointments = () => {
    const [user] = useAuthState(auth);

    const { data: booking, isLoading } = useQuery(["booking", user?.email], async () => {
        const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`);
        return await res.json();
    });

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
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
