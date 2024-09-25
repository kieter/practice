export default function ProgressBar({ value }) {
    if (value > 100) {
        value = 100;
    }
    if (value < 0) {
        value = 0;
    }
    const text = value > 0 ? `${value}%` : "";

    return (
        <>
            <div className="progress">
                <div className="progress-bar"
                     style={{width: `${value}%`}}
                >
          <span className="percent">
            {text}
          </span>
                </div>
            </div>
        </>
    );
}
