import React, { useEffect, useRef, useState } from 'react'
import Countdown from './components/Countdown/Countdown';
import Faq from './components/FAQ/Faq';
import Team from './components/FAQ/Team';
import Footer from './components/Footer/Footer';
import Information from './components/Information/Information'
import Navigation from './components/Navigation/Navigation';
import Map from './components/Our Story/Map';
import OurStory from './components/Our Story/Our_Story';
import Preview from './components/Phases/Preview';
import Roadmap from './components/Phases/Roadmap';
import Token from './components/Phases/Token';

import styled from 'styled-components';

const StyledApp = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: repeat(auto-fill, 100vh);

  @font-face {
    font-family: 'Magh';
    src: url('./fonts/Maghfirea.otf');
  }
  
  @font-face {
    font-family: 'Medium';
    src: url('./fonts/CeraProMedium.otf');
  }
  
  
  @font-face {
    font-family: 'Light';
    src: url('./fonts/Cera-Pro-Light.otf');
  }
  
  @font-face {
    font-family: 'Black';
    src: url('./fonts/Cera-Pro-Black.otf');
  }
  
`;



const App = () => {
  const [moveNext, setMoveNext] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  let scrollCount = useRef(0);
  let windowScroll = 0;


  useEffect(() => {
    // window.addEventListener('wheel', (e) => {
    //   scrollCount.current += 1;
    //   if (scrollCount.current > 16 && e.deltaY > 40 && e.deltaY < 46) {
    //     scrollCount.current = 0;
    //     if (moveNext === true) {
    //       setCurrentPage(prev => (prev + 1));
    //       setMoveNext(false);
    //       setTimeout(() => {
    //         setMoveNext(true);
    //       }, 2000);
    //     }
    //   } else if (scrollCount.current > 16 && e.deltaY < -40 && e.deltaY > -46) {
    //     console.log(scrollCount.current + ' ' + e.deltaY);
    //     scrollCount.current = 0;
    //     if (moveNext === true) {
    //       setCurrentPage(prev => (prev - 1));
    //       setMoveNext(false);
    //       setTimeout(() => {
    //         setMoveNext(true);
    //       }, 2000);
    //     }
    //   }
    // });
    
  },[]);

  const handleLinkClick = (link) => {
    setCurrentPage(link);
  };
  return (
    <StyledApp>
      <Countdown currentPage={currentPage}/>
      <Navigation currentPage={currentPage} onLinkClick={handleLinkClick}/>
      <Information currentPage={currentPage}/>
      <OurStory currentPage={currentPage}/>
      <Map currentPage={currentPage}/>
      <Roadmap currentPage={currentPage}/>
      <Preview currentPage={currentPage}/>
      <Token currentPage={currentPage}/>
      <Faq currentPage={currentPage}/>
      <Team currentPage={currentPage}/>
      <Footer currentPage={currentPage}/>
    </StyledApp>
  )
}

export default App