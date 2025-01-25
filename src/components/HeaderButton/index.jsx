import React from 'react';
import './styles.css';

const HeaderButton = ({ text, refId, active }) => {
    return (
        <div className='julios-h-button'>
            <div className='julios-h-icons'>
                <a href={refId}>{text}</a>
                <div
                    aria-current={(active ? "true" : "")}
                    className="julios-h-button-indication" />
            </div>
        </div>
    )
}

export default HeaderButton;