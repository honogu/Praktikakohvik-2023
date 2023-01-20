import './FirmsInfo.css';
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const FirmsInfo = ({ selectedFirm, isLoading, setLoading }) => {
    const { value, language } = useContext(srcContext);

    return (
		<>
			<div className='image-container'>
				<img style={ isLoading ? { display: 'block' } : { display: 'none' } } src={require("../img/png/placeholder.png")} alt="firmsLogo"/>
				<img
					src={'https://pkapi.onrender.com/api/firms/' + selectedFirm.id + '/image/1'}
					style={ isLoading ? { display: 'none' } : { display: 'block' } }
					onLoad={() => setLoading(false)}
					alt="firmsLogo"
				/>
			</div>
			<p>
				{
					(value === 'et' ? selectedFirm.estonianDescription : selectedFirm.englishDescription) ?? language.firmList.Guide 
				}
			</p>
		</>
    )
};

export default FirmsInfo;
