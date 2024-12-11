import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const BookNowButton = () => {
    const { user } = useContext(AuthContext); // Get the authenticated user
    const navigate = useNavigate();

    const handleBookNowClick = () => {
        if (!user) {
            // Redirect to login page if not authenticated
            navigate("/login");
        } else {
            // Proceed with booking if user is authenticated
            navigate("/booking");  // Modify this route as needed
        }
    };

    return (
        <button
            onClick={handleBookNowClick}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 text-sm font-medium rounded shadow hover:from-blue-600 hover:to-blue-700"
        >
            Book Now
        </button>
    );
};

export default BookNowButton;
