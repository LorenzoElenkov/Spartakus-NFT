import React, { useRef, useState } from 'react';

import styled from 'styled-components';

import firstReveal from '../../rarity/First_Reveal2.json';
import fullReveal from '../../rarity/Full_reveal.json';

// import asd from '../../../public/logo192.png';
const RarityTool = (props) => {

    const backdropRef = useRef(null);
    const [chosenNumber, setChosenNumber] = useState(Math.floor(Math.random() * 10878));

    const detectClick = (e) => {
        if (e.target === backdropRef.current) {
            props.onRTClose();
        }
    }

    const handleChosenNumber = (e) => {
        if (e === '') {
            setChosenNumber(0);
        } else if (e > 10877){
            setChosenNumber(10877);
        } else if (e < 0) {
            setChosenNumber(0);
        } else {
            setChosenNumber(e);
        }
    }
  return (
    <StyledBackdrop ref={backdropRef} onClick={(e) => detectClick(e)} >
        <StyledContainer>
            <span className='title'>Heroes of Olympus<br/>Rarity Tool</span>
            <div className='description'>
                    <span className=''>Check your Ranking</span>
                    <span className='second'>Enter your NFT number to check your ranking</span>
                </div>
            <div className='inputs'>
                <div className='bg'>
                    <h2>ID</h2>
                </div>
                <input type="number" className='idInput' onKeyDown={(e) => e.code >= 48 && e.code <= 57} value={chosenNumber} onChange={(e) => handleChosenNumber(e.target.value)} min='0' max='10877'/>
                {/* <label>Rank</label>
                <input type="number" className='rankInput' /> */}
            </div>
            <img src={process.env.PUBLIC_URL + 'reveal/' + firstReveal[chosenNumber].url} alt='' className='revealImage'/>
            <div className='traits'>
                <label>Tribe</label>
                <span>{fullReveal[chosenNumber].traits[2].value}</span>
                <label>Class</label>
                <span>{fullReveal[chosenNumber].traits[1].value}</span>
                <label>Background</label>
                <span>{fullReveal[chosenNumber].traits[3].value}</span>
                <label>Armor</label>
                <span>{fullReveal[chosenNumber].traits[0].value}</span>
                <label>Weapon Type</label>
                <span>{fullReveal[chosenNumber].traits[4].value === 'None' ? 'None' : fullReveal[chosenNumber].traits[4].value.split(" ")[1][0].toUpperCase() + fullReveal[chosenNumber].traits[4].value.split(" ")[1].substring(1)}</span>
                <label>Weapon Material</label>
                <span>{fullReveal[chosenNumber].traits[4].value.split(" ")[0]}</span>
            </div>
        </StyledContainer>
    </StyledBackdrop>
  )
}

const StyledContainer = styled.div`
    align-self: center;
    justify-self: center;
    width: 70%;
    height: max-content;
    background-color: #0f1026;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: 'Medium';
    font-size: 3rem;
    text-align: center;
    color: white;
    border-radius: 25px;
    .title {
        grid-column: 1/3;
    }

    .revealImage {
        margin-top: 80px;
        width: 80%;
        border: 1px solid black;
        border-radius: 25px;
        justify-self: center;
        margin-bottom: 50px;
    }

    .description {
        margin-left: 60px;
        grid-column: 1/1;
        margin-top: 30px;
        font-size: 3rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .second {
            font-size: 2rem;
            color: gray;
        }
    }
    .inputs {
        margin-top: 30px;
        grid-column: 2/3;
        justify-self: end;
        display: flex;

        .bg {
            background-color: #303480;
        }
        h2 {
            font-size: 2rem;
            padding: 2px 10px 0px 10px;
        }

        input {
            padding: 0 0 2px 5px;
            width: 150px;
            margin-left: 0px;
            border: none;
            font-size: 2rem;
            
        }

        /* input:nth-child(2) {
            margin-right: 30px;
        } */
    }

    .traits {
        margin-top: 80px;
        display: grid;
        grid-template-columns: max-content 1fr;
        font-size: 2rem;
        row-gap: 10px;
        label {
            background-color: #303480;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            height: max-content;
            padding: 1.2rem;
        }
        span {
            background-color: #060712;
            height: max-content;
            padding: 1.2rem;

        }
    }
`;
const StyledBackdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: grid;
    z-index: 9999;
`;


export default RarityTool;