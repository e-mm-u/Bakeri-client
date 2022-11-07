import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserAuthContextProvider';

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = { email, password, name };

        login(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                console.error(`errorCode : ${error.code} \nerrorMessage ${error.message}`)
            });

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
            })
            .catch((error) => {
                console.error(`errorCode : ${error.code} \nerrorMessage ${error.message}`)
            });


    }
    return (
        <div>
            Login
        </div>
    );
};

export default Login;