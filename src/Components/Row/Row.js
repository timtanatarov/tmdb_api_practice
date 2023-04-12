import React, {useEffect, useState, Fragment} from 'react';
import '../../css/Row.css';
import axios from '../../axios/localAxios';
import {Modal} from '../Modal/Modal';

export const Row = ({title, isLargeRow, fetchURL,modalActive, selectMovie, setModalActive, setSelectMovie}) => {
    const [movies, setMovies] = useState([]);
    // const [modalActive, setModalActive] = useState(false);
    // const [selectMovie, setSelectMovie] = useState(null);
    const base_url = 'https://image.tmdb.org/t/p/original/';
let i = 0;
    const handleOpen = (currentMovie) => {
        setModalActive(true);
        setSelectMovie(currentMovie);
    }

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
            <Modal active={modalActive} setActive={setModalActive}
                   key={i++}>
                {selectMovie ? (<div className='modal__container'>
                    <img className='modal__poster' alt={`${base_url}${selectMovie.poster_path}`}
                         src={`${base_url}${selectMovie.backdrop_path}`}/>
                    <div className='modal__title__container'>
                        Title:
                        <div className='modal__title'>
                            {selectMovie.name || selectMovie.title}
                        </div>
                    </div>
                    <div className='modal__overview__container'>Overview:
                        <div className='modal__overview'>
                            {selectMovie.overview}
                        </div>
                    </div>
                    <div className='modal__release__container'>
                        Release date:
                        <div className='modal__release'>
                            {selectMovie.release_date || selectMovie.first_air_date}
                        </div>
                    </div>
                    <div className='modal__rate__container'>
                        Rating:
                        <div className='modal__rate'>
                            {selectMovie.vote_average}
                        </div>
                    </div>
                </div>) : null}
            </Modal>
            <div className='row__posters'>
                {
                    movies.map((movie, index) => {
                        return (
                            <>
                                <img alt={`${base_url}${movie.poster_path}`}
                                     src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                     className={`rowposter ${isLargeRow && 'largeImage'}`}
                                     key={movie.id + index}
                                     onClick={() => {
                                         setSelectMovie(movie);
                                         handleOpen(movie);
                                     }}/>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Row;