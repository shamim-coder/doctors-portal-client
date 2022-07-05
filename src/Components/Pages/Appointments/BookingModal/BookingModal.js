import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Utilities/Firebase.init";

const BookingModal = ({ setTreatment, treatment, date }) => {
    const { serviceName, slot } = treatment;
    const selectedDate = date && format(date, "PP");

    const [user] = useAuthState(auth);

    const handleBooking = (e) => {
        e.preventDefault();
        const doctor = e.target.doctor.value;
        const time = e.target.time.value;
        const appointmentDate = e.target.date.value + " " + time;
        const user = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;

        const patientInfo = { serviceName, doctor, appointmentDate, user, phone, email };

        console.log(patientInfo);
        e.target.reset();
        setTreatment(null);
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
                            Booking for : <span className="text-primary">{serviceName}</span>
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
                            <button className="btn bg-darker text-base text-gray-300 font-normal">Submit</button>
                        </div>
                    </form>
                    {/* 
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">
                            Yay!
                        </label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
