import React, {useEffect, useState} from 'react';
import '../../css/Banner.css';
import axios from '../../axios/localAxios';
import {userRequests} from '../../axios/Request';

export const Banner = (props) => {
    const [movie, setMovie] = useState([]);
    const {handleHideResults} = props;
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(userRequests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        }

        fetchData();
    }, [])
    return (
        <div className='banner' onClick={() => {
            handleHideResults();
        }} style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div className='banner__content'>
                <h1 className='banner__title'>
                    {movie?.title || movie?.original_name || movie?.name}
                </h1>
                <div className='banner__description'>
                    <p>
                        {movie?.overview}
                    </p>
                </div>
            </div>
            <div className='banner__fade'>

            </div>
        </div>
    );
}

export default Banner;