import './App.css';
import { animateCountdown } from './components/CountDown.js';
import Layout from './components/Layout.js';
import { srcContext } from './SrcContext';
import { useEffect, useState } from 'react';
import translation from './intl/et.json';

function App() {
  const [value, setValue] = useState('et');
  const [language, setLanguage] = useState(translation['et']);
  useEffect( () => { setLanguage(translation[value]); }, [value] );
  useEffect( () => { animateCountdown(); }, [] );

  return (
    <srcContext.Provider value={{ value, setValue, language }}>
      <Layout />
    </srcContext.Provider>
  );
}

export default App;