import React from 'react';
import Search from '../Search/Search';
import {connect} from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

const MovieResults = (props) => {
    console.log(props.movies.movies);
    return (
        <div>
            <h1>Results will be here:</h1>
            <Search/>
            {props.movies.movies.map(item => {
                return <MovieItem movie={item} key={item.id}/>;
            })}
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state);
    return {
        movies: state.movies,
    };
};

export default connect(mapStateToProps, null)(MovieResults);