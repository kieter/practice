import { useState } from 'react'
import classnames from 'classnames';
import "./accordion.css"

const Accordion = ({title, children}) => {
    const [contentVisible, setContentVisible] = useState(false);

    const handleClick = () => {
        setContentVisible(!contentVisible);
    }

    return (
        <div className="accordion">
            <div className="title-container">
                <p id="category" className="category">
                    {title}
                </p>
                <button
                    onClick={handleClick}
                    className="toggle"
                    aria-label={contentVisible ? 'open' : 'closed'}
                    aria-labelledby="category"
                    aria-expanded={contentVisible}
                >{contentVisible ? 'v' : '>'}
                </button>
            </div>
            <div className={classnames('content-container', {hidden: !contentVisible})}>
                <p>
                    {children}
                </p>
            </div>
        </div>
    )
}

export default Accordion;