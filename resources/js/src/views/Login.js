import React from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../App.js';

const Login = () => {
	const auth = useAuthContext();
	
	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		
		axios.post('/login', {email, password}).then(() => {
			window.location = window.location;
		});
	};
	return (
	<div className="container">
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-header">Login</div>

                <div className="card-body">
                    <form method="POST" action="/login" onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div className="col-md-6">
                                <input id="email" type="email" className="form-control is-invalid" name="email" required autoComplete="email" autoFocus />

                                
                                    <span className="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                            <div className="col-md-6">
                                <input id="password" type="password" className="form-control is-invalid" name="password" required autoComplete="current-password" />

                                    <span className="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-md-6 offset-md-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="remember" id="remember" />

                                    <label className="form-check-label" htmlFor="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row mb-0">
                            <div className="col-md-8 offset-md-4">
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
	);
}

export default Login;