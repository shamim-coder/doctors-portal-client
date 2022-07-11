import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const email = user?.email;

    useEffect(() => {
        fetch(`https://doctors-portal-shamim.herokuapp.com/admin/${email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setAdmin(data.isAdmin);
                setAdminLoading(false);
            });
    }, [email]);
    return [admin, adminLoading];
};

export default useAdmin;
