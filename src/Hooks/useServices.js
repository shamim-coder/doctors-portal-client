import { useQuery } from "react-query";

const useServices = (date) => {
    const {
        data: services,
        isLoading,
        refetch,
    } = useQuery(["available", date], async () => {
        const res = await fetch(`https://doctors-portal-shamim.herokuapp.com/available?date=${date}`);
        return await res.json();
    });

    return { services, loading: isLoading, refetch };
};

export default useServices;
