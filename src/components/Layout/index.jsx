import React from 'react';
import Header from '../Header';
import './styles.css';

const Layout = ({ activeButtons, children }) => {
    return (
        <>
            <div className='julios-main-container'>
                {children}
            </div>
            <Header activeButtons={activeButtons}/>
        </>
    )
}

export default Layout;