import { useState } from "react";

export default function ImageCarousel({ images }) {
    const [currentImage, setCurrentImage] = useState(0);
    const handleLeftButton = () => {
        if (currentImage === 0) {
            setCurrentImage(images.length - 1);
            return;
        }
        setCurrentImage(currentImage - 1);
        return;
    };

    const handleRightButton = () => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0);
            return;
        }
        setCurrentImage(currentImage + 1);
        return;
    };

    const handleMapButton = (i) => {
        return () => {
            setCurrentImage(i);
        };
    };

    const renderMap = () => {
        return images.map((image, i) => {
            return <button onClick={handleMapButton(i)}>{i + 1}</button>;
        });
    };

    return (
        <div className="carousel-container">
            <img src={images[currentImage].src}></img>
            <button className="button-left" onClick={handleLeftButton}>left</button>
            <button className="button-right" onClick={handleRightButton}>right</button>
            <div className="image-map-container">{renderMap()}</div>
        </div>
    );
}
