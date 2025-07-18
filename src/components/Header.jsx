import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth/web-extension';
import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX, USER_LOGO, SUPPORTED_LANG } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import {changeLanguage} from  "../utils/configSlice"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
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


   const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
   }
    
    return(
        <div className="absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
           
  <img className="w-44 mx-auto md:mx-0" src= {NETFLIX} alt="logo">
      </img>

     { user && <div className="flex items-center gap-4 p-2">
        {
            showGptSearch &&  <select className="p-1.5 m-2 bg-white text-black rounded font-blod" onChange={handleLanguageChange}>

            {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                ))}

        </select>
        }
       

        <button className=" flex gap-1 p-1.5 font-bold text-black rounded cursor-pointer bg-white" 
        onClick={handleGptSearchView}> 
 {showGptSearch ? <> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg> Home </>  : <> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg> GPT Search </>}  </button>

        <img className="w-8 h-8 cursor-pointer" src={USER_LOGO} ></img>

<button className="p-2 font-bold text-white rounded cursor-pointer" onClick={handleSignOut} > Sign Out  </button>

      </div> }
      
        </div>


    )
    
}

export default Header;