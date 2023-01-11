import './Layout.css';
import Header from "./Header";
import Navbar from "./Navbar";
import Firms from './Firms';
import About from './About';
import Questions from './Questions';
import Gallery from './Gallery';
import Footer from './Footer';

function Layout() {
    return (
        <>
            <Navbar/>
            <div className="container-main">
                <Header/>
                <div className='container-text'>
                    <div className='container'>
                        <About/>
                    </div>
                    <div className='text-bg'></div>
                </div>
                <Firms/>
                <div className='container-text'>
                    <div className='container'>
                        <Questions/>
                    </div>
                    <div className='text-bg'></div>
                </div>
                <Gallery/>
                <Footer/>
            </div>
        </>
    )
}

export default Layout;