import './Firms.css';
import { useContext, useState, useEffect } from "react";
import { srcContext } from "../SrcContext.js";
import FirmsInfo from './FirmsInfo';
import FirmsInfoPlaceholder from './FirmsInfoPlaceholder';

const Firms = () => {
    const { language } = useContext(srcContext);
    const [ firms, setFirms ] = useState([]);
    const [ selectedFirm, setSelectedFirm ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ clicked, setClicked ] = useState(false);

    useEffect(() => {
		loadFirms(setFirms, setLoading)
    }, []);

    function click(firm) {
		setClicked(true)
		if (firm.id !== selectedFirm.id)
		{
			let filteredFirm = firms.filter(function(x) { return x.id === firm.id; });
			setLoading(true)
			setSelectedFirm(...filteredFirm)
		}
    }

	let firmsInfoComponent = !clicked
		? <FirmsInfoPlaceholder 
			isLoading={loading}
			firmsCount={firms.length}
		/>
		: <FirmsInfo selectedFirm={selectedFirm} isLoading={loading} setLoading={setLoading} /> 

    return (
        <div className="container-firms">
			<div className="container-grid">
				<h2 id='firms-title'>{language.firms.firmsTitle}</h2>
				<section className="firms-list">
					<ul>
						{
							firms.map((firm) => (
								<li key={firm.name}>
									<button className={firm.name === selectedFirm.name ? 'active' : ''} onClick={() => click(firm)}>
										<h3>{firm.name}</h3>
									</button>
								</li>
							))
						}
						<li><button><h3>...</h3></button></li>
						<li id='f2'><button><h3>...</h3></button></li>
						<li id='f3'><button><h3>...</h3></button></li>
					</ul>
				</section>

				<section className="firms-map">
					<img src={require("../img/png/" + language.firms.map + ".png")} alt="Aula"/>
				</section>
				
				<section className="firms-info">
					{ firmsInfoComponent }
				</section>
			</div>
        </div>
    )
};

export default Firms;

const loadFirms = async (setFirms, setLoading) => {
	const response = await fetch('https://pkapi.onrender.com/api/firms');
	const data = await response.json();

	if (data) {
		setFirms(data)
		setLoading(false)
	}
}
