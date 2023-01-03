import './Header.css';
import Logo from '../img/svg/Praktikakohvik_käed.svg';
import infoSign from '../img/png/infoSign.png'
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const Header = () => {
    const { language } = useContext(srcContext);
    const dateNow = new Date().getTime();
    const countDateInfo = new Date('March 23, 2022 20:00:00');

    return (
        <header>
            <div style={countDateInfo - dateNow < 0 ? {visibility: 'hidden'} : {visibility: 'visible'}} className="info">
                <img src={infoSign} alt='info sign'></img>
                <h2>{language.header.info.replaceAll('\\n', '\n')}</h2>
            </div>
            <h4>PRAKTIKA-<br/>KOHVIK</h4>
            <h3>{language.header.date}</h3>

            <img src={Logo} alt="praktikakohvik_logo" id="praktikakohvik_logo" />
            
            <section className="countdown">
                <div className="container-day">
                    <h3 className="dayNr">0</h3>
                    <h2>{language.countDown.day}</h2>
                </div>
                <div className="container-hour">
                    <h3 className="hourNr">0</h3>
                    <h2>{language.countDown.hour}</h2>
                </div>
                <div className="container-minute">
                    <h3 className="minuteNr">0</h3>
                    <h2>{language.countDown.minute}</h2>
                </div>
                <div className="container-second">
                    <h3 className="secondNr">0</h3>
                    <h2>{language.countDown.second}</h2>
                </div>
            </section>
        </header>
    )
};

export default Header;