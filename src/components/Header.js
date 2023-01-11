import './Header.css';
import BG from '../img/png/PK2022_0.JPG';
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const Header = () => {
    const { language } = useContext(srcContext);

    return (
        <>
            <div className='header-bg'>
                <div id='img-filter'></div>
                <img src={BG} alt="Event" />
            </div>
            <header>
                <h1 id='header-title'>PRAKTIKA-<br/>KOHVIK</h1>
                <h3 id='header-date'>{language.header.date}</h3>
                
                <section className="countdown">
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
                </section>
            </header>
        </>
    )
};

export default Header;