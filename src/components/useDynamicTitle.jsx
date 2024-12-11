import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const routeTitles = {
            "/": "Home - Eco-Adventures",
            "/profile": "Profile - Eco-Adventures",
            "/about": "About Us - Eco-Adventures",
            "/contact": "Contact Us - Eco-Adventures",
            "/tours": "Tours - Eco-Adventures",
        };

        const title = routeTitles[location.pathname] || "Eco-Adventures";
        document.title = title;
    }, [location]);
};

export default useDynamicTitle;
