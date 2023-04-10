import React from 'react';
import Search from '../Search/Search';
import {connect} from 'react-redux';

const MovieResults = (props) => {
    return (
        <div>
            <h1>
                Results will be here:
            </h1>
            <div>
                <Search/>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state);
    return{};
};

export default connect(mapStateToProps, null)(MovieResults);