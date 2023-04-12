import React from 'react';
import Search from '../Search/Search';
import {connect} from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

const MovieResults = (props) => {
    const movies = props.movies.movies;
    const {modalActive, setModalActive, selectMovie, setSelectMovie, isResultsVisible, handleShowResults} = props;
    return (
        <div className='container__search__results'>
            <Search handleShowResults={handleShowResults}/>
            {isResultsVisible && (<div className='search__movie__result'>
                {movies.map(item => {
                    return <MovieItem movie={item} key={item.id} modalActive={modalActive}
                                      setModalActive={setModalActive} selectMovie={selectMovie}
                                      setSelectMovie={setSelectMovie}/>;
                })}
            </div>)}

        </div>
    );
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
    };
};

export default connect(mapStateToProps, null)(MovieResults);