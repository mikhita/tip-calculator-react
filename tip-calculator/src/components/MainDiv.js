import React from 'react'
import BillInput from './BillInput.js'
import "./Component.css"
import styled from 'styled-components'
import SelectInputs from './SelectInputs.js'
import NumberOfPeople from './NumberOfPeople.js'

function MainDiv() {
  return (
    <MainDivs>
        <WhiteSide>
            <BillInput/>
            <SecondP>Select Tip %</SecondP>
            <SelectInputs/>
            <NumberOfPeople/>
        </WhiteSide>
        <div className="greenSide">

        </div>
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