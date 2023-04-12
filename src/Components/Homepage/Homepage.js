import '../../css/Homepage.css';
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import Row from '../Row/Row';
import {userRequests} from '../../axios/Request';
import {useState} from 'react';
import {PopularMovies} from '../PopularMovies/PopularMovies';

export const Homepage = () => {
    const [modalActive, setModalActive] = useState(false);
    const [selectMovie, setSelectMovie] = useState(null);
    const [isResultsVisible, setIsResultsVisible] = useState(false);

    function handleShowResults() {
        setIsResultsVisible(true);
    }

    function handleHideResults() {
        setIsResultsVisible(false);
    }

    return (
        <div className='home-screen'>
            <Nav modalActive={modalActive} setModalActive={setModalActive} selectMovie={selectMovie}
                 setSelectMovie={setSelectMovie} isResultsVisible={isResultsVisible} handleShowResults={handleShowResults} />
            <Banner handleHideResults={handleHideResults}/>
            <Row modalActive={modalActive} setModalActive={setModalActive} selectMovie={selectMovie}
                 setSelectMovie={setSelectMovie} title='Netflix Originals' isLargeRow
                 fetchURL={userRequests.fetchNetflixOriginals}/>
            <Row modalActive={modalActive} setModalActive={setModalActive} selectMovie={selectMovie}
                 setSelectMovie={setSelectMovie} title='Trending Now' isLargeRow fetchURL={userRequests.fetchTrending}/>
            <Row modalActive={modalActive} setModalActive={setModalActive} selectMovie={selectMovie}
                 setSelectMovie={setSelectMovie} title='Top Rated' isLargeRow fetchURL={userRequests.fetchTopRated}/>
            <Row modalActive={modalActive} setModalActive={setModalActive} selectMovie={selectMovie}
                 setSelectMovie={setSelectMovie} title='Action movies' isLargeRow
                 fetchURL={userRequests.fetchActionMovies}/>
            <Row modalActive={modalActive} setModalActive={setModalActive} selectMovie={selectMovie}
                 setSelectMovie={setSelectMovie} title='Comedy Movies' isLargeRow
                 fetchURL={userRequests.fetchComedyMovies}/>
            <Row modalActive={modalActive} setModalActive={setModalActive} selectMovie={selectMovie}
                 setSelectMovie={setSelectMovie} title='Horror Movies' isLargeRow
                 fetchURL={userRequests.fetchHorrorMovies}/>
            <Row modalActive={modalActive} setModalActive={setModalActive} selectMovie={selectMovie}
                 setSelectMovie={setSelectMovie} title='Romantic Movies' isLargeRow
                 fetchURL={userRequests.fetchRomanceMovies}/>
            <Row modalActive={modalActive} setModalActive={setModalActive} selectMovie={selectMovie}
                 setSelectMovie={setSelectMovie} title='Documentaries' isLargeRow
                 fetchURL={userRequests.fetchDocumentaries}/>
            {/*<PopularMovies />*/}
        </div>
    )
}