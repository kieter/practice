import ProgressBar from './ProgressBar';

export default function App() {
    return (
        <div>
            <ProgressBar value={-5}/>
            <ProgressBar value={101}/>
            <ProgressBar value={10}/>
            <ProgressBar value={25}/>
            <ProgressBar value={50}/>
            <ProgressBar value={75}/>
            <ProgressBar value={100}/>
        </div>
    );
}
