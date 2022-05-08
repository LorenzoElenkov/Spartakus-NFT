import React from 'react';

import styled from 'styled-components';

import black from '../../images/222 black.png';
import red from '../../images/222 red.png';
import blue from '../../images/222 blue.png';
import purple from '../../images/222 purple.png';
import green from '../../images/222 green.png';

const StyledContainer = styled.div`
    position: absolute;
    top: ${props => props.page === 8 ? '0' : '-110vh'};
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    display: grid;
    grid-template-rows: 25% 1fr 20%;
    transition: top 0.5s ease-in-out;
    overflow: hidden;

    .teamTitle {
        color: #0f1026;
        justify-self: center;
        align-self: end;
        margin-bottom: 5vh;
        font-family: 'Medium';
        letter-spacing: 1px;
        font-size: 1.8vw;
    }

    .teamContainer {
        background: #0f1026;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }

    .teamContainer span {
        font-size: 1.4vw;
        font-family: 'Medium';
        letter-spacing: 1px;
    }

    .img1, .img2, .img3, .img4, .img5 {
        grid-row: 1/1;
        justify-self: center;
        align-self: end;
        background: white;
        /* border-radius: 50vw; */
        width: 75%;
    }

    .name1, .name2, .name3, .name4, .name5 {
        color: white;
        grid-row: 2/2;
        justify-self: center;
        align-self: center;
    }

    .ceo {
        grid-row: 3/3;
        justify-self: center;
        color: #f2cb05;
    }

    .dropEmail {
        justify-self: center;
        align-self: center;
    }

    .still {
        display: block;
        text-align: center;
        font-size: 1.4vw;
        font-family: 'Medium';
        margin-bottom: 1vw;
    }

    .subtextStill {
        display: block;
        text-align: center;
        font-size: 1.2vw;
        color: gray;
        font-family: 'Medium';
    }

    .underline {
        text-decoration: underline;
        color: rgb(0, 0, 150);
    }
`;
const Team = ({ currentPage, images }) => {
    const addImageLoaded = () => {
        images();
    };
  return (
    <StyledContainer page={currentPage}>
        <span className='teamTitle'>Meet the Team</span>
        <div className='teamContainer'>
            <img src={red} alt='' className='img1' onLoad={addImageLoaded}/>
            <span className='name1'>
                Lysandros
            </span>
            <span className='ceo'>
                Blockchain Developer
            </span>
            <img src={blue} alt='' className='img2' onLoad={addImageLoaded}/>
            <span className='name2'>
                Isidoros
            </span>
            <span className='ceo'>
                3D Art Designer
            </span>
            <img src={black} alt='' className='img3' onLoad={addImageLoaded}/>
            <span className='name3'>
                Markos
            </span>
            <span className='ceo'>
                Marketing Manager
            </span>
            <img src={green} alt='' className='img4' onLoad={addImageLoaded}/>
            <span className='name4'>
                Kallinikos
            </span>
            <span className='ceo'>
                Discord Manager
            </span>
            <img src={purple} alt='' className='img5' onLoad={addImageLoaded}/>
            <span className='name5'>
                Achilles
            </span>
            <span className='ceo'>
                Founder
            </span>
        </div>
        <span className='dropEmail'>
            <span className='still'>
                Still have questions?
            </span>
            <span className='subtextStill'>
                Can't find the answer you're looking for? <br />
                Drop us a line in our dedicated Discord channel!
            </span>
        </span>
    </StyledContainer>
  )
}

export default Team;