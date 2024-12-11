import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext); // Correct placement of useContext
    const [error, setError] = useState(null); // State for error messages

    // Password validation function
    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

        if (!hasUpperCase || !hasLowerCase || !isLongEnough) {
            return "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.";
        }
        return null;
    };

    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;

        // Validate password
        const passwordError = validatePassword(password);
        if (passwordError) {
            setError(passwordError);
            return;
        }

        // Clear previous error
        setError(null);

        // Create user
        createUser(email, password)
            .then((result) => {
                console.log("User created successfully:", result.user);
                e.target.reset();
                navigate('/'); // Redirect to home page after successful registration
            })
            .catch((error) => {
                console.error("Error creating user:", error.message);
                setError(error.message); // Set error message for display
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        {/* Error Message */}
                        {error && (
                            <div className="text-red-500 text-sm mb-4">
                                {error}
                            </div>
                        )}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="url"
                                placeholder="Enter photo URL"
                                name="photoUrl"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                    </form>
                    <p className="text-gray-700 text-sm md:text-base p-6">
                        Already have an account? Please{" "}
                        <Link to="/login" className="text-blue-500 hover:text-blue-700 underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
