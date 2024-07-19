import React, { useContext } from 'react'
import AuthContext from '../context/AıthContext'
import { Navigate } from 'react-router';

const PrivateRoute = ({element}) => {
  
    const {isAuthenticated} = useContext(AuthContext);

    return isAuthenticated ? element: <Navigate to="/"/>
}

export default PrivateRoute