import './Switch.scss';
import LeftArrow from "../../assets/icons/Base/LeftArrow.jsx";
import RightArrow from "../../assets/icons/Base/RightArrow.jsx";
import Title from "../Title/Title.jsx";
const Switch = ({...props}) => {
    const {
        current,
        isFirst = false,
        isLast = false,
        next,
        prev,
        className
    } = props;

    return (
        <div className={`switch ${className}`}>
            {isFirst || <button className="switch__left" onClick={prev}>
                <LeftArrow />
            </button>}
            <Title type="green" level={5}>{current.name}</Title>
            {isLast || <button className="switch__right" onClick={next}>
                <RightArrow />
            </button>}
        </div>
    )
}

export default Switch;