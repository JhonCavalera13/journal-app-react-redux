import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <div>
            <h3 className="text-dark mb-3">Register</h3>
            <form action="">
                <input
                    type="text"
                    placeholder="your name"
                    name="name"
                    autoComplete="off"
                    className="auth_input form-control mb-3 w-100"
                />

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

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmpassword"
                    className="auth_input form-control mb-3 w-100"
                />

                <button type="submit" class="btn btn-primary btn-block">Register</button>
                <hr />

                <Link
                    to={'/auth/login'}
                    className=""
                >
                    Already registered?
            </Link>
            </form>
        </div>
    )
}
