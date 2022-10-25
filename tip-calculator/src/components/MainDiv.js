import React from 'react'
import "./Component.css"
import styled from 'styled-components'
import SelectInputs from './SelectInputs.js'
import TipAmount from './TipAmount.js'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import schema from '../schema.js';
import Inputs from './Inputs.js'
function MainDiv() {
    const {register, handleSubmit,  formState: { errors, dirtyFields, isDirty } } = useForm({
        criteriaMode: "all",
        mode: "onChange",
        resolver: yupResolver(schema)
      });
      const onSubmit = data => console.log(data);
  return (
    <MainDivs>
        <WhiteSide>
        <form>
            <Inputs type="number" id="billInput" register={register} label="billInput"
            placeholder="0" text="Bill" error={errors.billInput && errors.billInput.message }/>
            <SecondP>Select Tip %</SecondP>
            <PercentDiv>
            <SelectInputs/>
            <Inputs  type="number" id="percent" register={register} label="percent"/>
            </PercentDiv>
            <Inputs classname="numogp" type="number" id="billInput" register={register} label="numOfPeople"
            placeholder="0" text="Number Of People" error={errors.numOfPeople && errors.numOfPeople.message } />
        </form>
        </WhiteSide>
        <GreenSide>
           <TipAmount />   
           <ResetB>
            Reset
           </ResetB>
        </GreenSide>
    </MainDivs>
  )
}



export default MainDiv


const PercentDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    max-width: 327px;
   
    @media (min-width: 950px) {
      grid-template-columns: repeat(1, 1fr);
      max-width: -webkit-fill-available;
  }
`;


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
        text-transform: uppercase;
        &:hover {
            cursor: pointer;
            background: #9FE8DF;;
        }
        @media (min-width: 950px) {
            margin-top: 100px;
        }
`;

