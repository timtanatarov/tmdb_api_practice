import React, {useEffect} from 'react';
import {Homepage} from "./Components/Homepage/Homepage";
import Login from './Components/Login/Login';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectUser} from './features/userSlice';
import {auth} from './firebase/firebase';

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                dispatch(login({
                    uid: user.uid,
                    email: user.email,

                }))
            } else {
                dispatch(logout);
            }
        })

        return unsubscribe;
    }, []);

    return (
        <div className="App">
            {
                !user ? (<Login/>) : (<Homepage/>)
            }
        </div>
    );
}

export default App;
