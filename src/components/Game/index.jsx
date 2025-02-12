import "./styles.css";
import BoxPhisics from "./utils.js";
import React, {  useState } from "react";
import Slider from "../Slider/index.jsx";

function Game({ active }) {
    const [boxXPos, setBoxXPos] = useState(0);
    const [boxyPos, setBoxyPos] = useState(40);
    const [boxMass, setBoxMass] = useState(1);
    const [force, setForce] = useState(10);
    const [gravity, setGravity] = useState(10);
    const [gameStarted, setGameStarted] = useState(false);

    const setFunctions = {
        mass: setBoxMass,
        force: setForce,
        gravity: setGravity
    };

    const changeParams = (param, value) => {
        setFunctions[param](value);
    };

    function getBoxPercentageSize() {
        const gameBox = document.querySelector(".game-box");
        const gameContainer = document.querySelector(".game-act-space");

        if (gameBox && gameContainer) {
            const boxRect = gameBox.getBoundingClientRect();
            const containerRect = gameContainer.getBoundingClientRect();

            // Get the percentage size
            const widthPercentage = (boxRect.width / containerRect.width) * 100;
            const heightPercentage = (boxRect.height / containerRect.height) * 100;

            return {
                bWidth: widthPercentage.toFixed(3), // Width in %
                bHeight: heightPercentage.toFixed(3) // Height in %
            };
        }

        return null; // Return null if elements aren't found
    }

    const startGame = () => {
        const timeDelta = 50; // ms
        const boxSize = getBoxPercentageSize()

        const box = new BoxPhisics(
            boxXPos,
            boxyPos,
            boxMass,
            force,
            gravity,
            timeDelta,
            boxSize
        );
        setGameStarted(true);
        const intervalId = setInterval(() => {
            const result = box.calculateResultant();
            console.log(`xPos: ${result.xPos.toFixed(2)}, yPos: ${result.yPos.toFixed(2)}`);

            setBoxXPos(result.xPos); // TODO: transform coodenates into object no separated variables
            setBoxyPos(result.yPos);

            if (result.endScene) {
                clearInterval(intervalId);
            }
        }, timeDelta);

        // Cleanup interval when component unmounts
        return () => clearInterval(intervalId);
    };

    const restartGame = () => {
        setBoxXPos(0);
        setBoxyPos(40);
        setGameStarted(false);
    }

    return (
        <div className="julios-game-interface-container">
            <div className="game-header">
                {gameStarted
                    ? <div className="game-button-start" onClick={restartGame}>
                        RESTART
                    </div>
                    : <div className="game-button-start" onClick={startGame}>
                        START
                    </div>
                }
            </div>
            <div className="game-interface">
                <div className="left-container">
                    <div className="game-character" />
                    <div className="game-floor" />
                </div>
                <div style={{ width: "100%" }}>
                    <div className="game-act-space">
                        <div
                            className="game-box"
                            style={{ top: `${boxyPos}%`, left: `${boxXPos}%` }}
                        />
                    </div>
                    <div className="game-floor" />
                </div>
            </div>
            <div className="game-cfg-footer">
                <Slider
                    title="Mass"
                    onChange={(e) => changeParams("mass", e.target.value)}
                    min={1}
                    max={10}
                    value={boxMass}
                    textList={[{text: "Light like a dust", value: 1}, {text: "This is heavy!", value: 10}]}
                />
                <Slider
                    title="Gravity"
                    onChange={(e) => changeParams("gravity", e.target.value)}
                    min={1}
                    max={50}
                    value={gravity}
                    textList={[{text: "Play with the planet gravity", value: 1}]}
                />
                <Slider
                    title="Atack Power"
                    onChange={(e) => changeParams("force", e.target.value)}
                    min={1}
                    max={3000}
                    value={force}
                    textList={[{text: "Weak...", value: 1}, {text: "This can be powerfull.", value: 3000}]}
                />
            </div>
        </div >
    );
}

export default Game;
