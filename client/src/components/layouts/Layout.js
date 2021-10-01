import React from 'react'
import Footer from '../Footer'
import Navigation from '../Navigation'

const Layout = ({children}) => {
    return (
        <>
            <Navigation></Navigation>
            {children}
            <Footer></Footer>
        </>
    )
}

export default Layout
