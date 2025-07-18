import { NETFLIX_BACKGROUND } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestion from "./GptSearchSuggestion";

const GptSearch = () => {
    return (
        <div>
            <div className="fixed blur-xs">                          
                <img className="h-screen object-cover md:h-auto md:object-none"
  src={NETFLIX_BACKGROUND}/>
            </div>
 
            <div  className="relative"> 
                <GptSearchBar />
                <GptSearchSuggestion /> 
            </div>
            
        </div>
    );
};

export default GptSearch;
