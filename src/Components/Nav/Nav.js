import React, {useEffect, useState} from 'react';
import '../../css/Nav.css';
import {AiFillHome} from 'react-icons/ai';
import {GoMarkGithub} from 'react-icons/go';
import {MainPage} from '../Homepage/MainPage/MainPage';

export const Nav = ({
                        modalActive,
                        setModalActive,
                        selectMovie,
                        setSelectMovie,
                        isResultsVisible,
                        handleShowResults
                    }) => {
    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
        return () => {
            window.removeEventListener('scroll', transitionNavbar);
        }
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='test__div'></div>
            <div className='nav__content'>
                <AiFillHome size='30px' color='white' className='home'/>
                <div className='search'>
                    <MainPage modalActive={modalActive} setModalActive={setModalActive} selectMovie={selectMovie}
                              setSelectMovie={setSelectMovie} isResultsVisible={isResultsVisible}
                              handleShowResults={handleShowResults}/>
                </div>
                <GoMarkGithub size='30px' color='white' className='github'/>
            </div>
        </div>
    );
}

export default Nav;