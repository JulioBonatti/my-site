import "./styles.css";
import React, { useEffect, useState } from "react";

function Slider({ title, onChange, min, max, value, textList }) {
    const [footerText, setFooterText] = useState(" ");
    
    useEffect(() => {
        for (let i = textList.length; i > 0; i--) {
            console.log(`value: ${value}, tvalue: ${textList[i - 1].value}`);
            if (value == textList[i - 1].value) {
                setFooterText(textList[i - 1].text);
                break;
            } else {
                setFooterText(" ");
            }
        }
    }, [value]);
    
    return (
        <div className="slider-container">
            <div className="slider-title">{title}</div>
            <input type="range"
                onChange={onChange}
                min={min}
                max={max}
                value={value}>
            </input>
            <div className="slider-footer">{footerText}</div>
        </div>
    );
}

export default Slider;
