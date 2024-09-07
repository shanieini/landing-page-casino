import './App.css';
import Header from './components/Header/Header.jsx';
import Body from './components/Body/Body.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Header />
      <Body isMobile={isMobile} />
    </>
  );
}

export default App;
