import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../../Utilities/Firebase.init";

const ForgotPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleForgotPassword = async (data) => {
        await sendPasswordResetEmail(data.email);
    };

    return (
        <section className="pb-20">
            <div className="card-body w-3/12 mx-auto shadow mt-14">
                <h2 className="text-2xl text-center font-semibold">Forgot Password</h2>
                <form onSubmit={handleSubmit(handleForgotPassword)}>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,
                                    message: "Please input valid email address",
                                },
                            })}
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                        />
                        {errors.email?.type === "required" && <span className="label text-error text-sm">{errors.email.message}</span>}

                        {errors.email?.type === "pattern" && <span className="label text-error text-sm">{errors.email.message}</span>}
                    </div>

                    <div className="form-control">
                        <button type="submit" className={`btn ${sending && "loading"} btn-darker`}>
                            Forgot Password
                        </button>
                    </div>
                </form>
                <p className="text-sm text-center">
                    Don't Wanna Forget?{" "}
                    <Link className="text-primary" to="/login">
                        Login
                    </Link>
                </p>
                <div className="divider">OR</div>
                <div className="form-control">
                    <button className="btn btn-outline">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
