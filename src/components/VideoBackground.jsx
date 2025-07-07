import { useSelector } from 'react-redux';
import useVideoBackground from '../hooks/useVideoBackground';


const VideoBackground = ({movieId}) => {
 const trailerVideo =  useSelector(store => store.movies?.trailerVideo);
   useVideoBackground(movieId);
    return(

        <div>
            <iframe 
           className='w-screen aspect-video'
            src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?autoplay=1&mute=1&controls=0&loop=1&playlist=" + trailerVideo?.key}
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">

            </iframe>

        </div>

    )

}

export default VideoBackground;