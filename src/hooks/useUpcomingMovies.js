import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NOW_PLAYING } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";



const useUpcomingMovies = () => {

   const dispatch = useDispatch();

const getUpcomingFunction = async() => {
    const result = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', NOW_PLAYING)
    const data = await result.json();

   dispatch(addUpcomingMovies(data.results));

        

}


useEffect(() => {
    getUpcomingFunction();
}, []);

    // This hook is used to fetch and manage the now playing movies
};

export default useUpcomingMovies;