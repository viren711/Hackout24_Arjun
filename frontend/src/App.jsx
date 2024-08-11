import React, { useState, useEffect } from 'react';
import MainComponent from './components/MainComponent';
import EntryComponent from './components/EntryComponent';

function App() {
  const [showMainComponent, setShowMainComponent] = useState(false);
  const [host,setHost]=useState('');
  useEffect(() => {
    const currentUrl = window.location.href;
    console.log( window.location.host);
    setHost(window.location.host);
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        setShowMainComponent(true);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      {showMainComponent ? <MainComponent a={host} /> : <EntryComponent />}
    </>
  );
}

export default App;