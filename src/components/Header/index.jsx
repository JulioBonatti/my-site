import React from 'react';
import HeaderButton from '../HeaderButton';
import './styles.css';

const Header = () => {
    return (
        <div className='julios-header-container'>
            <div className='tiny-block right'/>
            <div className='small-block right'/>
            <div className='midle-block'>
                <HeaderButton text="Home" refId="#home"/>
                <HeaderButton text="About" refId="#about"/> 
                <HeaderButton text="Skills" refId="#skills"/>
                <HeaderButton text="Play" refId="#play"/>   
            </div>
            <div className='small-block'/>
            <div className='tiny-block'/>
        </div>
    )
}

export default Header;