import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51Ie0plISVl2W76LiBjinYiimzehXpCaZehT01TnGzcVZDf5O6gHgZjy1jCPrvRMwXiqdjNM9YnZ59skZWf5xZvy700xSGTBEu5");

const Payment = () => {
    const { id } = useParams();

    const { data: appointment, isLoading } = useQuery(["booking", id], async () => {
        const res = await fetch(`http://localhost:5000/booking/${id}`);
        return await res.json();
    });

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="flex gap-9">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p className="text-success">Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Payment for {appointment.treatmentName}</h2>
                    <p>
                        Your appointment on <span className="text-orange-600">{appointment.date}</span> at <span className="text-orange-600">{appointment.slot}</span>
                    </p>
                    <p>Payment Amount: ${appointment.price}</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mt-10">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
