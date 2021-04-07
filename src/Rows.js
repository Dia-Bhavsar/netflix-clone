import axios from './axios';
import React, { useState, useEffect } from 'react'
import './Rows.css';
import requests from './Request';

function Rows({ title, fetchUrl, isLargeRow = false }) {
    const [Movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }
        fetchData();
    }, [fetchUrl]);

    console.log(Movies)
    return (
        <div className="rows">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    Movies.map(movie => (
                        ((isLargeRow && movie.poster_path) ||(!isLargeRow && movie.backdrop_path)) && (
                            <img
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                key={movie.id}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                    }`} alt={movie.name} />
                        )

                    ))
                }
            </div>
        </div>
    )
}

export default Rows
