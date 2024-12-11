import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const navigate = useNavigate();
    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    // Handle standard login
    const handleLogin = (e) => {
        e.preventDefault();
        const name = e.target.name.value;  // Capture the name field
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then((result) => {
                console.log("User signed in:", result.user);
                e.target.reset();
                navigate("/", { replace: true }); // Redirect to home or previous page
            })
            .catch((error) => {
                console.error("Error signing in:", error.message);
                alert("Login failed: " + error.message);
            });
    };

    // Handle Google Sign-in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                console.log("User signed in with Google:", result.user);
                navigate("/", { replace: true }); // Redirect to home after successful login
            })
            .catch((error) => {
                console.error("Error with Google sign-in:", error.message);
                alert("Google sign-in failed: " + error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        {/* Name Input */}
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

                        {/* Email Input */}
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

                        {/* Password Input */}
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
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const email = e.target.form?.email?.value || "";
                                        navigate("/forgot-password", { state: { email } });
                                    }}
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="text-gray-700 text-sm md:text-base p-6">
                        New to this website?{" "}
                        <Link
                            to="/register"
                            className="text-blue-500 hover:text-blue-700 underline"
                        >
                            Register
                        </Link>
                    </p>

                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-ghost p-2"
                    >
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
