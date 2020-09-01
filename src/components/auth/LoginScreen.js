import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
    return (
        <div>
            <h3 className="text-dark mb-3">Login</h3>
            <form action="">
                <input
                    type="text"
                    placeholder="your email"
                    name="email"
                    autoComplete="off"
                    className="auth_input form-control mb-3 w-100"
                />

                <input
                    type="password"
                    placeholder="your password"
                    name="password"
                    className="auth_input form-control mb-3 w-100"
                />

                <button type="submit" class="btn btn-primary btn-block">Login</button>
                <hr />
                <div className="align-items-center d-flex justify-content-center flex-column py-4">
                    <p>Login with social networks</p>
                    <div class="google-btn">
                        <div className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google button"
                            />
                        </div>
                        <p className="btn-text text-light">
                            <center>Sign in with google</center>
                        </p>
                    </div>
                </div>
                <Link
                    to={'/auth/register'}
                    className=""
                >
                    Create new account
                </Link>
            </form>
        </div>
    )
}
