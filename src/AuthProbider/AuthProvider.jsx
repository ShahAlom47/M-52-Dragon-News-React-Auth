import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
// import { GithubAuthProvider } from "firebase/auth";
import auth from "../Services/firebase.config";

 export const  AuthContext= createContext(null);

 const googleProvider = new GoogleAuthProvider();
 

const gitProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {

 const [user, setUser ] = useState(12345);

 const userLogin = (email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
 }
 const userRegister =(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
 }
    
const googleLogIn=()=>{
return signInWithPopup (auth, googleProvider)
}


const GitHubLogIn=()=>{
return signInWithPopup(auth, gitProvider)
}

const LogOutUser = () => {
    return signOut(auth)

}

const forgetPassword =(email)=>{

return sendPasswordResetEmail(auth, email)
}


useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    return () => unSubscribe
}, [])


  const AuthInfo = {user,googleLogIn,GitHubLogIn,LogOutUser, userLogin ,userRegister, forgetPassword};


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