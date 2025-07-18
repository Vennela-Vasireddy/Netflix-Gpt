import MovieList from "./MovieList";
import { useSelector } from "react-redux";



const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
    <div className="bg-black text-white">

      <div className="mt md:-mt-52 pl-4 md:pl-12 relative z-20"> 
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Popular Movies"} movies={movies.popularMovies} />

      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />

      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
</div>
    </div> )
  );
};

export default SecondContainer;
