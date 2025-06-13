import React from 'react';
import './HomeScreen.css';
import Nav from './Nav.jsx';
import Banner from './Banner.jsx';
import requests from './Request.jsx';

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
        

       </div>
      </>
    ); 
  }
  
  export default HomeScreen