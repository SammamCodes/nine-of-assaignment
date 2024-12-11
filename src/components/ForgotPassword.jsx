import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const initialEmail = location.state?.email || ""; // Prefill email if available
    const [email, setEmail] = useState(initialEmail);

    const handleResetPassword = () => {
        if (email.trim() === "") {
            alert("Please enter a valid email address.");
            return;
        }

        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email sent successfully! Check your email inbox.");
                window.open("https://mail.google.com", "_blank");
                navigate("/login");
            })
            .catch((error) => {
                console.error("Error resetting password:", error.message);
                alert("Failed to send reset email: " + error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Forgot Password</h1>
                    <p className="text-gray-500">Enter your email to reset your password.</p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button
                                onClick={handleResetPassword}
                                className="btn btn-primary"
                            >
                                Reset Password
                            </button>
                        </div>
                    </div>
                </div>
                <p className="text-gray-700 text-sm md:text-base p-6">
                    Remembered your password?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-blue-500 hover:text-blue-700 underline cursor-pointer"
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
