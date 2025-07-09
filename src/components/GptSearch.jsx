import { NETFLIX_BACKGROUND } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestion from "./GptSearchSuggestion";

const GptSearch = () => {
    return (
        <div>
            <div className="absolute blur-xs">                          
                <img  src={NETFLIX_BACKGROUND}/>
            </div>
 
            <div  className="relative"> 
                <GptSearchBar />
                <GptSearchSuggestion /> 
            </div>
            
        </div>
    );
};

export default GptSearch;
