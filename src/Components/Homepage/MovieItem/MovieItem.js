import React from 'react';
import {Modal} from 'react-bootstrap';

function MovieItem({movie, modalActive, setModalActive, selectMovie, setSelectMovie}) {
    const base_base_url = '';

    const handleOpen = (currentMovie) => {
        setModalActive(true);
        setSelectMovie(currentMovie);
    };

    console.log(movie.id)

    return (
        <div className='search__movie__item__container' onClick={() => {
            setSelectMovie(movie);
            handleOpen(movie);
        }}>
            <Modal active={modalActive} setActive={setModalActive}
                   key={movie.id + movie.title}>
                {movie ? (<div className='modal__container'>
                    <img className='modal__poster'
                         src={`${movie.backdrop_path} `}/>
                    <div className='modal__title__container'>
                        Title:
                        <div className='modal__title'>
                            {movie.name || movie.title}
                        </div>
                    </div>
                    <div className='modal__overview__container'>Overview:
                        <div className='modal__overview'>
                            {movie.overview}
                        </div>
                    </div>
                    <div className='modal__release__container'>
                        Release date:
                        <div className='modal__release'>
                            {movie.release_date || movie.first_air_date}
                        </div>
                    </div>
                    <div className='modal__rate__container'>
                        Rating:
                        <div className='modal__rate'>
                            {movie.vote_average}
                        </div>
                    </div>
                </div>) : null}
            </Modal>
            <div className='search__movie__item'>
                {movie.title}
            </div>
        </div>
    );
}

export default MovieItem;