import React, {useState} from 'react';
import {Form, FormControl, FormGroup, Button} from 'react-bootstrap';
import '../../../css/Search.css';
import {API_KEY} from '../../../axios/Request';
import {movies} from '../../../actions';
import {connect} from 'react-redux';

const Search = (props) => {
    const [query, setQuery] = useState('');
    const search = () => {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}\`;`;
        fetch(url, {
            method: 'GET',
        }).then(response => response.json())
            .then(jsonObj => props.movies(jsonObj.results))
    }
    return (
        <div>
            <Form inline='true'>
                <FormGroup className='FormGroup'>
                    <div>
                        <FormControl text='text' placeholder='Search' onChange={e => setQuery(e.target.value)}>

                        </FormControl>
                    </div>
                    <div>
                        <Button bsstyle='success' onClick={search}>Sub</Button>
                    </div>
                </FormGroup>
            </Form>
        </div>
    );
}

export default connect(null, {movies} )(Search)