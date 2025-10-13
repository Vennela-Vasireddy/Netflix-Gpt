import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

    const movies = useSelector((state) => state.movies?.nowPlayingMovies);

if(movies.length === 0) return <div>No movie found.</div>;

const mainMovie = movies[0];
const { title, overview, id} = mainMovie;

  return (
    <div className="bg-black pt-[30%] md:pt-0">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainContainer;
