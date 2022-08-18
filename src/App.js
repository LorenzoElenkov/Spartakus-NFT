import React, { useRef, useState } from 'react'
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
import RarityTool from './components/RarityTool/RarityTool';
import Marketplace from './components/Marketplace/Marketplace';

const StyledApp = styled.div`
  position: relative;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr;
  overflow-x: hidden;
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

  .navigationBackground {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 10vh;
    background-color: rgba(0,0,0, 0.3);
    z-index: 9990;
  }
  
`;



const App = () => {
  // const [moveNext, setMoveNext] = useState(false);
  // const bgMusic = new Audio('./bgMusic.mp3');
  // bgMusic.loop = true;
  

  const [currentPage, setCurrentPage] = useState(1);
  const [isInSite, setIsInSite] = useState(false);
  const [showRT, setShowRT] = useState(false);
  const [showMP, setShowMP] = useState(false);



  // const trackScroll = (e) => {
  //   e.preventDefault();
  //   if (moveNext === true) {
  //     let delta = Math.sign(e.deltaY);
  //     if (currentPage === 1 && delta < 0) {
  //       scrollCount.current = 0;
  //     } else if (currentPage === 9 && delta > 0) {
  //       scrollCount.current = 0;
  //     } else {
  //       if (e.deltaY % Math.floor(e.deltaY) !== 0 || (e.deltaY % 19 === 0) || (e.wheelDeltaY % 54 === 0) || (e.deltaY % 125 === 0) || (e.deltaY % 3 === 0)) {
  //         scrollCount.current += delta*5 + 0.1;
  //       } else {
  //         scrollCount.current += delta;
  //       }
  //     }
  //   }
  //     if (scrollCount.current > 20 && moveNext === true && currentPage < 9 && window.outerWidth > 429) {
  //       moveNext = false;
  //       setCurrentPage(prev => (prev + 1));
  //       snd.play();
        
  //     } else if (scrollCount.current < -20 && moveNext === true && currentPage > 1 && window.outerWidth > 429) {
  //       moveNext = false;
  //       setCurrentPage(prev => (prev - 1));
  //       snd.play();
  //     }
  // };

  // useEffect(() => {
  //   scrollCount.current = 0;
  //   const move = setTimeout(() => {
  //     moveNext = true;
  //     scrollCount.current = 0;
  //     window.addEventListener('wheel', trackScroll);
  //   }, 3000);
  //   return () => {
  //     window.removeEventListener('wheel', trackScroll);
  //     scrollCount.current = 0;
  //     clearTimeout(move);
  //   }
  // },[currentPage])
  
  const handleLinkClick = (link) => {
    setCurrentPage(link);
  };

  const [bgVolume, setBgVolume] = useState(0.1);
  const [playMusic] = useSound(bgMusic2, { volume: bgVolume, loop: true });

  const handleLoadingClick = () => {
    playMusic();
    setIsInSite(true);
  };

  const handleVolume = (step) => {
    if (bgVolume > 0.05) {
      let normalizedVolume = bgVolume - step;
      setBgVolume(Number(normalizedVolume.toFixed(2)));
    }
     else if (bgVolume === 0.05) {
      setBgVolume(0);
    } else {
      setBgVolume(0.2);
    }
  };

  const infoRef = useRef(null);
  const loreRef = useRef(null);
  const roadmapRef = useRef(null);
  const faqRef = useRef(null);

  const mapRef = useRef(null);
  const previewRef = useRef(null);
  const tokenRef = useRef(null);
  const teamRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <StyledApp>
      {!isInSite && <Loading clicked={handleLoadingClick}/>}
      {window.outerWidth < 429 && <HeaderMobile music={handleVolume} volume={bgVolume} onMPClick={(state) => setShowMP(state)} info={infoRef} lore={loreRef} roadmap={roadmapRef} faq={faqRef} map={mapRef} preview={previewRef} token={tokenRef} team={teamRef} footer={footerRef} showRT={() => setShowRT(true)}/>}
      <Navigation currentPage={currentPage} onLinkClick={handleLinkClick} onRTClick={(state) => setShowRT(state)} onMPClick={(state) => setShowMP(state)} info={infoRef} lore={loreRef} roadmap={roadmapRef} faq={faqRef} map={mapRef} preview={previewRef} token={tokenRef} team={teamRef} footer={footerRef} />
      {window.outerWidth > 428 && <div className='navigationBackground'/>}
      {showRT && <RarityTool onRTClose={() => setShowRT(false)}/>}
      {showMP && <Marketplace />}
      {!showMP && <><Information forwardedRef={infoRef} currentPage={currentPage} onLinkClick={handleLinkClick} music={handleVolume} volume={bgVolume}/>
      <Countdown currentPage={currentPage}/>
      <OurStory forwardedRef={loreRef} currentPage={currentPage}/>
      <Map currentPage={currentPage} forwardedRef={mapRef}/>
      <Roadmap forwardedRef={roadmapRef} currentPage={currentPage}/>
      <Preview currentPage={currentPage} forwardedRef={previewRef}/>
      <Token currentPage={currentPage} forwardedRef={tokenRef}/>
      <Faq forwardedRef={faqRef} currentPage={currentPage}/>
      <Team currentPage={currentPage} forwardedRef={teamRef} />
      <Footer currentPage={currentPage} onLinkClick={handleLinkClick} forwardedRef={footerRef} info={infoRef} lore={loreRef} roadmap={roadmapRef} faq={faqRef}/>
      </>}
    </StyledApp>
  )
}

export default App;
