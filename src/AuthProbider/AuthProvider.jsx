import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
// import { GithubAuthProvider } from "firebase/auth";
import auth from "../Services/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    const [loading, setLoading]=useState(true)
    const [user, setUser] = useState(null);

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const GitHubLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }

    const LogOutUser = () => {
        setLoading(true)
        return signOut(auth)

    }

    const forgetPassword = (email) => {
    
        return sendPasswordResetEmail(auth, email)
    }


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });

        return () => unSubscribe
    }, [])


    const AuthInfo = { user, googleLogIn, GitHubLogIn, LogOutUser, userLogin, userRegister, forgetPassword, loading };


    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>


        </div>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {

    children: PropTypes.array.isRequired
}