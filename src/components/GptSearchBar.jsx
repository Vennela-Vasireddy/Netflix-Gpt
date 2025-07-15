import { usedispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import {useRef} from "react";
import openapi from "../utils/openApi";
import NOW_PLAYING from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";


const GptSearchBar = () => {

    const dispatch = usedispatch();
    const langKey = useSelector((store) => store.config.lang)
    const searchText = useRef(null);

const searchMovieTmdb = async(movie) => {
     const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', NOW_PLAYING)
        const json = await data.json()
        return json.results

    }


    const handleSearch = async(  ) => { 

const gptQuery = "Act as a movie recommendation system and suggest me based on this query: " +  searchText.current.value
 + ". Only give me top 5 movies names in a comma seperated fashion, for example: golamal, don, guru, sakhi, fashion"

        const gptResults = await openapi.chat.completions.create({
            messages: [{role: "user", content: gptQuery}],
            model: "gpt-3.5-turbo"
        })

        console.log(gptResults)

        if(!gptResults.choices)
            {

            }

        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
        const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie))
        const tmdbResults = await Promise.all(promiseArray)

        dispatch(addGptMovieResult({movieNames:gptResults, movieResults: tmdbResults } ))
};

    return (

        <div className="pt-[35%] flex justify-center" onSubmit={(e) => e.preventDefault()}>
            <form className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-md">
                <input ref={searchText} className="m-2 p-3 col-span-9 bg-white rounded-md" type="text" placeholder= {lang[langKey].gptSearchPlaceholder} />
                <button className="bg-red-700 text-white rounded-md col-span-3 m-2 p-2 px-4" onClick={handleSearch} >  {lang[langKey].search}</button>
            </form>
        </div>
    );
};

export default GptSearchBar;
