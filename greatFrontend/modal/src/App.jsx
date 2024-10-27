import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModalDialog from "./Modal.jsx";

function App() {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <button onClick={() => setShowModal(true)}>Show Modal</button>
            <ModalDialog open={showModal} title="Modal Dialog" onClose={() => setShowModal(false)}>
                <p>This is a modal dialog</p>
            </ModalDialog>
        </>
    )
}

export default App;