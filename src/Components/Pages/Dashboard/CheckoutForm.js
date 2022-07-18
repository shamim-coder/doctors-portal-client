import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../../Shared/Spinner/Spinner";

const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const { price, patientName, email, phone, treatmentName, _id, date, slot } = appointment;

    useEffect(() => {
        fetch("https://doctors-portal-shamim.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [price]);

    if (loading) {
        // return <Spinner />;
    }

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (paymentError) {
            setCardError(paymentError.message);
        } else {
            setTransactionId(paymentMethod.id);
            setCardError("");
        }

        // Confirm Card Payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: patientName,
                    email: email,
                    phone: phone,
                },
            },
        });

        if (intentError) {
            setLoading(false);
            setCardError(intentError.message);
        } else {
            console.log(paymentIntent);
            setCardError("");
            setSuccess(`Payment successfully complete for ${treatmentName}`);

            const paymentInfo = {
                amount: paymentIntent.amount / 100,
                transactionId: paymentIntent.id,
                currency: paymentIntent.currency,
                patientName,
                email,
                phone,
                treatmentName,
                date,
                slot,
            };

            fetch(`https://doctors-portal-shamim.herokuapp.com/booking/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(paymentInfo),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setLoading(false);
                });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button className={`btn btn-success mt-5 ${loading && "loading"}`} type="submit" disabled={!stripe || success}>
                    {loading ? "" : "PAY"}
                </button>
            </form>
            {cardError && <p className="text-error">{cardError}</p>}
            {success && <p className="text-success">{success}</p>}
            {success && (
                <p className="text-success mt-3">
                    Transaction ID: <span className="text-orange-700">{transactionId}</span>
                </p>
            )}
        </div>
    );
};

export default CheckoutForm;
