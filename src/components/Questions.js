import './Questions.css';
import praktikakohvik2019 from '../img/png/praktikakohvik2019.jpg';
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const Questions = () => {
    const { language } = useContext(srcContext);

    return (
        <div className='container-questions'>
            <img src={praktikakohvik2019} alt="praktikakohvik 2019"/>
			<h3>{language.questions.questionTitle}</h3>
			<h2>{language.questions.questionContent.replaceAll('\\n', '\n')}</h2>
        </div>
    )
};

export default Questions;
