import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { NOW_PLAYING } from "../utils/constants";


const useTopRatedMovies = () => {
   
   const dispatch = useDispatch();

const getTopRatedFunction = async() => {
    const result = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', NOW_PLAYING)
    const data = await result.json();

   dispatch(topRatedMovies(data.results));
}


useEffect(() => {
    getTopRatedFunction();
}, []);

    // This hook is used to fetch and manage the now playing movies
};

export default useTopRatedMovies
;