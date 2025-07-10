import React from 'react';
import { TMDB_IMAGE_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
    if(!posterPath) return null;
    return (
        <div className="pr-4 w-40">
            <img src={TMDB_IMAGE_URL + posterPath} alt="Movie Poster" />
        </div>
    );
};

export default MovieCard;   