import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { NOW_PLAYING } from "../utils/constants";


const useVideoBackground = (movieId) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);

    const dispatch = useDispatch();

    const getMovieVideos =  async() => 
    {  
        const result = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', NOW_PLAYING )
        const data = await result.json();

        console.log(data);

        const filterData = data.results.filter((video) => video.type == "Trailer");
        const trailer = filterData.length? filterData[0]: data.results[0]

        console.log(trailer);
        dispatch(addTrailerVideo(trailer));

    }
    
    useEffect(() => { 
      !trailer && getMovieVideos();
    }, [])
  
};

export default useVideoBackground;
