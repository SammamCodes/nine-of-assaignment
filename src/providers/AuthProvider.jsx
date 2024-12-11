import React, { createContext, useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import auth from '../firebase.init'; // Import Firebase initialization

// Create a context to share authentication state
const AuthContext = createContext(null);

// Initialize Google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create a new user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setLoading(false);
                return userCredential;
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error creating user:', error);
                throw error;
            });
    };

    // Sign in user with email and password
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setLoading(false);
                return userCredential;
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error signing in user:', error);
                throw error;
            });
    };

    // Sign in with Google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                setLoading(false);
                return result;
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error with Google sign-in:', error);
                throw error;
            });
    };

    // Sign out the user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error signing out:', error);
                throw error;
            });
    };

    // Monitor the authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            setCurrentUser(user || null); // Set user state based on auth state
        });

        // Clean up the listener when the component is unmounted
        return () => unsubscribe();
    }, []);

    // Pass authentication state and functions to the context
    const authInfo = {
        currentUser,
        createUser,
        signInUser,
        signOutUser,
        loading,
        signInWithGoogle,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export { AuthContext };
