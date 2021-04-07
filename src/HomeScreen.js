import React from 'react';
import Banner from './Banner';
import './HomeScreen.css';
import Nav from './Nav';
import requests from './Request';
import Rows from './Rows';

function HomeScreen() {
    return (
        <div className="homescreen">
            <Nav />

            <Banner />

            <Rows
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOrignals}
                isLargeRow
            />

            <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Rows title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
            <Rows title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />
            <Rows title="Romance Movie" fetchUrl={requests.fetchRomanceMovie} />
            <Rows title="Documentries" fetchUrl={requests.fetchDocumentries} />

        </div>
    )
}

export default HomeScreen
