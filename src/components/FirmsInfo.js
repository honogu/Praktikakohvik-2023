import './FirmsInfo.css';
import { useContext, useState } from "react";
import { srcContext } from "../SrcContext.js";

const FirmsInfo = ({ selectedFirm }) => {
    const { value, language } = useContext(srcContext);
    const [ imageLoading, setImageLoading] = useState(true);

    return (
		<>
			<div className={ imageLoading ? 'image-container loading' : 'image-container' }>
				<img 
					style={ imageLoading ? { display: 'block' } : { display: 'none' } } 
					src={require("../img/png/placeholder.png")} alt="firmsLogo"/>
				<img
					src={'https://pkapi.onrender.com/api/firms/' + selectedFirm.id + '/image/1'}
					style={ imageLoading ? { display: 'none' } : { display: 'block' } }
					onLoad={() => setImageLoading(false) }
					alt="firmsLogo"
				/>
			</div>
			<p className='firms-text'>
				{
					(value === 'et' 
						? selectedFirm.estonianDescription 
						: selectedFirm.englishDescription) 
						?? language.firmList.Guide 
				}
			</p>
		</>
    )
};

export default FirmsInfo;
