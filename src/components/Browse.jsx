import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";


const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return(
        <div>
            {/* <h1>Browse</h1> */}
            <Header/>
            <MainContainer/>
            <SecondContainer/>

        </div>
    );

}

export default Browse;