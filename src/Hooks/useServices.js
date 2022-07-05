import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getFetchData = async () => {
            const response = await fetch("http://localhost:5000/services");
            const data = await response.json();
            setServices(data);
            setLoading(false);
        };
        getFetchData();
    }, []);

    return { services, setServices, loading };
};

export default useServices;
