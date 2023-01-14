import './Firms.css';
import { useContext, useState, useEffect } from "react";
import { srcContext } from "../SrcContext.js";

const Firms = () => {
    const { value, language } = useContext(srcContext);
    const [ firms, setFirms ] = useState([]);
    const [ selectedFirm, setSelectedFirm ] = useState([]);
    const [ clicked, setClicked ] = useState(false);
    const [ placeholder, setPlaceholder ] = useState(true);

    const [ borderStyle, setBorderStyle ] = useState({border: "2px", borderStyle: "dashed", borderColor: "white", marginTop: "25%"});
    const [ textStyle, setTextStyle ] = useState({textAlign: "center", fontSize: "20px", paddingTop: "50px"});
    const [ logosStyle, setLogosStyle ] = useState({height: "0px", visibility: "hidden", margin: "0"});

    useEffect(() => {
		loadFirms(setFirms)
    }, []);

    function click(firm, button) {
		if (firm.id !== selectedFirm.id)
		{
			let filteredFirm = firms.filter(function(x) { return x.id === firm.id; });
			setSelectedFirm(...filteredFirm)
			setPlaceholder(true)
			RemoveStyles();
			AddStylesToSelectedFirmButtons(button);
		}
		if (!clicked)
		{
			setClicked(true)
			RemoveStartingStyles(setBorderStyle, setTextStyle, setLogosStyle);
		}
    }

    return (
        <div className="container-firms">
			<div className="container-grid">
				<h2 id='firms-title'>{language.firms.firmsTitle}</h2>
				<section className="firms-list">
					<ul>
						{
							firms.map((firm) => (
								<li key={firm.name}><button onClick={(e) => click(firm, e)}><h3>{firm.name}</h3></button></li>
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
				
				<section style={borderStyle} className="firms-info">
					<div style={logosStyle} className='image-container'>
						<img style={ placeholder ? { display: 'block' } : { display: 'none' } } src={require("../img/png/placeholder.png")} alt="firmsLogo"/>
						<img
							src={'https://pkapi.onrender.com/api/firms/' + selectedFirm.id + '/image/1'}
							style={ placeholder ? { display: 'none' } : { display: 'block' } }
							onLoad={() => setPlaceholder(false)}
							alt="firmsLogo"
						/>
					</div>
					<p style={textStyle}>
						{
							firms.length === 0
							? 	language.firmList.Undefined
							:	!clicked
									? language.firmList.Guide
									: placeholder
										? '. . .'
										: (value === 'et' ? selectedFirm.estonianDescription : selectedFirm.englishDescription) ?? language.firmList.Guide 
						}
					</p>
				</section>
			</div>
        </div>
    )
};

export default Firms;

function RemoveStyles() {
	var arrayOfFirmNameButtons = document.getElementsByTagName("UL")[0];
	for (let i = 0; i < arrayOfFirmNameButtons.getElementsByTagName("BUTTON").length; i++) {
		arrayOfFirmNameButtons.getElementsByTagName("BUTTON")[i].style.cssText = '';
	}
}

function RemoveStartingStyles(setBorderStyle, setTextStyle, setLogosStyle) {
	setBorderStyle({border: '', borderStyle: '', borderColor: '', marginTop: ''});
	setTextStyle({textAlign: '', fontSize: '', paddingTop: ''});
	setLogosStyle({height: '', visibility: '', margin: ''});
}

function AddStylesToSelectedFirmButtons(button) {
	button.currentTarget.style.backgroundColor = '#FF0063';
}

const loadFirms = async (setFirms) => {
	const response = await fetch('https://pkapi.onrender.com/api/firms');
	const data = await response.json();

	if (data) {
		var promises = data.map(f => getFirm(f.id))
		var result = await Promise.all(promises)
		setFirms(result)
	}
}

const getFirm = async (id) => {
	const response = await fetch('https://pkapi.onrender.com/api/firms/' + id);
	const data = await response.json();

	if (data) {
		return data
	}
}
