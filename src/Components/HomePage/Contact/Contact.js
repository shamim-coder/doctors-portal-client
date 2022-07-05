import React from "react";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact pb-20">
            <div className="text-center pt-20 mb-10">
                <h4 className="text-xl text-primary font-bold mb-3">Contact Us</h4>
                <h2 className="text-4xl text-white">Stay connected with us</h2>
            </div>

            <form className="w-3/12 mx-auto" action="">
                <input type="email" placeholder="Type your email" className="input w-full input-bordered block mb-5" />
                <input type="text" placeholder="Subject" className="input w-full block input-bordered mb-5" />
                <textarea className="textarea block input-bordered w-full mb-5" placeholder="Your message"></textarea>
                <PrimaryButton center="center">Submit</PrimaryButton>
            </form>
        </section>
    );
};

export default Contact;
