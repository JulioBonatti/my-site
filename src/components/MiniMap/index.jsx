import React, { useState, useEffect } from "react";
import "./styles.css";

function Minimap({ percent = 0 }) {
    const [time, setTime] = useState("");

    const updateClock = () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")} ${ampm}`;

        setTime(formattedTime);
    };

    useEffect(() => {
        updateClock();
        const timer = setInterval(updateClock, 20000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="julios-minimap">
            <div className="minimap-detail" />
            <div className="julios-clock" >{time}</div>
            <div className="minimap-position-indicator" />
            <div className="map-blocks-wrapper" style={{top: `${percent*-77}%`}}>
                <div style={{ left: "30%", top: "10%", height: "10%", width: "10%" }} />
                <div style={{ 
                    left: "59%", 
                    top: "-5%", 
                    height: "22%", 
                    width: "22%", 
                    justifyContent: "left", 
                    alignItems: "self-end" }} >
                        HOME
                    </div>
                <div style={{ left: "14%", top: "21%"}} />
                <div style={{ left: "62%", top: "20%", height: "13%", width: "14%"  }} />
                <div style={{ left: "33%", top: "31%", height: "2%", width: "7%" }} />
                <div style={{ left: "-23%", top: "44%", height: "6%", width: "62%" }}>HIRE ME</div>
                <div style={{ left: "62%", top: "43%" }} />
                <div style={{ left: "9%", top: "50.2%", height: "1%", width: "27%" }} />
                <div style={{ left: "4%", top: "53%", height: "17%", width: "35%" }} />
                <div style={{ left: "63%", top: "53%", height: "12%", width: "2%" }} />
                <div style={{ left: "66%", top: "57%", height: "4%", width: "9%", borderRadius: "0 50% 50% 0" }} />
            </div>
        </div>
    );
}

Minimap.defaultProps = {
    percent: 0,
};

export default Minimap;
