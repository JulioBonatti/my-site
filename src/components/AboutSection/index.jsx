import React, { useState } from "react";
import "./styles.css";

function FadeComponent() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                {visible ? "Fade Out" : "Fade In"}
            </button>

            <div className={`fade-in ${visible ? "show" : ""}`}>
                <h2>Olá, eu apareci com fade in!</h2>
            </div>
        </div>
    );
}

export default FadeComponent;
