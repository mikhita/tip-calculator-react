import React, {useState } from 'react'
import "./Component.css"
import styled from 'styled-components'
import SelectInputs from './SelectInputs.js'
import TipAmount from './TipAmount.js'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import schema from '../schema.js';
import Inputs from './Inputs.js'
function MainDiv() {
    const {register,  formState: { errors } } = useForm({
        criteriaMode: "all",
        mode: "onChange",
        resolver: yupResolver(schema)
      });
      
      const [isChoosen, setIsChoosen] = useState();
      const [isBill, setIsBill] = useState();
      const [numPeople, setNumPeople] = useState();
      const handleChange = (e)=>setNumPeople(e.target.value);
      const handleChange1 = (e)=>setIsChoosen(e.target.value);
      const handleChange2 = (e)=>setIsBill(e.target.value);
      


    let tipReset = parseInt((isBill*isChoosen/100)/numPeople)
    tipReset = tipReset || 0;
    let totalReset = parseInt((parseInt(isBill)+isBill*isChoosen/100)/numPeople)
    totalReset = totalReset || 0;
    console.log(tipReset)
      const array = [5,10,15,25,50];
  return (
    <MainDivs>
        <WhiteSide>
        <form>
            <Inputs type="number" id="billInput"  register={register} value={isBill} onChange={handleChange2} 
            label="billInput"
            placeholder="0" text="Bill" error={errors.billInput && errors.billInput.message }/>
            <SecondP>Select Tip %</SecondP>
            <PercentDiv>
                <SelectInputs isChoosen={isChoosen} setIsChoosen={setIsChoosen} array={array}/>
                <Inputs value={isChoosen} noMargin  onChange={handleChange1} type="number" id="percent" 
                register={register} 
                label="percent" error={errors.percent && errors.percent.message }/>
            </PercentDiv>
            <Inputs classname="numogp" value={numPeople}  onChange={handleChange} type="number" id="numOfPeople" 
            register={register} label="numOfPeople"
            placeholder="0" text="Number Of People" error={errors.numOfPeople && errors.numOfPeople.message } />
        </form>
        </WhiteSide>
        <GreenSide>
           <TipAmount  tip={tipReset} total={totalReset}/>   
           <ResetB onClick={() => window.location.reload(false)}>
            Reset
           </ResetB>
        </GreenSide>
    </MainDivs>
  )
}



export default MainDiv


const PercentDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    @media (min-width: 950px) {
      grid-template-columns: repeat(3, 1fr);
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
width: 90%;
@media (min-width: 950px) {
    max-width: 40%;

}
    
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
    width: 90%;
    @media (min-width: 950px) {
    height: 360px;
    justify-content: space-around;
    width: 40%;
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

