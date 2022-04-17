import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';

import styled from 'styled-components';

const StyledCountdownContainer = styled.div`
    position: fixed;
    top: 0;
    left: 20vw;
    width: 24vw;
    display: grid;
    grid-template-columns: repeat(4, 6vw);
    z-index: 5;
    .spanCount {
        font-size: 1.5vw;
        font-family: 'Magh';
        font-weight: 600;
        letter-spacing: 2px;
        justify-self: center;
        color: ${props => props.page === 2 || props.page === 4 || props.page === 7 || props.page === 9 ? 'white' : '#0f1026'};
        transition: color 0.5s ease-in-out;
    }

    .spanTitle {
        font-size: 0.8vw;
        margin-top: 1vh;
        justify-self: center;
        color: ${props => props.page === 2 || props.page === 4 || props.page === 7 || props.page === 9 ? 'white' : '#0f1026'};
        transition: color 0.5s ease-in-out;
    }

    .spanHeader {
        grid-column: 1/5;
        background: #0f1026;
        color: white;
        font-size: 1.5vw;
        font-family: 'Magh';
        padding: 1vh 0;
        text-align: center;
        width: 100%;
        transition: all 0.5s ease-in-out;
        font-weight: 700;
    }
`;


const Countdown = ({ currentPage }) => {

    const releaseDate = 1654030800000;
    let diff2 = releaseDate - Date.now();
    const [diff, setDiff] = useState(releaseDate - Date.now());

    let days = Math.floor(diff/1000/60/60/24);
    diff2 -= days*1000*60*60*24;
    let hours = Math.floor(diff2/1000/60/60);
    diff2 -= hours*1000*60*60;
    let minutes = Math.floor(diff2/1000/60);
    diff2 -= minutes*1000*60;
    let seconds = Math.floor(diff2/1000);


    useEffect(() => {
        
        setTimeout(() => {
            setDiff(diff - 1000);
        }, 1000);
    },[diff]);

    const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const thisRef = useRef(null);
  let topPos = 0;
  let offset = 0;
  const onScroll = () => {
    // console.log(Math.floor(window.scrollY / window.innerHeight));
    if (Math.floor(window.scrollY / window.innerHeight) >= 0 && Math.floor(window.scrollY / window.innerHeight) !== 1) {
      for (let i = 0; i < document.getElementsByClassName('spanTitle').length; i++) {
        document.getElementsByClassName('spanTitle')[i].style.color = '#0f1026';
      }
      for (let i = 0; i < document.getElementsByClassName('spanCount').length; i++) {
        document.getElementsByClassName('spanCount')[i].style.color = '#0f1026';
      }
      for (let i = 0; i < document.getElementsByClassName('spanHeader').length; i++) {
        document.getElementsByClassName('spanHeader')[i].style.color = 'white';
        document.getElementsByClassName('spanHeader')[i].style.backgroundColor = '#0f1026';
      }
    }
    if (Math.floor(window.scrollY / window.innerHeight) === 1 || Math.floor(window.scrollY / window.innerHeight) === 3 || Math.floor(window.scrollY / window.innerHeight) === 8) {
        for (let i = 0; i < document.getElementsByClassName('spanTitle').length; i++) {
            document.getElementsByClassName('spanTitle')[i].style.color = 'white';
        }
        for (let i = 0; i < document.getElementsByClassName('spanCount').length; i++) {
        document.getElementsByClassName('spanCount')[i].style.color = 'white';
        }
        for (let i = 0; i < document.getElementsByClassName('spanHeader').length; i++) {
            document.getElementsByClassName('spanHeader')[i].style.color = '#0f1026';
            document.getElementsByClassName('spanHeader')[i].style.backgroundColor = 'white';
          }
    }
    else {
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {window.removeEventListener('scroll', onScroll)};
  });

  return (
    <StyledCountdownContainer page={currentPage} >
        <span className='spanHeader'>WHITELIST SALE IN</span>
        <span className='spanTitle'>DAYS</span>
        <span className='spanTitle'>HOURS</span>
        <span className='spanTitle'>MINUTES</span>
        <span className='spanTitle'>SECONDS</span>
        <span className='spanCount'>{days}</span>
        <span className='spanCount'>{hours > 9 ? hours : `0${hours}`}</span>
        <span className='spanCount'>{minutes > 9 ? minutes : `0${minutes}`}</span>
        <span className='spanCount'>{seconds > 9 ? seconds : `0${seconds}`}</span>
    </StyledCountdownContainer>
  )
}

export default Countdown;