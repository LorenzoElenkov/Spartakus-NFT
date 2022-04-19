import React, { useRef, useLayoutEffect} from 'react';
import styled from 'styled-components';

import previewImg from '../../images/roadmpa/previewImg.png';
import trident from '../../images/roadmpa/trident.png';

const StyledContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    // background: white;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20% 5% 1fr;
    transition: left 0.5s ease-in-out;


    .tridentImg {
        width: 2.8%;
        justify-self: center;
        align-self: end;
    }

    .previewText {
        font-family: 'Magh';
        font-size: 2.5vw;
        justify-self: center;
        height: max-content;
    }
`;

const StyledCorouselPreview = styled.div`
    width: 100vw;
    height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    display: grid;
    grid-template-columns: repeat(5, 25%);
    column-gap: 3vw;
    img {
        // width: 100%;
    }
`;



const Preview = ({ currentPage }) => {


    const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const thisRef = useRef(null);
  let topPos = 0;
  let offset = 0;
  const onScroll = () => {
    topPos = thisRef.current.getBoundingClientRect().top;
    offset = ((window.innerHeight - topPos) / window.innerHeight).toFixed(2);
    console.log(offset);
    if (topPos > 30) {
        oneRef.current.style.opacity = offset - 0.5;
        twoRef.current.style.opacity = offset - 0.5;
        threeRef.current.style.opacity = offset - 0.5;
      }
      else if (topPos < -30) {
        oneRef.current.style.opacity = -offset - 0.5 + 2;
        twoRef.current.style.opacity = -offset - 0.5 + 2;
        threeRef.current.style.opacity = -offset -0.5 + 2;
      }
      else {
        oneRef.current.style.opacity = 1;
        twoRef.current.style.opacity = 1;
        threeRef.current.style.opacity = 1;
      }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {window.removeEventListener('scroll', onScroll)};
  });

  return (
    <StyledContainer page={currentPage} ref={thisRef}>
        <img src={trident} alt='' className='tridentImg' ref={oneRef}/>
        <span className='previewText' ref={twoRef}>Preview our Collection</span>
        <StyledCorouselPreview ref={threeRef}>
            <img src={previewImg} alt=''/>
            <img src={previewImg} alt=''/>
            <img src={previewImg} alt=''/>
            <img src={previewImg} alt=''/>
            <img src={previewImg} alt=''/>
        </StyledCorouselPreview>
    </StyledContainer>
  )
}

export default Preview;