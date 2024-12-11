import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const { currentUser, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => console.log("User signed out successfully")
        )
            .catch((error) => console.error("Error signing out:", error.message));
    };

    const links = (
        <>
            <li><NavLink to="/" className="hover:text-primary">Home</NavLink></li>
            <li><NavLink to="/login" className="hover:text-primary">Login</NavLink></li>
            <li><NavLink to="/register" className="hover:text-primary">Register</NavLink></li>
            <li><NavLink to="/my-profile" className="hover:text-primary">My Profile </NavLink></li>
            <li><NavLink to="/update-profile" className="hover:text-primary">Updated Profile  </NavLink></li>
            <li><NavLink to="/*" className="hover:text-primary"> Not Found   </NavLink></li>
            {currentUser && (
                <>
                    
                    <li><NavLink to="/profile" className="hover:text-primary">Lostventure</NavLink></li>
                    <li><NavLink to="/orders" className="hover:text-primary">Hotels </NavLink></li>
                    <li><NavLink to="/adventure" className="hover:text-primary">Adventure Details  </NavLink></li> 
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-md px-4 md:px-10">
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                        aria-label="Open Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-50"
                    >
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl font-bold">TGA</Link>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-4">{links}</ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end flex items-center space-x-4">
                {currentUser ? (
                    <div className="relative group flex items-center space-x-2">
                        {currentUser.photoURL ? (
                            <img
                                src={currentUser.photoURL}
                                alt="User Profile"
                                className="w-8 h-8 rounded-full border-2 border-primary cursor-pointer"
                            />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-primary flex items-center justify-center">
                                <span className="text-xs font-medium text-white">U</span>
                            </div>
                        )}
                        <span className="hidden group-hover:block absolute bottom-10 bg-gray-800 text-white text-xs rounded px-2 py-1">
                            {currentUser.displayName || "User"}
                        </span>
                        <button onClick={handleSignOut} className="btn btn-primary btn-sm">
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <Link to="/login" className="btn btn-outline btn-sm">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
