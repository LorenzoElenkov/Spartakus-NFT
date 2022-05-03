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
  // const [moveNext, setMoveNext] = useState(false);
  let moveNext = false;

  const [currentPage, setCurrentPage] = useState(1);
  let scrollCount = useRef(0);


  const trackScroll = (e) => {
    e.preventDefault();
    if (moveNext === true) {
      let delta = Math.sign(e.deltaY);
      if (currentPage === 1 && delta < 0) {
        scrollCount.current = 0;
      } else if (currentPage === 9 && delta > 0) {
        scrollCount.current = 0;
      } else {
        if (e.deltaY % Math.floor(e.deltaY) !== 0 || (e.deltaY % 19 === 0)) {
          scrollCount.current += delta*5 + 0.1;
        } else {
          scrollCount.current += delta;
        }
      }
    }

      // if (scrollCount.current > 20 && moveNext === true && currentPage < 9) {
      //   moveNext = false;
      //   setCurrentPage(prev => (prev + 1));
        
      // } else if (scrollCount.current < -20 && moveNext === true && currentPage > 1) {
      //   moveNext = false;
      //   setCurrentPage(prev => (prev - 1));
      // }
  };

  useEffect(() => {

    // setTimeout(() => {
    //   setMoveNext(true);
    //   console.log(moveNext);
    // }, 2000);
    // window.addEventListener('wheel', (e) => {
    //   scrollCount.current += 1;
    //   if (scrollCount.current > 16 && e.deltaY > 40 && e.deltaY < 46) {
    //     scrollCount.current = 0;
    //     if (moveNext === true) {
    //       setCurrentPage(prev => (prev + 1));
    //     }
    //   } else if (scrollCount.current > 16 && e.deltaY < -40 && e.deltaY > -46) {
    //     scrollCount.current = 0;
    //     if (moveNext === true) {
    //       setCurrentPage(prev => (prev - 1));
    //     }
    //   }
    // });

    
    
  },[currentPage]);

  useEffect(() => {
    scrollCount.current = 0;
    const move = setTimeout(() => {
      moveNext = true;
      scrollCount.current = 0;
      window.addEventListener('wheel', trackScroll);
      console.log(`moveNext: ${moveNext}`);
    }, 1500);
    return () => {
      window.removeEventListener('wheel', trackScroll);
      scrollCount.current = 0;
      clearTimeout(move);
      console.log('asd');
    }
  },[currentPage])
  
  const handleLinkClick = (link) => {
    setCurrentPage(link);
  };


  return (
    <StyledApp>
      <Countdown currentPage={currentPage}/>
      <Navigation currentPage={currentPage} onLinkClick={handleLinkClick}/>
      <Information currentPage={currentPage} onLinkClick={handleLinkClick}/>
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