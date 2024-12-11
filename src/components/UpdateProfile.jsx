import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase.init";

const UpdateProfile = () => {
    const { currentUser } = useContext(AuthContext);
    const [name, setName] = useState(currentUser?.displayName || "");
    const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || "");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL,
            });
            //console.log("Profile updated successfully!");
            navigate("/my-profile"); // Redirect to the My Profile page after successful update
        } catch (error) {
            console.error("Error updating profile:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Update Profile</h1>
                <form onSubmit={handleUpdate}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="photoURL" className="block text-lg font-medium text-gray-700 mb-2">Photo URL:</label>
                        <input
                            type="url"
                            id="photoURL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="px-8 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out" 
                            disabled={loading}
                        >
                            {loading ? "Updating..." : "Update Information"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
