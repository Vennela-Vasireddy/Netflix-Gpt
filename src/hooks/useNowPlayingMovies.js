import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { NOW_PLAYING } from "../utils/constants";


const useNowPlayingMovies = () => {
   
   const dispatch = useDispatch();

const nowPlayingFunction = async() => {
    const result = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', NOW_PLAYING)
    const data = await result.json();

   dispatch(addNowPlayingMovies(data.results));
}


useEffect(() => {
    nowPlayingFunction();
}, []);

    // This hook is used to fetch and manage the now playing movies
};

export default useNowPlayingMovies;