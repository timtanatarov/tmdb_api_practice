import '../../css/homescreen.css';
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';

export const Homepage = () => {
    return (
        <div className='home-screen'>
            <Nav/>
            <Banner />
        </div>
    )
}