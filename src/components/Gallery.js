import './Gallery.css';
import { useEffect, useState } from "react";
import praktikakohvik2022_1 from '../img/png/PK2022_2.jpg';
import praktikakohvik2022_2 from '../img/png/PK2022_3.jpg';
import praktikakohvik2022_3 from '../img/png/PK2022_4.jpg';
import praktikakohvik2022_4 from '../img/png/PK2022_5.jpg';
import praktikakohvik2022_5 from '../img/png/PK2022_6.jpg';
import praktikakohvik2022_6 from '../img/png/PK2022_7.jpg';

const Gallery = () => {
    const [ firstSetOfImages, imageSet ] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            imageSet(imageSet => !imageSet);
        }, 13000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='container-gallery'>
            <div className='container-questions image'>
                <img style={firstSetOfImages ? { opacity: '1' } : { opacity: '0' } } src={praktikakohvik2022_1} alt="Praktikakohvik 2022"/>
                <img style={firstSetOfImages ? { opacity: '0' } : { opacity: '1' } } src={praktikakohvik2022_4} alt="Praktikakohvik 2022"/>
            </div>
            <div className='container-questions image'>
                <img style={firstSetOfImages ? { opacity: '1' } : { opacity: '0' } } src={praktikakohvik2022_2} alt="Praktikakohvik 2022"/>
                <img style={firstSetOfImages ? { opacity: '0' } : { opacity: '1' } } src={praktikakohvik2022_5} alt="Praktikakohvik 2022"/>
            </div>
            <div className='container-questions image'>
                <img style={firstSetOfImages ? { opacity: '1' } : { opacity: '0' } } src={praktikakohvik2022_3} alt="Praktikakohvik 2022"/>
                <img style={firstSetOfImages ? { opacity: '0' } : { opacity: '1' } } src={praktikakohvik2022_6} alt="Praktikakohvik 2022"/>
            </div>
        </div>
    )
};

export default Gallery;

