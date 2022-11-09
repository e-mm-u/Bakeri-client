import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserAuthContextProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login-Bakeri');

    const { login, googleLogin, loading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/' ;

    if (loading) {
        return <div> Loading . . login . . </div>
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = { email, password};
        console.log('before login',user)

        login(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('user after login', user);
                form.reset();
                alert('logged in successfully');
                navigate(from, {replace : true});
            })
            .catch((error) => {
                console.error(`errorCode : ${error.code} \nerrorMessage ${error.message}`)
            });

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log('user after google login', user)
            })
            .catch((error) => {
                console.error(`errorCode : ${error.code} \nerrorMessage ${error.message}`)
            });


    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content">
                    <div className="card bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label p-0 mt-2">
                                    <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label p-0">
                                    <Link to='/register' className="label-text-alt link link-hover">Don't have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input type='submit' className="btn btn-primary mb-3" value='Login' />
                                <button onClick={handleGoogleLogin} className="btn btn-warning">Continue with google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;