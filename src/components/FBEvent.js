import './FBEvent.css';
import FBEventImage from "../img/png/FBEvent.PNG"
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const FBEvent = () => {
    const { language } = useContext(srcContext);

    return (
        <div className='container-fb'>
            <h3>{language.FBlink.title}</h3>
            <a href="https://fb.me/e/2bJD7nJvv" rel="noreferrer" target="_blank"><img src={FBEventImage} alt='FB link'></img></a>
        </div>
    )
};

export default FBEvent;