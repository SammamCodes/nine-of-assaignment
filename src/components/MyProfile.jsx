import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const MyProfile = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">My Profile</h1>
                {currentUser ? (
                    <div className="text-center">
                        <img
                            src={currentUser.photoURL || "default-avatar.jpg"}
                            alt="User Profile"
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-md"
                        />
                        <p className="text-lg text-gray-800 font-medium mb-2">Name: {currentUser.displayName || "No name set"}</p>
                        <p className="text-lg text-gray-800 mb-4">Email: {currentUser.email}</p>
                        <Link 
                            to="/update-profile" 
                            className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Update Profile
                        </Link>
                    </div>
                ) : (
                    <p className="text-xl text-gray-600 mt-4 text-center">Please log in to view your profile.</p>
                )}
            </div>
        </div>
    );
};

export default MyProfile;
