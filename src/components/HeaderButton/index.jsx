import React from 'react';
import './styles.css';

const HeaderButton = ({ text, refId }) => {
    return (
        <div className='julios-h-button'>
            <div className='julios-h-icons'>
                <a href={refId}>{text}</a>
                <div className='julios-h-button-indication' />
            </div>
        </div>
    )
}

export default HeaderButton;