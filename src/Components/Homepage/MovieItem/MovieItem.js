import React, {useState} from 'react';

function MovieItem(props) {
    const movie = props.movie;
    const urlComponent = 'https://image.tmdb.org/t/p/w342' + movie.poster_path;
    const altComponent = movie.title + 'Image';
    const [subs, setSubs] = useState(movie.overview.slice(0, 104) + '...');
    return (
        <div>
            <div className='col-sm-12 col-sm-3'>
                <div className='thumbnail'>
                    <img src={urlComponent} alt={altComponent}/>
                    <div className='caption'>
                        <h4>{movie.title}</h4>
                        <p>{subs}</p>
                        <p>Release Date – {movie.release_date}</p>
                        <p>Ratings – {movie.vote_average}</p>
                        {/*<p><a href='#' className='btn btn-primary' role='button'>Button</a> <a href='#'*/}
                        {/*                                                                       className='btn btn-default'*/}
                        {/*                                                                       role='button'>Button</a>*/}
                        {/*</p>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;