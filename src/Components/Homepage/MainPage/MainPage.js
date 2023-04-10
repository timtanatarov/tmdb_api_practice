import React from 'react';
import MovieResults from '../MovieResults/MovieResults';

export const MainPage = (props) => {
    return (
        <div className='container'>
            <div className='text-center'>
                <div className='jumbotron'>
                    <h1>TMDB API Practice</h1>
                    <p>Search any movies what you want</p>
                </div>
            </div>
            <div className='row'><MovieResults/></div>
        </div>
    );
};