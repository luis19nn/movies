import React from "react";
import MovieItem from "../MovieItem";
import { RenderedList, Sentinel } from "./styles";
import Spinner from "../Spinner";

const MoviesList = ({ movies, genres, removeSpinner }) => {
    return (
        <RenderedList>
            {movies.length > 0 &&
                genres.length > 0 &&
                movies.map((movie) => {
                    return genres.map((genre) =>
                        genre.id === movie.genre_ids[0] ? (
                            <MovieItem
                                key={movie.id}
                                movie={movie}
                                genre={genre.name}
                            />
                        ) : null
                    );
                })}

            <Sentinel>
                <div id="sentinel">{!removeSpinner && <Spinner />}</div>
            </Sentinel>
        </RenderedList>
    );
};

export default MoviesList;
