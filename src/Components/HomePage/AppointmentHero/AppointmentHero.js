import React from "react";
import doctor from "../../../Assets/images/doctor-small.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import "./AppointmentHero.css";

const AppointmentHero = () => {
    return (
        <section className="appointmentHero md:mt-32">
            <div class="hero container max-auto">
                <div class="flex flex-col lg:flex-row items-center">
                    <img src={doctor} class="image-full mt-[-100px] hidden md:block" alt="" />
                    <div className="p-5 py-10">
                        <h4 className="text-primary font-bold text-xl mb-5">Appointment</h4>
                        <h1 class="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p class="py-6 text-white">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as
                            opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        </p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentHero;
