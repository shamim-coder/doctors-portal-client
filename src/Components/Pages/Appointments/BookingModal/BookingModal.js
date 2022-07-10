import { format } from "date-fns";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Utilities/Firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ setTreatment, treatment, date }) => {
    const { service, slot, refetch } = treatment;
    const selectedDate = date && format(date, "PP");
    const [updating, setUpdating] = useState(false);
    const [user] = useAuthState(auth);

    const handleBooking = (e) => {
        e.preventDefault();
        setUpdating(true);

        const bookingInfo = {
            treatmentId: service._id,
            treatmentName: service.name,
            patientName: user?.displayName,
            doctor: slot?.name,
            date: selectedDate,
            slot: slot?.time,
            email: user?.email,
            phone: e.target.phone.value,
        };

        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingInfo),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    toast.success(`Appointment is set, ${selectedDate} at ${slot?.time}`);
                } else {
                    toast.error(`Already have an appointment on, ${result?.existsData?.date} at ${result?.existsData?.slot}`);
                }
                e.target.reset();
                refetch();
                setTreatment(null);
            });
    };

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>

                    <form onSubmit={handleBooking} className="card-body">
                        <h3 className="text-xl mb-5">
                            Booking for : <span className="text-primary">{service?.name}</span>
                        </h3>
                        <div className="form-control">
                            {/* <label className="label">
                                <span className="label-text">Appointment with:</span>
                            </label> */}
                            <input type="text" name="doctor" defaultValue={slot?.name} readOnly className="input input-bordered read-only:bg-gray-200" />
                        </div>

                        <div className="form-control">
                            {/* <label className="label">
                                <span className="label-text">Appointment Date</span>
                            </label> */}
                            <input type="text" name="time" defaultValue={slot?.time} readOnly className="input input-bordered read-only:bg-gray-200" />
                        </div>

                        <div className="form-control">
                            {/* <label className="label">
                                <span className="label-text">Appointment Date</span>
                            </label> */}
                            <input type="text" defaultValue={selectedDate} name="date" readOnly className="input input-bordered read-only:bg-gray-200" />
                        </div>

                        <div className="form-control">
                            {/* <label className="label">
                                <span className="label-text">Your Name</span>
                            </label> */}
                            <input type="text" defaultValue={user && user.displayName} readOnly name="name" placeholder="Name" className="input input-bordered read-only:bg-gray-200" />
                        </div>

                        <div className="form-control">
                            {/* <label className="label">
                                <span className="label-text">Your Email</span>
                            </label> */}
                            <input type="email" defaultValue={user && user.email} readOnly name="email" placeholder="email" className="input input-bordered read-only:bg-gray-200" />
                        </div>

                        <div className="form-control">
                            {/* <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label> */}
                            <input type="tel" name="phone" placeholder="Phone Number" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className={`btn bg-darker ${updating && "loading"} text-base text-gray-300 font-normal`}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
