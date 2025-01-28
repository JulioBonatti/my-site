import "./styles.css";
import { BoxPhiscs } from "./utils.mjs";
import React, { useEffect, useState } from "react";

function Game({ active }) {
    const [boxXPos, setBoxXPos] = useState(0);
    const [boxyPos, setBoxyPos] = useState(40);
    const [boxMass, setBoxMass] = useState(1);
    const [force, setForce] = useState(10);
    const [gravity, setGravity] = useState(10);

    const startGame = async () => {
        const timeDelta = 50 //ms
        const box = new BoxPhiscs(
            boxXPos,
            boxyPos,
            boxMass,
            force,
            gravity,
            timeDelta
        );
        do {
            // aqui vou precisar fazer um generator function para pegar os valores
        } while (box.calculateResultant.endScene === false);
    }


    return (
        <div className="julios-game-interface-container">
            <div className="game-header">
                <div className="game-button-start" onClick={startGame}>
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
