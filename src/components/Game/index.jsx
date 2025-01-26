import "./styles.css";
import React, { useEffect, useState } from "react";

function Game({ active }) {
    return (
        <div className="julios-game-interface-container">
            <div className="game-header">
                <div className="game-button-start">
                    START
                </div>
            </div>
            <div className="game-interface">
                <div className="left-container">
                    <div className="game-character" />
                    <div className="game-floor" />
                </div>
                <div style={{ width: "100%" }}>
                    <div className="game-act-space">
                        <div className="game-box" />
                    </div>
                    <div className="game-floor" />
                </div>
            </div>
            <div className="game-cfg-footer"></div>
        </div>
    );
}

export default Game;
