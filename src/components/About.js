import './About.css';
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const About = () => {
    const { language } = useContext(srcContext);

    return (
        <div className='container-about'>
            <h2>{language.about.aboutTitle}</h2>
			<h3>{language.about.aboutContent.replaceAll('\\n', '\n')}</h3>
        </div>
    )
};

export default About;