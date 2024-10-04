import React, {useEffect, useRef, useState} from "react";
import "./ImageGallery.css"
import {render} from "react-dom";

function ImageGallery({ images }) {
    const renderImages = () => {
        return images.map((src, i) => {
            return <IntersectionImage src={src} key={i}/>
        })
    }

    return (
        <div className="gallery-container">
            <div className="block">ヽ(｀⌒´メ)ノ SCROLL</div>
            {renderImages()}
        </div>
    );
}

function IntersectionImage({src}) {
    const [intersecting, setIntersecting] = useState(false);
    // const [intersectionRatio, setIntersectionRatio] = useState(0);
    const imgRef = useRef(null);

    const observerCallback = (entries) => {
        const [entry] = entries;
        setIntersecting(entry.isIntersecting)
        // setIntersectionRatio(entry.intersectionRatio)
    }

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        if (imgRef.current) {
            observer.observe(imgRef.current)
        }
        // probably clean up observer
    }, []);

    return (
        <div>
            <p className={"debug"}>{`i am higher than the image, image intersecting is: ${intersecting}`}</p>
            <img ref={imgRef} src={intersecting ? src : ""} alt={""} className="image" ></img>
        </div>
    );
}

export default ImageGallery;
