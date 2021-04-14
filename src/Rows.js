import axios from './axios';
import React, { useState, useEffect } from 'react'
import './Rows.css';
import requests from './Request';
import HoverVideoPlayer from 'react-hover-video-player';

function Rows({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    // const [video, setVideo] = useState([]);
    // const [isVideoPlaying, setVideoPlaying] = useState(false);

    const base_url = "https://image.tmdb.org/t/p/original/";
    const youtube_url = "https://www.youtube.com/watch?v="
    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }
        fetchData();
    }, [fetchUrl]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }
        fetchData();
    }, [])

    console.log(movies)
    return (
        <div className="rows">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map(movie => (
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                key={movie.id}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                    }`} alt={movie.name} />

                        )

                    ))
                }

                {/* {
                    Movies.map(movie => (
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <HoverVideoPlayer
                                videoSrc={base_url + movie.id}
                                // We should display an image over the video while it is paused
                                pausedOverlay={
                                    <img
                                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                        key={movie.id}
                                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                            }`} alt={movie.name} />
                                }
                            />
                        ))
                    )
                } */}


            </div>
        </div>
    )
}

export default Rows
