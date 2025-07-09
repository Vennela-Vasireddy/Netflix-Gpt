import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth/web-extension';
import react, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX, USER_LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 const user = auth.currentUser;

const handleSignOut = () => {
signOut(auth).then(() => {
}).catch((error) => {
  navigate('/error');
});
}

const handleGptSearchView = () => {
    dispatch(toggleGptSearchView());
}

useEffect(
    () => {
    
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL
                    })
                );
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });

return () => unsubscribe();
    }, [])

    return(
        <div className="absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
           
  <img className="w-44" src= {NETFLIX} alt="logo">
      </img>

     { user && <div className="flex items-center gap-4 p-2">

        <button className=" flex gap-1 p-1.5 font-bold text-black rounded cursor-pointer bg-white" 
        onClick={handleGptSearchView}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
 GPT Search </button>

        <img className="w-8 h-8 cursor-pointer" src={USER_LOGO} ></img>

<button className="p-2 font-bold text-white rounded cursor-pointer" onClick={handleSignOut} > Sign Out  </button>

      </div> }
      
        </div>


    )
    
}

export default Header;