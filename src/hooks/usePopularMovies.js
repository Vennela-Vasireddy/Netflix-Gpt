import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { NOW_PLAYING } from "../utils/constants";


const usePopularMovies = () => {
   
   const dispatch = useDispatch();

const getPopularFunction = async() => {
    const result = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', NOW_PLAYING)
    const data = await result.json();

   dispatch(addPopularMovies(data.results));
}


useEffect(() => {
    getPopularFunction();
}, []);

    // This hook is used to fetch and manage the now playing movies
};

export default usePopularMovies
;