
import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import Layout from './utils/Layout';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Landing from './components/LandingPage/Landing';
import About from './pages/About/About';
import ProjectDescription from './pages/projects/ProjectDescription';
import CursorTrailCanvas from './components/cursor-trail-canvas';
import { useSelector } from 'react-redux';
import ScrollToTop from './hooks/ScrollToTop/ScrollToTop';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  const links = [
    {
      path: "/",
      element: <Landing />,
      id: 1
    },
    {
      path: '/about',
      element: <About />,
      id: 2
    },
    {
      path: '/projects',
      element: <ProjectDescription />,
      id: 3
    }
  ]
  const theme = useSelector((store) => store.navbar.selectedTheme);
  useEffect(() => {
    AOS.refresh(); // Reinitialize AOS on theme change
  }, [theme]);
  return (
    <div className={` overflow-x-hidden ${!theme? 'bg-black':''} `}>
      <ScrollToTop/>
      <CursorTrailCanvas color="" />
      <Routes>
        {
          links.map(({ path, element, id }) => (
            <Route key={id} path={path} element={element} />
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
