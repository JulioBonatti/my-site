import React, { useState, useEffect } from "react";
import "./styles.css";

function HomeSection({ title, subtitles }) {
    const [visible, setVisible] = useState(true);
    const [subtitleIndex, setSubtitleIndex] = useState(0);
    
    useEffect(() => {
        const interval = 3000;
        const fadeInterval = 400;
        const loopSubtitles = () => {
            setTimeout(() => {
                console.log("Iniciou o loop");
                setVisible(false);

                setTimeout(() => {
                    setSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
                    setVisible(true);
                }, fadeInterval);
                console.log("Fim do loop");
            }, interval);
        };

        const intervalLoop = setInterval(loopSubtitles, interval + fadeInterval);
        loopSubtitles();

        return () => clearInterval(intervalLoop);
    }, []);

    return (
        <div className="julios-home-container">
            <div className="home-bg-image" />
            <div className="home-text-contaier">
                <div className="julios-home-text">{title}</div>
                <div className={`julios-home-sibtitle ${visible ? "show" : ""}`}>
                    {subtitles[subtitleIndex]}
                </div>
            </div>
        </div>
    );
}

export default HomeSection;
