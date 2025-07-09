import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang)
    return (

        <div className="pt-[12%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12 rounded-md">
                <input className="m-2 p-3 col-span-9 bg-white rounded-md" type="text" placeholder= {lang[langKey].gptSearchPlaceholder} />
                <button className="bg-red-700 text-white rounded-md col-span-3 m-2 p-2 px-4" >  {lang[langKey].search}</button>
            </form>
        </div>
    );
};

export default GptSearchBar;
