import "./TypeAhead.css";
import {useEffect, useRef} from "react";

const TypeAhead = ({value, onChange, children}) => {
    const inputRef = useRef(null)

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'f') {
                inputRef.current.focus();
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    })

    return (
        <div className="typeahead-container">
            <label id="search-label" htmlFor="search">Enter text</label>
            <div className="input-container">
                <input ref={inputRef} value={value} onChange={onChange} className="typeahead-input" id="search" type="text" placeholder="type..."/>
            </div>
            <div className="results-container">
                {children}
            </div>
        </div>
    )
}

export default TypeAhead;