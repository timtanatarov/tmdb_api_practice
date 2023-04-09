import '../../css/homescreen.css';
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import Row from '../Row/Row';
import {userRequests} from '../../axios/Request';

export const Homepage = () => {
    return (
        <div className='home-screen'>
            <Nav/>
            <Banner />
            <Row title='Netflix Originals' isLargeRow fetchURL={userRequests.fetchNetflixOriginals}/>
            <Row title='Trending Now' fetchURL={userRequests.fetchTrending}/>
            <Row title='Top Rated' fetchURL={userRequests.fetchTopRated}/>
            <Row title='Action movies' fetchURL={userRequests.fetchActionMovies}/>
            <Row title='Comedy Movies' fetchURL={userRequests.fetchComedyMovies}/>
            <Row title='Horror Movies' fetchURL={userRequests.fetchHorrorMovies}/>
            <Row title='Romantic Movies' fetchURL={userRequests.fetchRomanceMovies}/>
            <Row title='Documentaries' fetchURL={userRequests.fetchDocumentaries}/>
        </div>
    )
}