import React, { useState } from "react";
import AppointmentCalender from "../AppointmentCalender/AppointmentCalender";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";
import { Outlet } from "react-router-dom";
import "./Appointments.css";
import BookingModal from "../BookingModal/BookingModal";

const Appointments = () => {
    const [selected, setSelected] = useState(new Date());
    const [treatment, setTreatment] = useState({});

    return (
        <section className="pb-20">
            <div className="calender">
                <AppointmentCalender selected={selected} setSelected={setSelected} />
            </div>

            <div className="container max-auto">
                <AvailableAppointments selected={selected} />
            </div>
            <Outlet context={[treatment, setTreatment, selected]} />
            {treatment && <BookingModal date={selected} setTreatment={setTreatment} treatment={treatment} />}
        </section>
    );
};

export default Appointments;
