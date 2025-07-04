import React,{useState, useEffect} from 'react'
import axios from './axios'
import './Row.css'

function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
         const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies && movies.map(
                    (movie) => (
                        (isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${base_url}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name || movie.title || movie.original_name}
                        />
                    )
                )}
            </div>

        </div>
    )
}

export default Row;


  
