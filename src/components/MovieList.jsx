import MovieCard from "./MovieCard";


const MovieList = ({ title, movies }) => {
    console.log(movies);
return ( 

    <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
        <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
{movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}

        </div>
    </div>

    </div>



);

}

export default MovieList;