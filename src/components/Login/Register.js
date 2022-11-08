import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserAuthContextProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        console.log('clicked')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = { email, password, name };
        console.log('user before register',user);

        createUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('user after register', user);
            form.reset();
            alert('Registered successfully');
          })
          .catch((error) => {
            console.error(`errorCode : ${error.code} \nerrorMessage ${error.message}`)
        });
    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label p-0">
                                    <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input type='submit' className="btn btn-primary mb-3" value='Register'/>
                                <button className="btn btn-warning">Continue with google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;