import Header from './Header';
import React, { useState, useRef } from 'react';
import validate from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { updateProfile } from 'firebase/auth/web-extension';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_BACKGROUND } from '../utils/constants';

const Login = () => {


    console.log("Login component rendered");
const dispatch = useDispatch();
const[showSignInForm, setShowSignInForm] = useState(true);
const[errorMessage, setErrorMessage] = useState('');

const nameref = useRef(null);
const emailRef = useRef(null);
const passwordRef = useRef(null);

const handlevalidation = () => {

   const message = validate(emailRef.current.value, passwordRef.current.value)
   setErrorMessage(message);
   if(message) return;

    if(!showSignInForm) {
       
createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: nameref.current.value,
    photoURL: "https://example.com/jane-q-user/profile.jpg"})
      .then(() => {
               const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL
                    })
                );
      })
      .catch((error) => {
        // An error occurred
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage( errorCode + " - " + errorMessage);
      })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage( errorCode + " - " + errorMessage);
  });


    } else {
       
signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
        setErrorMessage( errorCode + " - " + errorMessage);

  });


    }
}

const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
}

    return(
        <div> 
        <Header/>
        <div className="absolute blur-none"> 
            
            <img className="h-screen object-cover md:h-auto md:object-none" src={NETFLIX_BACKGROUND} alt="background-image" />
           
    </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-4/12 absolute bg-black p-12 my-28 mx-auto right-0 left-0 text-white opacity-84 rounded-lg">
            <h1 className="font-bold text-3xl py-4">
{showSignInForm? "Sign In": "Sign Up"}

            </h1>

{!showSignInForm &&
                <input type="text" placeholder="Name" ref={nameref} className="p-3 my-4 w-full border-1 border-amber-50 rounded-lg"/>}
                
                <input type="text" placeholder="Email or Mobile Number" ref={emailRef} className="p-3 my-4 w-full border-1 border-amber-50 rounded-lg"/>
                <input type="password" placeholder="Password" ref={passwordRef} className="p-3 my-4 w-full border-1 border-amber-50 rounded-lg"/>
                
                <p className="text-red-500">{errorMessage}</p>
                <button className="bg-red-600 p-3 my-6 w-full rounded-lg cursor-pointer" onClick={handlevalidation}>
{showSignInForm? "Sign In": "Sign Up"}

                </button>

                <p className="py-3 cursor-pointer text-gray-400 text-s" onClick={toggleSignInForm}>
                    {showSignInForm? "New to Netflix? Sign Up." : "Already have an account? Sign In now!"}
                     </p>

                     <p className="text-gray-400 text-xs">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-500 underline cursor-pointer">Learn more</span>

                         </p>
            </form>
        

        </div>
    )
}

export default Login;