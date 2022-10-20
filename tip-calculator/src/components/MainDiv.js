import React from 'react'
import BillInput from './BillInput.js'
import "./Component.css"
import styled from 'styled-components'
import SelectInputs from './SelectInputs.js'
import NumberOfPeople from './NumberOfPeople.js'
import TipAmount from './TipAmount.js'

function MainDiv() {
  return (
    <MainDivs>
        <WhiteSide>
            <BillInput/>
            <SecondP>Select Tip %</SecondP>
            <SelectInputs/>
            <NumberOfPeople/>
        </WhiteSide>
        <GreenSide>
           <TipAmount/>   
           <ResetB>
            Reset
           </ResetB>
        </GreenSide>
    </MainDivs>
  )
}



export default MainDiv



const MainDivs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    background: #FFFFFF;
    box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
    border-radius: 25px 25px 0px 0px;
    width: -webkit-fill-available;
    padding: 62px 32px 32px 32px;
    max-width: 920px;
    @media (min-width: 950px) {
    flex-direction: row;
    justify-content: space-around;
    border-radius: 25px;
    margin: 0%;
    

  }
`;
const WhiteSide = styled.div`
    
`;
const SecondP = styled.p`
    font-family: Space Mono;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: #5E7A7D;
    margin-top:32px;
    
`
const GreenSide = styled.div`
   background: #00474B;
    border-radius: 15px; 
    padding: 19px 24px 24px 24px;
    margin-top: 32px;
    max-width: -webkit-fill-available;
    @media (min-width: 950px) {
    height: 360px;
    justify-content: space-around;
}

`;

const ResetB = styled.button`
        margin-top: 32px;
        width: -webkit-fill-available;
        background: #0D686D;
        border-radius: 5px;
        height: 48px;
        border: none;
        font-family: Space Mono;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: center;
        &:hover {
            cursor: pointer;
            background: #9FE8DF;;
        }
        @media (min-width: 950px) {
            margin-top: 100px;
        }
`;

