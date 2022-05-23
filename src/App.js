import React, { useEffect, useRef, useState, useMemo } from 'react'
import useSound from 'use-sound';
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
import Loading from './components/Loading/Loading';

import bgMusic2 from './images/bgMusic2.mp3';
import HeaderMobile from './components/MobileNav/HeaderMobile';

const StyledApp = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: repeat(auto-fill, 100vh);

  @media screen and (max-width: 765px) {
    display: block;
  }

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
  const snd = new Audio('./clicksound.wav');
  const bgMusic = new Audio('./bgMusic.mp3');
  bgMusic.loop = true;
  

  let moveNext = false;

  const [currentPage, setCurrentPage] = useState(1);
  const [isInSite, setIsInSite] = useState(false);
  const [imagesLoadedPerc, setImagesLoadedPerc] = useState(0);

  let scrollCount = useRef(0);
  let imagesLoaded = useRef(0);


  const changeImagesLoaded = () => {
    imagesLoaded.current++;
    if (imagesLoaded.current === 21) {
      setImagesLoadedPerc(21);
    }
  };


  const trackScroll = (e) => {
    e.preventDefault();
    if (moveNext === true) {
      let delta = Math.sign(e.deltaY);
      if (currentPage === 1 && delta < 0) {
        scrollCount.current = 0;
      } else if (currentPage === 9 && delta > 0) {
        scrollCount.current = 0;
      } else {
        console.log(e);
        if (e.deltaY % Math.floor(e.deltaY) !== 0 || (e.deltaY % 19 === 0) || (e.wheelDeltaY % 54 === 0) || (e.deltaY % 125 === 0) || (e.deltaY % 3 === 0)) {
          scrollCount.current += delta*5 + 0.1;
        } else {
          scrollCount.current += delta;
        }
      }
    }

      if (scrollCount.current > 20 && moveNext === true && currentPage < 9 && window.outerWidth > 429) {
        moveNext = false;
        setCurrentPage(prev => (prev + 1));
        snd.play();
        
      } else if (scrollCount.current < -20 && moveNext === true && currentPage > 1 && window.outerWidth > 429) {
        moveNext = false;
        setCurrentPage(prev => (prev - 1));
        snd.play();
      }
  };
  console.log(window.outerWidth);
  useEffect(() => {
    scrollCount.current = 0;
    const move = setTimeout(() => {
      moveNext = true;
      scrollCount.current = 0;
      window.addEventListener('wheel', trackScroll);
      console.log(`moveNext: ${moveNext}`);
    }, 3000);
    return () => {
      window.removeEventListener('wheel', trackScroll);
      scrollCount.current = 0;
      clearTimeout(move);
    }
  },[currentPage])
  
  const handleLinkClick = (link) => {
    setCurrentPage(link);
  };

  const [bgVolume, setBgVolume] = useState(0.1);
  const [playMusic] = useSound(bgMusic2, { volume: bgVolume, loop: true });

  const handleLoadingClick = () => {
    setIsInSite(true);
    playMusic();
  };

  const handleVolume = (step) => {
    if (bgVolume > 0.06) {
      setBgVolume(bgVolume - step);
    }
     else if (bgVolume < 0.06 && bgVolume > 0.05) {
      setBgVolume(0);
    } else {
      setBgVolume(0.2);
    }
  };


  return (
    <StyledApp>
      {!isInSite && <Loading clicked={handleLoadingClick} images={imagesLoaded.current}/>}
      <Countdown currentPage={currentPage}/>
      {window.outerWidth < 429 && <HeaderMobile music={handleVolume} volume={bgVolume}/>}
      <Navigation currentPage={currentPage} onLinkClick={handleLinkClick}/>
      <Information currentPage={currentPage} onLinkClick={handleLinkClick} images={changeImagesLoaded} music={handleVolume} volume={bgVolume}/>
      <OurStory currentPage={currentPage} images={changeImagesLoaded}/>
      <Map currentPage={currentPage} images={changeImagesLoaded}/>
      <Roadmap currentPage={currentPage} images={changeImagesLoaded}/>
      <Preview currentPage={currentPage} images={changeImagesLoaded}/>
      <Token currentPage={currentPage} images={changeImagesLoaded}/>
      <Faq currentPage={currentPage} images={changeImagesLoaded}/>
      <Team currentPage={currentPage} images={changeImagesLoaded}/>
      <Footer currentPage={currentPage} onLinkClick={handleLinkClick} images={changeImagesLoaded}/>
    </StyledApp>
  )
}

export default App;
