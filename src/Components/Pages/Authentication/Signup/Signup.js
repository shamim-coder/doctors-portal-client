import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Utilities/Firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { UserContext } from "../../../../App";

const Signup = () => {
    const [user, setUser] = useContext(UserContext);
    // const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        // defaultValues: {
        //     name: "Shamim Reza",
        //     email: "wpshamim@gmail.com",
        // },
    });

    const [createUserWithEmailAndPassword, signupUser, loading, signupError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const handleSignup = async (data) => {
        const displayName = data.name;
        const photoURL = "https://thumbs.dreamstime.com/b/man-hipster-avatar-cartoon-guy-black-hair-man-hipster-avatar-cartoon-guy-black-hair-flat-icon-blue-background-user-223717055.jpg";
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName, photoURL });
        setUser(signupUser);
        reset();
    };

    useEffect(() => {
        if (signupUser || googleUser) {
            navigate(from, { replace: true });
        }
    }, [from, googleUser, navigate, signupUser]);

    // const handleSignup = async (data) => {
    //     setLoading(true);
    //     await createUserWithEmailAndPassword(auth, data.email, data.password)
    //         .then(async (userCredential) => {
    //             await updateProfile(userCredential.user, {
    //                 displayName: data.name,
    //                 photoURL: "https://thumbs.dreamstime.com/b/man-hipster-avatar-cartoon-guy-black-hair-man-hipster-avatar-cartoon-guy-black-hair-flat-icon-blue-background-user-223717055.jpg",
    //             }).then(() => {
    //                 setUser(userCredential.user);
    //                 reset();
    //                 setLoading(false);
    //                 navigate(from, { replace: true });
    //             });
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorMessage);
    //         });
    // };

    return (
        <section className="pb-20">
            <div className="card-body w-3/12 mx-auto shadow mt-14">
                <h2 className="text-2xl text-center font-semibold">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)} action="">
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: { value: true, message: "Name is required" } })} type="text" placeholder="name" className="input input-bordered" />

                        {errors.name?.type === "required" && <span className="label text-error text-sm">{errors.name.message}</span>}
                    </div>
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
                                    value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/g,
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
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "password is required",
                                },
                                pattern: {
                                    value: /(?=.*?[a-z])(?=.*?[0-9]).{6,}/g,
                                    message: "Password should at least one digit, one letter and minimum 6 characters",
                                },
                            })}
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                        />
                        {errors.password?.type === "required" && <span className="label text-error text-sm">{errors.password.message}</span>}

                        {errors.password?.type === "pattern" && <span className="label text-error text-sm">{errors.password.message}</span>}
                        <label className="label">
                            <Link to="/forgot" className="label-text-alt link link-hover">
                                Forgot password?
                            </Link>
                        </label>
                    </div>
                    <div className="form-control">
                        <button type="submit" className={`btn ${loading && "loading"} btn-darker`}>
                            Create Account
                        </button>
                    </div>
                </form>
                <p className="text-sm text-center">
                    Already have an account?{" "}
                    <Link className="text-primary" to="/login">
                        Login
                    </Link>
                </p>
                <div className="divider">OR</div>
                <div className="form-control">
                    <button onClick={async () => await signInWithGoogle()} className={`btn ${googleLoading && "loading"} btn-darker`}>
                        CONTINUE WITH GOOGLE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Signup;
