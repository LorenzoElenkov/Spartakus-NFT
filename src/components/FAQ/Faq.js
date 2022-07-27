import React, { useState } from 'react';

import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
    transition: left 0.5s ease-in-out;
    display: grid;
    grid-template-rows: 20% 10% max-content;
    overflow: hidden;
    margin-top: 20px;
    .title {
        font-family: 'Magh';
        font-size: 4.2vh;
        color: #0f1026;
        align-self: end;
        height: max-content;
        letter-spacing: 2px;
        justify-self: center;
    }

    .subtext {
        font-family: 'Medium';
        font-size: 1.8vh;
        color: #0f1026;
        justify-self: center;
        align-self: center;
        letter-spacing: 1.2px;
    }
    @media screen and (max-width: 320px) {
        position: relative;
        left: 0;
        display: grid;
        padding-bottom: 30px;
        grid-template-rows: 5% 10% max-content;
        padding-top: 70px;
        .title {
            font-size: 2.4rem;
            align-self: end;
        }
        .subtext {
            font-size: 1.2rem;
        }

    }
    @media screen and (min-width: 321px) and (max-width: 375px) {
        position: relative;
        left: 0;
        display: grid;
        padding-bottom: 30px;
        grid-template-rows: 5% 10% max-content;
        padding-top: 70px;
        margin-top: 20px;
        .title {
            font-size: 2.6rem;
            align-self: end;
        }

        .subtext {
            font-size: 1.2rem;
        }
    }
    @media screen and (min-width: 376px) and (max-width: 428px) {
        position: relative;
        left: 0;
        display: grid;
        grid-template-rows: 5% 10% max-content;
        padding-top: 70px;
        margin-top: 20px;
        .title {
            font-size: 2.8rem;
            align-self: end;
        }
        .subtext {
            font-size: 1.2rem;
        }
    }
`;

const StyledAccordion = styled.div`
    display: grid;
    grid-template-rows: repeat(autofill, 1fr);
    row-gap: 25px;
    margin-top: 20px;
    div {
        justify-self: center;
        width: 65%;
        display: grid;
        grid-template-rows: repeat(autofill, 1fr);
    }
    div > span {
        font-size: 2vh;
        text-align: left;
        display: block;
        font-family: 'Medium';
        color: black;
        justify-self: center;
        transition: all 0.5s;
        height: 3vh;
    }

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
        font-size: 2;
        font-weight: 0;
        transition: all 0.5s;
        width: 100%;
    }

    div span.active {
        opacity: 1;
        height: 100%;
    }


    div span.inactive {
        opacity: 0.15;
    }

    @media screen and (max-width: 320px) {
        display: grid;
        grid-template-rows: repeat(autofill, 1fr);
        row-gap: 25px;
        margin-top: 20px;
        div {
            justify-self: center;
            width: 100%;
            display: grid;
            grid-template-rows: repeat(autofill, 1fr);
        }
        div > span {
            font-size: 4vw;
            text-align: left;
            display: block;
            font-family: 'Medium';
            color: black;
            justify-self: center;
            transition: all 0.5s;
            height: 3vh;
        }

        div span {
            color: black;
            width: 90%;
            height: max-content;
            border-bottom: 1px solid lightgray;
            transition: all 0.5s;
        }

    }
    @media screen and (min-width: 321px) and (max-width: 375px) {
        display: grid;
        grid-template-rows: repeat(autofill, 1fr);
        row-gap: 25px;
        margin-top: 20px;
        div {
            justify-self: center;
            width: 100%;
            display: grid;
            grid-template-rows: repeat(autofill, 1fr);
        }
        div > span {
            font-size: 4vw;
            text-align: left;
            display: block;
            font-family: 'Medium';
            color: black;
            justify-self: center;
            transition: all 0.5s;
            height: 3vh;
        }

        div span {
            color: black;
            width: 90%;
            height: max-content;
            border-bottom: 1px solid lightgray;
            transition: all 0.5s;
        }
    }
    @media screen and (min-width: 376px) and (max-width: 428px) {
        display: grid;
        grid-template-rows: repeat(autofill, 1fr);
        row-gap: 25px;
        margin-top: 20px;
        div {
            justify-self: center;
            width: 100%;
            display: grid;
            grid-template-rows: repeat(autofill, 1fr);
        }
        div > span {
            font-size: 4vw;
            text-align: left;
            display: block;
            font-family: 'Medium';
            color: black;
            justify-self: center;
            transition: all 0.5s;
            height: 3vh;
        }

        div span {
            color: black;
            width: 90%;
            height: max-content;
            border-bottom: 1px solid lightgray;
            transition: all 0.5s;
        }
    }
`;

const Faq = ({forwardedRef, currentPage }) => {

    const [question, setQuestion] = useState(0);
  return (
    <StyledContainer page={currentPage} ref={forwardedRef}>
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
                    A: "Heroes of Olympus" will launch on the Solana blockchain, because of its low fees and quick transactions. It will follow 3-step reveal.
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
                    A: The whole collection will be made of 10,878 Heroes. <br /> There will be 14 tribes, each one will contain 777 Heroes, with one GOD to lead them.
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
                    Q: Will there be different class rarities?
                    <span className={question === 3 ? 'accordionAnswer3 active' : 'accordionAnswer3'}>
                    A: Yes. There will be 6 class rarities. <br /> Each tribe will contain: <br />
                    <ul>
                        <li>Warrior (366)</li>
                        <li>Hoplite (222)</li>
                        <li>Archer (111)</li>
                        <li>Mage (55)</li>
                        <li>Champion (22)</li>
                        <li>GOD (1)</li>
                    </ul>
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
                    Q: How can I get whitelisted? How many spots there will be?
                    <span className={question === 4 ? 'accordionAnswer4 active' : 'accordionAnswer4'}>
                    A: Whitelist spots will be given in both our Discord and Twitter for community contributors and giveaway winners. <br /> There will be 3,000 WL spots.
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
                    Q: What is the mint price?
                    <span className={question === 5 ? 'accordionAnswer1 active' : 'accordionAnswer1'}>
                    A: The mint price is still to be declared.
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
                    Q: When is the mint date?
                    <span className={question === 6 ? 'accordionAnswer6 active' : 'accordionAnswer6'}>
                    A: The mint will be at the mid of August '22 with no exact date, for now.
                </span>
                </span>
            </div>
            <div>
                <span className={question === 7 ? 'accordionOption6 active' : question === 0 ? 'accordionOption6' : 'accordionOption6 inactive'} onClick={() => {
                    if (question === 7) {
                        setQuestion(0);
                        } else {
                            setQuestion(7);
                        }}}>
                    Q: What will happen with the royalties?
                    <span className={question === 7 ? 'accordionAnswer6 active' : 'accordionAnswer6'}>
                    A: 30% of the royalties will be distributed amongst holders. The other 70% will be used to fill the $HROM liquidity pool, which will be our cryptocurrency.
                </span>
                </span>
            </div>
            <div>
                <span className={question === 8 ? 'accordionOption6 active' : question === 0 ? 'accordionOption6' : 'accordionOption6 inactive'} onClick={() => {
                    if (question === 8) {
                        setQuestion(0);
                        } else {
                            setQuestion(8);
                        }}}>
                    Q: What is DAO?
                    <span className={question === 8 ? 'accordionAnswer6 active' : 'accordionAnswer6'}>
                    A: DAO is a decentralized autonomous organization, where HO holders make decisions for its development.
                </span>
                </span>
            </div>
            <div>
                <span className={question === 9 ? 'accordionOption6 active' : question === 0 ? 'accordionOption6' : 'accordionOption6 inactive'} onClick={() => {
                    if (question === 9) {
                        setQuestion(0);
                        } else {
                            setQuestion(9);
                        }}}>
                    Q: On which marketplaces our NFTs will be available?
                    <span className={question === 9 ? 'accordionAnswer6 active' : 'accordionAnswer6'}>
                    A: You will be able to find us on Solanart, Magic Eden, SolSea, OpenSea.
                </span>
                </span>
            </div>
        </StyledAccordion>
    </StyledContainer>
  )
}

export default Faq;