import MovieList from "./MovieList"
import { useSelector } from 'react-redux';


const GptSearchSuggestion = () => {

    const { movieNames, movieResults} = useSelector((store) => store.gpt)
    if(!movieNames) return null;
   
    return (
        <div className="p-4 m-4 text-white">

            <div>
                { movieNames.map((movieName, index)=> (

                    <MovieList 
                    keys={MovieName}
                        title = {MovieName}
                        movies = {movieResults[index]} />

                ) )}
            </div>
           
        </div>
    );
};

export default GptSearchSuggestion;
