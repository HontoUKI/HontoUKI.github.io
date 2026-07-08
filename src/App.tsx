import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

const FADE_MS = 200;

export default function App() {
  const location = useLocation();
  const [displayed, setDisplayed] = useState(location);
  const [stage, setStage] = useState<'in' | 'out'>('in');

  useEffect(() => {
    if (location.pathname === displayed.pathname) return;
    // Fade the current page OUT, then swap the rendered location and fade the new one IN.
    setStage('out');
    const timer = setTimeout(() => {
      setDisplayed(location);
      window.scrollTo(0, 0);
      setStage('in');
    }, FADE_MS);
    return () => clearTimeout(timer);
  }, [location, displayed.pathname]);

  return (
    <>
      <Header />
      <main className={`main route-fade route-fade--${stage}`}>
        <Routes location={displayed}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
