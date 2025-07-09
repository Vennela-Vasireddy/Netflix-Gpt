import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NOW_PLAYING } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";


const useTopRatedMovies = () => {
   
   const dispatch = useDispatch();

const getTopRatedFunction = async() => {
    const result = await fetch('https://api.themoviedb.org/3/movie/top_rated', NOW_PLAYING)
    const data = await result.json();

   dispatch(addTopRatedMovies(data.results));
}


useEffect(() => {
    getTopRatedFunction();
}, []);

    // This hook is used to fetch and manage the now playing movies
};

export default useTopRatedMovies
;