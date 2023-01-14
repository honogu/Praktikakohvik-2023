import './About.css';
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const About = () => {
    const { language } = useContext(srcContext);

    return (
        <div className='container-about'>
            <h2>{language.about.aboutTitle}</h2>
			<p>{language.about.aboutContent.replaceAll('\\n', '\n')}</p>
        </div>
    )
};

export default About;