import './Firms.css';
import { useContext, useState } from "react";
import { srcContext } from "../SrcContext.js";

const Firms = () => {
    const { value, language } = useContext(srcContext);
    const [ firms, setFirms ] = useState([]);
    const [ firmId, setId ] = useState('');
    const [ firmText, setText ] = useState([]);
    const [ clicked, setClicked ] = useState(false);
    const [ placeholder, setPlaceholder ] = useState(true);
    const [ loading, setLoading ] = useState(true);

    const [ borderStyle, setBorderStyle ] = useState({border: "2px", borderStyle: "dashed", borderColor: "white", marginTop: "25%"});
    const [ textStyle, setTextStyle ] = useState({textAlign: "center", fontSize: "25px", paddingTop: "50px"});
    const [ logosStyle, setLogosStyle ] = useState({height: "0px", visibility: "hidden", margin: "0"});

	if (firms.length === 0)
	{
		loadFirms(setFirms)
	}

    function click(firm, button) {
		setId(firm.id)
		setPlaceholder(true)
		getFirm(setText, setLoading, firm.id)
		RemoveStyles();
		AddStylesToSelectedFirmButtons(button);
		if (!clicked)
		{
			setClicked(true)
			RemoveStartingStyles(setBorderStyle, setTextStyle, setLogosStyle);
		}
    }

    return (
        <div className="container-firms">
			<section className="firms-list">
				<h3>{language.firms.firmsTitle}</h3>
				<ul>
					{
						firms.map((firm) => (
							<li key={firm.name}><button onClick={(e) => click(firm, e)}><h2>{firm.name}</h2></button></li>
						))
					}
					<li><button><h2>...</h2></button></li>
					<li id='f2'><button><h2>...</h2></button></li>
					<li id='f3'><button><h2>...</h2></button></li>
				</ul>
			</section>

			<div className="container-grid">
				<section className="firms-map">
					<img src={require("../img/png/" + language.firms.map + ".png")} alt="Aula"/>
				</section>
				
				<section style={borderStyle} className="firms-info">
					<div style={logosStyle} className='image-container'>
						<img style={loading || placeholder ? { display: 'block' } : { display: 'none' } } src={require("../img/png/placeholder.png")} alt="firmsLogo"/>
						<img
							src={'https://pkapi.onrender.com/api/firms/' + firmId + '/image/1'}
							style={ loading || placeholder ? { display: 'none' } : { display: 'block' } }
							onLoad={() => setPlaceholder(false)}
							alt="firmsLogo"
						/>
					</div>
					<h2 style={textStyle}>
						{
							firms.length === 0
							? 	language.firmList.Undefined
							:	!clicked
									? language.firmList.Guide
									: loading || placeholder
										? '. . .'
										: (value === 'et' ? firmText[0] : firmText[1]) ?? language.firmList.Guide 
						}
					</h2>
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
		var firms = []
        data.forEach((firm) => {
            firms.push(firm)
        })
		setFirms(firms)
	}
}

const getFirm = async (setText, setLoading, id) => {
	setLoading(true)
	const response = await fetch('https://pkapi.onrender.com/api/firms/' + id);
	const data = await response.json();

	if (data) {
		setText([data.estonianDescription, data.englishDescription])
		setLoading(false)
	}
}