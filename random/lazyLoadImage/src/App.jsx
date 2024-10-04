import { useState } from 'react'
import './App.css'
import ImageGallery from "./ImageGallery.jsx";

function App() {
  const [count, setCount] = useState(0);
    const imageSources = [
        "https://via.placeholder.com/200x200.png?text=Image+1",
        "https://via.placeholder.com/200x200.png?text=Image+2",
        "https://via.placeholder.com/200x200.png?text=Image+3",
        "https://via.placeholder.com/200x200.png?text=Image+4",
        "https://via.placeholder.com/200x200.png?text=Image+5",
        "https://via.placeholder.com/200x200.png?text=Image+6",
        "https://via.placeholder.com/200x200.png?text=Image+7",
        "https://via.placeholder.com/200x200.png?text=Image+8",
        "https://via.placeholder.com/200x200.png?text=Image+9",
        "https://via.placeholder.com/200x200.png?text=Image+10",
        "https://via.placeholder.com/200x200.png?text=Image+11",
        "https://via.placeholder.com/200x200.png?text=Image+12"
    ];


    return (
    <>
        <ImageGallery images={imageSources}/>
    </>
  )
}

export default App
