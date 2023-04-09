import React, {useEffect, useState} from 'react';
import '../../css/Row.css';
import axios from '../../axios/localAxios';

export const Row = ({title, isLargeRow, fetchURL}) => {
    const [movies, setMovies] = useState([]);

    const base_url = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request
        }

        fetchData()
    }, [fetchURL]);
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map((movie) => {
                        return <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} key={movie.id}
                             className={`rowposter ${isLargeRow && 'largeImage'}`}/>
                    })
                }
            </div>
        </div>
    );
}

export default Row;