import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { authenticated } = useSelector(store=>store.auth);
    return authenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
