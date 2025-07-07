import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth/web-extension';
import react, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX, USER_LOGO } from "../utils/constants";

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

        <img className="w-8 h-8" src={USER_LOGO} ></img>

<button className="p-2 font-bold text-white rounded cursor-pointer" onClick={handleSignOut} > Sign Out  </button>

      </div> }
      
        </div>


    )
    
}

export default Header;