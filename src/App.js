import './App.css';
import './components/CountDown.js';
import Layout from './components/Layout.js';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Firms from './components/Firms.js';
import { srcContext } from './SrcContext';
import { useEffect, useState } from 'react';
import translation from './intl/et.json';
import Questions from './components/Questions';
import Footer from './components/Footer';

function App() {
  const [value, setValue] = useState('et');
  const [language, setLanguage] = useState(translation['et']);
  useEffect( () => { setLanguage(translation[value]); }, [value] );

  return (
    <srcContext.Provider value={{ value, setValue, language }}>
      <Layout>
        <Navbar/>
        <Header/>
        <About/>
        <Firms/>
        <Questions/>
        <Footer/>
      </Layout>
    </srcContext.Provider>
  );
}

export default App;