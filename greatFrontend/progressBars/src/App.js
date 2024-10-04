import { useState } from "react";

export default function App() {
    const [loadingBars, setLoadingBars] = useState([]);

    const addLoadingBar = () => {
        setLoadingBars([...loadingBars, <LoadingBar key={loadingBars.length} />]);
    };

    return (
        <div>
            <button onClick={addLoadingBar}>Add</button>
            {loadingBars}
        </div>
    );
}

export const LoadingBar = () => {
    return (
        <div className="loading-bar">
            <div className="progress"></div>
        </div>
    );
};
