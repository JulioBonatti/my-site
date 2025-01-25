import React, { useState, useEffect } from "react";
import "./styles.css";

function Minimap({ percent }) {
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
            <div className="map-blocks-wrapper">
                <div style={{ top: "10%", left: "25%" }} />
                <div style={{ top: "30%", left: "25%" }} />
                <div style={{ top: "17%", left: "60%" }} />
                <div style={{ top: "35%", left: "25%" }} />
                <div style={{ top: "40%", left: "60%" }} />
                <div style={{ top: "45%", left: "25%" }} />
                <div style={{ top: "50%", left: "60%" }} />
                <div style={{ top: "55%", left: "25%" }} />
                <div style={{ top: "60%", left: "60%" }} />
            </div>
        </div>
    );
}

export default Minimap;
