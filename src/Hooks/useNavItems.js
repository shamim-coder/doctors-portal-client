import { useEffect, useState } from "react";

const useNavItems = () => {
    const [navItems, setNavItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getFetchData = async () => {
            const response = await fetch("https://doctors-portal-shamim.herokuapp.com/navItems");
            const data = await response.json();
            setNavItems(data);
            setLoading(false);
        };
        getFetchData();
    }, []);

    return { navItems, setMenu: setNavItems, loading };
};

export default useNavItems;
