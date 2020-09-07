import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider} from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from './StateProvider';

function Login() {
    /*eslint-disable */
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //signIn
        auth 
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                }); 
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                SignIn
            </Button>
        </div>
    )
}

export default Login
