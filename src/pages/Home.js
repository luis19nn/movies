import React, { useEffect, useState } from "react";
import { FEATURED_API, GENRE_API } from "../api/auth";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";
import MoviesList from "../components/MoviesList";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [removeSpinner, setRemoveSpinner] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const URL_CONFIGURED = `${FEATURED_API}&page=${currentPage}`;
        fetch(URL_CONFIGURED)
            .then((res) => res.json())
            .then((newMovies) => {
                setMovies((prevMovies) => [
                    ...prevMovies,
                    ...newMovies.results,
                ]);

                setRemoveSpinner(true);
            });

        fetch(GENRE_API)
            .then((res) => res.json())
            .then((data) => {
                setGenres(data.genres);
            });
    }, [currentPage]);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                setCurrentPage(
                    (currentPageInsideState) => currentPageInsideState + 1
                );

                setRemoveSpinner(false);
            }
        });

        intersectionObserver.observe(document.querySelector("#sentinel"));

        return () => intersectionObserver.disconnect();
    }, []);

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavigationBar toggle={toggle} />

            <MoviesList
                movies={movies}
                genres={genres}
                removeSpinner={removeSpinner}
            />
        </>
    );
};

export default Home;
