import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './videoTitle';
import VideoBackground from './videoBackground';

const MainContainer = () => {

    const movies = useSelector((state) => state.movies?.nowPlayingMovies);

if(movies.length === 0) return <div>No movie found.</div>;

const mainMovie = movies[0];
const { title, overview, id} = mainMovie;

  return (
    <div className="bg-black">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainContainer;