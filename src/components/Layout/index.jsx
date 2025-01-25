import React from 'react';
import Header from '../Header';
import './styles.css';

const Layout = ({ activeButtons, children }) => {
    return (
        <>
            <Header activeButtons={activeButtons}/>
            <div className='julios-main-container'>
                {children}
            </div>
        </>
    )
}

export default Layout;