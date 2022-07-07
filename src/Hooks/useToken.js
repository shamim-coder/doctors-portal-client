import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const email = user?.user?.email;

        const currentUser = { email };

        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(currentUser),
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log("inside token result", result);
                });
        }
    }, [user]);

    return [token, setToken];
};
export default useToken;
