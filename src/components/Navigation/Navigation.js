import React, { useRef, useLayoutEffect } from 'react';

import styled from 'styled-components';


const NavigationBar = styled.nav`
        position: fixed;
        top: 0;
        left: 50vw;
        width: 50vw;
        z-index: 9999;
        display: grid;
        grid-template-columns: 12% repeat(5, 1fr);
        .homeBut {
            grid-column: 2/2;
        }

        .homeBut, .loreBut, .roadmapBut, .faqBut {
            background: #5F021F;
            border: none;
            font-size: 1.2vw;
            border-top: 7px solid transparent;
            padding-top: 4vh;
            color: ${props => props.page === 1 || props.page === 4  || props.page === 7 || props.page === 9 ? 'white' : '#0f1026'};
            font-weight: 800;
            letter-spacing: 2px;
            font-family: 'Medium';
            transition: color 0.5s ease-in-out, border-top 0.5s ease-in-out;
            position: relative;
        }
        
        .homeBut:hover, .loreBut:hover, .roadmapBut:hover, .faqBut:hover {
            cursor: pointer;
        }


        .loreBut:hover .innerMenuLore, .roadmapBut:hover .innerMenuRoadmap, .faqBut:hover .innerMenuFaq {
            display: grid;
        }

        .innerMenuLore, .innerMenuRoadmap, .innerMenuFaq {
            position: absolute;
            top: calc(4vh + 1.2vw);
            left: 0;
            display: none;
            justify-content: center;
            width: 100%;
            background: white;
            border: 1px solid black;
            border-top: none;
            padding-top: 2vh;
        }

        .innerMenuLore:hover, .innerMenuRoadmap:hover, .innerMenuFaq:hover {
            display: grid;
        }

        .innerMenuLore button, .innerMenuRoadmap button, .innerMenuFaq button {
            background: none;
            border: none;
            font-size: 1vw;
            font-family: 'Light';
            letter-spacing: 1px;
            padding: 1.5vh 0;
        }

        .innerMenuLore button:not(:last-child), .innerMenuRoadmap button:not(:last-child), .innerMenuFaq button:not(:last-child) {
            border-bottom: 1px solid black;
        }

        .active {
            border-top: 7px solid ${props => props.page === 1 || props.page === 4 || props.page === 7 || props.page === 9 ? 'white' : '#0f1026'};;
        }

        .innerLorePointer {
            width: 100%;
            justify-self: center;
            font-size: 0.8vw;
            color: black;
            letter-spacing: -2px;
            color: black;
        }
    `;


const Navigation = ({ currentPage, onLinkClick }) => {

    const onScroll = () => {
        // console.log(Math.floor(window.scrollY / window.innerHeight));
        if (Math.floor(window.scrollY / window.innerHeight) >= 0 && Math.floor(window.scrollY / window.innerHeight) !== 1) {
          for (let i = 0; i < document.getElementsByClassName('spanTitle').length; i++) {

          }
          for (let i = 0; i < document.getElementsByClassName('spanCount').length; i++) {

          }
          for (let i = 0; i < document.getElementsByClassName('spanHeader').length; i++) {

          }
        }
        if (Math.floor(window.scrollY / window.innerHeight) === 1 || Math.floor(window.scrollY / window.innerHeight) === 3 || Math.floor(window.scrollY / window.innerHeight) === 8) {
            for (let i = 0; i < document.getElementsByClassName('spanTitle').length; i++) {
            }
            for (let i = 0; i < document.getElementsByClassName('spanCount').length; i++) {
            }
            for (let i = 0; i < document.getElementsByClassName('spanHeader').length; i++) {
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
    <NavigationBar page={currentPage}>
        <button className={currentPage === 1 ? 'homeBut active' : 'homeBut'} onClick={() => {onLinkClick(1)}}>Home</button>
        <button className={currentPage >= 2 && currentPage <= 3 ? 'loreBut active' : 'loreBut'}>
            Lore
            <div className='innerMenuLore' page={currentPage}>
                <span className='innerLorePointer'>\/</span>
                <button page={currentPage} onClick={() => {onLinkClick(2)}}>Story</button>
                <button page={currentPage} onClick={() => {onLinkClick(3)}}>Ancient Map</button>
            </div>
        </button>
        <button className={currentPage > 3 && currentPage <= 6? 'roadmapBut active' : 'roadmapBut'}>
            Roadmap
            <div className='innerMenuRoadmap' page={currentPage}>
                <span className='innerLorePointer'>\/</span>
                <button page={currentPage} onClick={() => {onLinkClick(4)}}>Roadmap</button>
                <button page={currentPage} onClick={() => {onLinkClick(5)}}>The Collection</button>
                <button page={currentPage} onClick={() => {onLinkClick(6)}}>Token</button>
            </div>
        </button>
        <button className={currentPage > 6 ? 'faqBut active' : 'faqBut'}>
            FAQ
            <div className='innerMenuFaq' page={currentPage}>
                <span className='innerLorePointer'>\/</span>
                <button page={currentPage} onClick={() => {onLinkClick(7)}}>FAQ</button>
                <button page={currentPage} onClick={() => {onLinkClick(8)}}>Our Team</button>
                <button page={currentPage} onClick={() => {onLinkClick(9)}}>Contact</button>
            </div>
        </button>
    </NavigationBar>
  )
}

export default Navigation;