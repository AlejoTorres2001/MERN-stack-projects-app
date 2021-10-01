import React from 'react'
import { Route,Redirect,useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes'
const PrivateRoute = ({hasRole: role,...rest}) => {
    const location = useLocation()
    const {hasRole,isLogged} = useAuth();

     if (role && !hasRole(role)) return <Redirect to={routes.home}></Redirect>
    if (!isLogged()) return <Redirect to={{ pathname :routes.login,state:{from:location}}}></Redirect>
    return (
        <Route {...rest}></Route>
    )
}

export default PrivateRoute
