import './Questions.css';
import praktikakohvik2022 from '../img/png/PK2022_1.jpg';
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const Questions = () => {
    const { language } = useContext(srcContext);

    return (
        <div className='container-questions'>
            <div className='container-questions text'>
                <h2>{language.questions.questionTitle}</h2>
                <p>{language.questions.questionContent.replaceAll('\\n', '\n')}</p>
                <ul>
                    {
                        language.questions.questions.map((q) => (
                            <li key={q}>{q}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='container-questions image'>
                <img src={praktikakohvik2022} alt="Praktikakohvik 2022"/>
            </div>
        </div>
    )
};

export default Questions;
