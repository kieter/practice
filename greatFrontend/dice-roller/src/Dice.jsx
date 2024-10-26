import './Dice.css';

const Dice = ({pips}) => {
    const renderPips = () => {
        switch (pips) {
            case 1:
                return <div className={"pip middle-center"}></div>
            case 2:
                return (
                    <>
                        <div className={"pip top-left"}></div>
                        <div className={"pip bottom-right"}></div>
                    </>
                )
            case 3:
                return (
                    <>
                        <div className={"pip top-left"}></div>
                        <div className={"pip middle-center"}></div>
                        <div className={"pip bottom-right"}></div>
                    </>
                )
            case 4:
                return (
                    <>
                        <div className={"pip top-left"}></div>
                        <div className={"pip top-right"}></div>
                        <div className={"pip bottom-left"}></div>
                        <div className={"pip bottom-right"}></div>
                    </>
                )
            case 5:
                return (
                    <>
                        <div className={"pip top-left"}></div>
                        <div className={"pip top-right"}></div>
                        <div className={"pip middle-center"}></div>
                        <div className={"pip bottom-left"}></div>
                        <div className={"pip bottom-right"}></div>
                    </>
                )
            case 6:
                return (
                    <>
                        <div className={"pip top-left"}></div>
                        <div className={"pip top-right"}></div>
                        <div className={"pip middle-left"}></div>
                        <div className={"pip middle-right"}></div>
                        <div className={"pip bottom-left"}></div>
                        <div className={"pip bottom-right"}></div>
                    </>
                )
        }
    }


    return (
        <li tabIndex="0" className={"dice"} aria-label={`dice rolled ${pips}`}>
            {renderPips()}
        </li>
    )
}

export default Dice;