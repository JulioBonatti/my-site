import React from 'react';
import Header from '../Header';
import './styles.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='julios-main-container'>
                {children}
            </div>
        </>
    )
}

export default Layout;