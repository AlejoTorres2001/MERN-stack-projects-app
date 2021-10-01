import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import useAuth from '../auth/useAuth'

const PrivateRoute = ({hasRole: role,...rest}) => {
    const {user} = useAuth();
    if (role && user?.role !== role) return <Redirect to="/"></Redirect>
    if (!user) return <Redirect to="/login"></Redirect>
    return (
        <Route {...rest}></Route>
    )
}

export default PrivateRoute
