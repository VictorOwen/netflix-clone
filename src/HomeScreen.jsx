import React from 'react';
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';
import requests from './Request';
import Rows from './Row';

function HomeScreen() {
 
    return (
      <>
       <div className="homeScreen">
        <Nav/>
        <Banner/>

    
        <Rows
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />

        <Rows
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
        />
        <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Rows title="Sci-Fi Movies" fetchUrl={requests.fetchSciFiMovies} />
        <Rows title="Western Movies" fetchUrl={requests.fetchWesternMovies} />
        <Rows title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
        <Rows title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
        <Rows title="TV Shows" fetchUrl={requests.fetchTVShows} />
        <Rows title="Family Movies" fetchUrl={requests.fetchFamilyMovies} />
        <Rows title="Upcoming Movies" fetchUrl={requests.fetchUpcomingMovies} />
        <Rows title="Popular Movies" fetchUrl={requests.fetchPopularMovies} />
        <Rows title="Now Playing Movies" fetchUrl={requests.fetchNowPlayingMovies} />
        <Rows title="Latest Movies" fetchUrl={requests.fetchLatestMovies} />
        <Rows title="Search Movies" fetchUrl={requests.fetchSearchMovies} />


       </div>
      </>
    ); 
  }
  
  export default HomeScreen