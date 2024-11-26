import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import './Arrow.scss';


const Arrow = ({volta, avanca}) => {
    return (
        <div className="setas">
            <FaArrowCircleLeft  size={25} className="left" onClick={volta} />
            <FaArrowCircleRight  size={25} className="right" onClick={avanca}/>
        </div>
    )
}

export default Arrow
