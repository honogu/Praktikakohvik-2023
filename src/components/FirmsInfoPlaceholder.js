import './FirmsInfoPlaceholder.css';
import { useContext, useState, useEffect } from "react";
import { srcContext } from "../SrcContext.js";

const FirmsInfoPlaceholder = ({ isLoading, firmsCount }) => {
    const { language } = useContext(srcContext);
    const [ loadingText, setLoadingText ] = useState('');
    const [ totalIntervalTime, setTotalIntervalTime] = useState(0);

    useEffect(() => {
		const interval = setInterval(function() {
			if (isLoading)
			{
				setLoadingText(setLoadingText => setLoadingText === ' . . .' ? '' : setLoadingText += ' .')
				setTotalIntervalTime(setTotalIntervalTime => setTotalIntervalTime += 500)
			}
			else 
			{
				setLoadingText(setLoadingText => setLoadingText = '')
				setTotalIntervalTime(0)
			}
		}, 500);
		return () => clearInterval(interval)
    }, [isLoading]);

    return (
		<section className='info-placeholder'>
			<p>
				{
					isLoading
					?	language.firmList.Loading + loadingText
					:	firmsCount === 0
						? 	language.firmList.Undefined
						:	language.firmList.Guide 
				}
			</p>
			<h3>{totalIntervalTime >= 15000 ? language.firmList.Apology : ''}</h3>
		</section>
    )
};

export default FirmsInfoPlaceholder;
