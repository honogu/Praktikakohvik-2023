import './Navbar.css';
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const Navbar = () => {
    const { value, setValue, language } = useContext(srcContext);

    return (
        <div className='container-nav'>
            <img src={require("../img/svg/" + value + "_lipp.svg")} alt="flag" onClick={ () => (value === 'en') ? setValue('et') : setValue('en') }></img>
            <nav>
                <h1 id='nav-header'>PRAKTIKAKOHVIK</h1>
                <div className="container-countdown">
                    <div className="container-day">
                        <h1 className="dayNr">0</h1>
                        <h3>{language.countDown.day}</h3>
                    </div>
                    <div className="container-hour">
                        <h1 className="hourNr">0</h1>
                        <h3>{language.countDown.hour}</h3>
                    </div>
                    <div className="container-minute">
                        <h1 className="minuteNr">0</h1>
                        <h3>{language.countDown.minute}</h3>
                    </div>
                    <div className="container-second">
                        <h1 className="secondNr">0</h1>
                        <h3>{language.countDown.second}</h3>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (Math.ceil(scrolled) < 350) {
        document.querySelector('nav').style.top = '-65px';
    } else {
        document.querySelector('nav').style.top = '0px';
    }
})