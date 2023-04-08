import React from 'react';
// import './App.css';
import {Homepage} from "./Components/Homepage/Homepage";

function App() {
    const user = true;
    return (
        <div className="App">
            {
                !user ? (<div>Log in pls</div>) : (<Homepage/>)
            }
        </div>
    );
}

export default App;
