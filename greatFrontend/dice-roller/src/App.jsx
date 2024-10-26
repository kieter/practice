import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dice from "./Dice.jsx";

const getDiceRolls = (numberOfDice) => {
    return Array.from({length: numberOfDice}, () => Math.floor(Math.random() * 6) + 1)
}

function App() {
    const [numberOfDice, setNumberOfDice] = useState(0);
    const [diceRolls, setDiceRolls] = useState([]);
    const inputRef = useRef(null);

    const handleInputChange = (e) => {
        setNumberOfDice(e.target.value)
    }

    const renderDice = () => {
        return diceRolls.map((roll, index) => {
            return (
                <Dice key={index} pips={roll}/>
            )
        })
    }

    const handleRollClick = () => {
        const rolls = getDiceRolls(numberOfDice);
        setDiceRolls(rolls);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleRollClick();
        }
    }

    useEffect(() => {
        const handleShortcut = (e) => {
            if (e.ctrlKey && e.key === 'f') {
                inputRef.current.focus();
            }
        };

        window.addEventListener('keydown', handleShortcut);
        return () => {
            window.removeEventListener('keydown', handleShortcut);
        };
    }, []);

    return (
        <div className="container">
            <div>
                <label for="number-of-dice">Number of dice</label>
            </div>
            <span>
                <input placeholder="# of dice" type="text" name="number-of-dice" onChange={handleInputChange} onKeyDown={handleKeyDown} ref={inputRef}></input>
                <button onClick={handleRollClick}>Roll</button>
            </span>
            <ul className={"dice-container"}>
                {renderDice()}
            </ul>
        </div>
    )
}

export default App
