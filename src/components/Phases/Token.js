import React from "react";

import styled from "styled-components";

import shoulder from "../../images/shlem999.png";
import tokenImg from '../../images/Coin.gif';

const StyledContainer = styled.div`
  position: absolute;
  top: ${(props) => (props.page === 6 ? "0" : "-110vh")};
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  display: grid;
  grid-template-columns: 20% 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  row-gap: 1vw;
  transition: top 0.5s ease-in-out;

  .shoulder {
    position: absolute;
    transform: translateX(-30%) translateY(43vh);
    width: 27%;
  }

  .title {
    font-size: 5vw;
    font-family: "Magh";
    font-weight: 700;
    color: #4b95a6;
    grid-column: 2/2;
    align-self: end;
    letter-spacing: 1px;
  }
  .text {
      grid-column: 2/2;
      color: black;
      font-family: 'Medium';
      font-size: 1.3vw;
      white-space: pre-line;
      width: 80%;
    letter-spacing: 1px;
  }

  .previewImg {
    grid-column: 3/3;
    grid-row: 2/2;
    width: 80%;
    margin-top: -25%;
  }

`;

const Token = ({ currentPage }) => {
  return (
    <StyledContainer page={currentPage}>
      <img src={shoulder} alt="" className="shoulder" />
      <span className="title">$HROM</span>
      <span className="text">
        $HROM will be the token of our DAO- the 'Agora' Dao and the in-game currency of our play-to-earn game. <br /><br />
        Storing the token will be available in every Solana wallet, for example
        Phantom. Swapping will mostly be available on Raydium and Saber.<br /> $HROM
        will be equally distributed among all of the tribes in the strategic
        game. <br /> <br />The rarity of the “Heroes of Olympus” NFT will determine the
        amount of $HROM received. The coin will play a major role in the game’s
        mechanics.
      </span>
      <img src={tokenImg} alt='' className='previewImg' />
    </StyledContainer>
  );
};

export default Token;
