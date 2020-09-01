import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div className="auth_main bg-primary d-flex justify-content-center align-items-center">
            <div className="auth_box-container bg-light shadow-lg rounded-sm p-3">
                <Switch>
                    <Route
                        exact
                        path={'/auth/login'}
                        component={LoginScreen}
                    />
                    <Route
                        exact
                        path={'/auth/register'}
                        component={RegisterScreen}
                    />

                    <Redirect to={'/auth/login'} />
                </Switch>
            </div>
        </div>
    )
}
