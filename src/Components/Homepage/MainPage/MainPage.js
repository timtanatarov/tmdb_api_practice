import React from 'react';
import MovieResults from '../MovieResults/MovieResults';

export const MainPage = ({
                             modalActive,
                             setModalActive,
                             selectMovie,
                             setSelectMovie,
                             isResultsVisible,
                             handleShowResults
                         }) => {
    return (
        <>
            <MovieResults modalActive={modalActive} setModalActive={setModalActive} selectMovie={selectMovie}
                          setSelectMovie={setSelectMovie} isResultsVisible={isResultsVisible}
                          handleShowResults={handleShowResults}/>
        </>
    );
};