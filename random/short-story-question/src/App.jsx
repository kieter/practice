import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

    useEffect(() => {
        if (count === 3) {
            setDisabled(true)
            setIsPopUpVisible(true)
        }
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleDismiss = () => {
        setIsPopUpVisible(false);
    }

  return (
      <div>
          <button onClick={handleClick} disabled={disabled}>Increment</button>
          <div>{count}</div>
          {isPopUpVisible ? <p>Max count reached</p> : null}
          {isPopUpVisible ? <button onClick={handleDismiss}>Dismiss</button> : null}
      </div>
  )
}

export default App;
