import React from 'react';
import './styles.css';

const Header = () => {
    return (
        <div className='julios-header-container'>
            <div className='tiny-block right'/>
            <div className='small-block right'/>
            <div className='midle-block'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#play">Play</a>
            </div>
            <div className='small-block'/>
            <div className='tiny-block'/>
        </div>
    )
}

export default Header;