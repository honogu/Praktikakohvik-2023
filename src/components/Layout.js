import './Layout.css';
import Header from "./Header";
import Navbar from "./Navbar";
import Firms from './Firms';
import About from './About';
import Questions from './Questions';
import FBEvent from './FBEvent';
import Footer from './Footer';

function Layout() {
    return (
        <>
            <Navbar/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#312ebd" fillOpacity="0.5" d="M0,0L80,21.3C160,43,320,85,480,101.3C640,117,800,107,960,122.7C1120,139,1280,181,1360,202.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                <path fill="#312ebd" fillOpacity="0.2" d="M0,128L120,112C240,96,480,64,720,48C960,32,1200,32,1320,32L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
            </svg>
            <div className="container-main">
                <Header/>
                <div className='container-text'>
                    <About/>
                </div>
                <Firms/>
                <div className='container-text'>
                    <Questions/>
                </div>
                <FBEvent/>
                <Footer/>
            </div>
        </>
    )
}

export default Layout;