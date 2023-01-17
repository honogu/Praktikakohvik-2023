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
			else setLoadingText(setLoadingText => setLoadingText = '')
		}, 500);
		return () => clearInterval(interval)
    }, [isLoading, totalIntervalTime]);

    return (
		<p className='info-placeholder'>
			{
				isLoading
				?	language.firmList.Loading + loadingText +
					(totalIntervalTime >= 10000 ? '\n' + language.firmList.Apology : '')
				:	firmsCount === 0
					? 	language.firmList.Undefined
					:	language.firmList.Guide 
			}
		</p>
    )
};

export default FirmsInfoPlaceholder;
