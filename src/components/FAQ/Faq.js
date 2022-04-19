import React, { useState } from 'react';

import styled from 'styled-components';

const StyledContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: left 0.5s ease-in-out;
    display: grid;
    grid-template-rows: 20% 10% max-content;
    .title {
        font-family: 'Magh';
        font-size: 2.5vw;
        color: #0f1026;
        align-self: end;
        height: max-content;
        letter-spacing: 2px;
        justify-self: center;
    }

    .subtext {
        font-family: 'Medium';
        font-size: 1vw;
        color: #0f1026;
        justify-self: center;
        align-self: center;
        letter-spacing: 1.2px;
    }
`;

const StyledAccordion = styled.div`
    display: grid;
    grid-template-rows: repeat(autofill, max-content);
    row-gap: 60px;
    margin-top: 20px;
    div {
        justify-self: center;
        width: 65%;
        display: grid;
        grid-template-rows: repeat(autofill, 1fr);
    }
    div > span {
        font-size: 1.2vw;
        text-align: left;
        display: block;
        font-family: 'Medium';
        color: black;
        justify-self: center;
        transition: all 0.5s;
        height: 30px;
    }

    // div span:nth-child(2n) {
    //     margin-bottom: 100px;
    //     color: black;
    //     // background: white;
    //     transition: all 0.5s ease-in-out;
    //     padding: 10px 20px;
    //     width: 80%;
    //     font-size: 0.9vw;
    //     // margin-bottom: 50px;
    // }

    // div span:nth-child(2n) > span {
    //     color: red;
    // }

    div span {
        color: black;
        width: 80%;
        border-bottom: 1px solid lightgray;
        transition: all 0.5s;
    }

    div span > span {
        border: none;
        opacity: 0;
        transition: all 0.5s;
        display: none;
    }

    div span span.active {
        opacity: 1;
        transition: all 1s;
        display: block;
        margin-top: 10px;
        font-size: 1.2vw;
        font-weight: 0;
        transition: all 0.5s;
    }

    div span.active {
        opacity: 1;
        height: 100%;
    }


    div span.inactive {
        opacity: 0.15;
    }

`;

const Faq = ({ currentPage }) => {

    const [question, setQuestion] = useState(0);
  return (
    <StyledContainer page={currentPage}>
        <span className='title'>Frequently Asked Questions</span>
        <span className='subtext'>Have questions? We're here to help.</span>
        <StyledAccordion>
            <div>
                <span className={question === 1 ? 'accordionOption1 active' : question === 0 ? 'accordionOption1' : 'accordionOption1 inactive'} onClick={() => {
                    if (question === 1) {
                        setQuestion(0);
                        } else {
                            setQuestion(1);
                        }}}>
                    Q: What blockchain will you launch on?
                    <span className={question === 1 ? 'accordionAnswer1 active' : 'accordionAnswer1'} question={question}>
                    A: "Heroes of Olympus" will launch on the Solana blockchain, because of its low fees and quick transactions. das dsad asd sadas das dsad asd asdas das das das dsadasdas
                </span>
                </span>
            </div>
            <div>
                <span className={question === 2 ? 'accordionOption2 active' : question === 0 ? 'accordionOption2' : 'accordionOption2 inactive'} onClick={() => {
                    if (question === 2) {
                        setQuestion(0);
                        } else {
                            setQuestion(2);
                        }}}>
                    Q: How many Heroes will be available?
                    <span className={question === 2 ? 'accordionAnswer2 active' : 'accordionAnswer2'}>
                    A: Some text answer das dsa dasd sadasdas dsa dsad sad asd asd as dasd as.
                </span>
                </span>
            </div>
            <div>
                <span className={question === 3 ? 'accordionOption3 active' : question === 0 ? 'accordionOption3' : 'accordionOption3 inactive'} onClick={() => {
                    if (question === 3) {
                        setQuestion(0);
                        } else {
                            setQuestion(3);
                        }}}>
                    Q: How can I get whitelisted? How many spots there will be?
                    <span className={question === 3 ? 'accordionAnswer3 active' : 'accordionAnswer3'}>
                    A: Some text answer.
                </span>
                </span>
            </div>
            <div>
                <span className={question === 4 ? 'accordionOption4 active' : question === 0 ? 'accordionOption4' : 'accordionOption4 inactive'} onClick={() => {
                    if (question === 4) {
                        setQuestion(0);
                        } else {
                            setQuestion(4);
                        }}}>
                    Q: What is the mint price?
                    <span className={question === 4 ? 'accordionAnswer4 active' : 'accordionAnswer4'}>
                    A: Some text answer.
                </span>
                </span>
            </div>
            <div>
                <span className={question === 5 ? 'accordionOption5 active' : question === 0 ? 'accordionOption5' : 'accordionOption5 inactive'} onClick={() => {
                    if (question === 5) {
                        setQuestion(0);
                        } else {
                            setQuestion(5);
                        }}}>
                    Q: What will happen with the royalties?
                    <span className={question === 5 ? 'accordionAnswer1 active' : 'accordionAnswer1'}>
                    A: Some text answer.
                </span>
                </span>
            </div>
            <div>
                <span className={question === 6 ? 'accordionOption6 active' : question === 0 ? 'accordionOption6' : 'accordionOption6 inactive'} onClick={() => {
                    if (question === 6) {
                        setQuestion(0);
                        } else {
                            setQuestion(6);
                        }}}>
                    Q: Which marketplaces will our NFTs be available on?
                    <span className={question === 6 ? 'accordionAnswer6 active' : 'accordionAnswer6'}>
                    A: Some text answer.
                </span>
                </span>
            </div>
        </StyledAccordion>
    </StyledContainer>
  )
}

export default Faq;