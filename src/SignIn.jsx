import React, {useEffect, useState} from "react";
import {auth, provider} from"./config";
import {signInWithPopup} from "firebase/auth";

export function SignIn () {

    
    const [value, setValue] = useState ("")
    const handleClick =()=> {
        signInWithPopup (auth, provider).then ((data)=> {
            setValue (data.user.email)
            localStorage.setItem ("email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem("email"));
    }, [localStorage.getItem("email")]);

return (
    <div>
        {value?null:
        <button onClick = {handleClick}>signin with google</button>
        }
    </div>
)
}


/*import React , {useEffect, useState} from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import App from "./App";

export function SignIn() {
    const [value, setValue] = useState(localStorage.getItem("email") || "");

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            const userEmail = data.user.email;
            setValue(userEmail);
            localStorage.setItem("email", userEmail);
        });
    };

    return (
        <div>
            {value ? (
                <App />
            ) : (
                <button onClick={handleClick}>Sign in with Google</button>
            )}
        </div>
    );
}*/