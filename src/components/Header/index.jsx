import React from 'react';
import HeaderButton from '../HeaderButton';
import './styles.css';

const Header = ({ activeButtons }) => {
    let buttons = [
        { text: "HOME", refId: "#home" },
        { text: "ABOUT", refId: "#about" },
        { text: "SKILLS", refId: "#skills" },
        { text: "PLAY", refId: "#play" }
    ];
    buttons = buttons.map((button) => {
        button["active"] = (activeButtons.includes(button.text.toLocaleLowerCase()) ? true : false)
        return button
    });
    console.log(activeButtons);
    return (
        <div className='julios-header-container'>
            <div className='tiny-block right' />
            <div className='small-block right' />
            <div className='midle-block'>
                {
                    buttons.map(
                        button => <HeaderButton
                            key={button.text}
                            text={button.text}
                            refId={button.refId}
                            active={button.active}
                        />
                    )}
            </div>
            <div className='small-block' />
            <div className='tiny-block' />
        </div>
    )
}

export default Header;