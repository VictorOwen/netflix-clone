//typically we would store in {process.env.REACT_APP_API_KEY} for security
// This code exports an object containing various API endpoints for fetching movie and TV show data from The Movie Database (TMDb) API.

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchTVShows: `/discover/tv?api_key=${API_KEY}&language=en-US`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchNowPlayingMovies: `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
    fetchLatestMovies: `/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchSearchMovies: (query) => `/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US`,

}
export default requests;
// This code exports an object containing various API endpoints for fetching movie and TV show data from The Movie Database (TMDb) API.