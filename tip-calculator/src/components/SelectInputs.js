import React from 'react'
import styled from 'styled-components'

function SelectInputs() {
  return (
    <InputsDiv>
        <button type='button'>5% </button>
        <button type='button'> 10%</button>
        <button type='button'> 15%</button>
        <button type='button'> 25%</button>
        <button type='button'> 50%</button>
        <Input type="number" placeholder='Custom'>
        </Input >
    </InputsDiv>
  )
}

export default SelectInputs

const InputsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 327px;
    @media (min-width: 950px) {
      grid-template-columns: repeat(3, 1fr);
      max-width: -webkit-fill-available;
  }
    button{
        /* width: 140px; */
        height: 48px;
        background: #00474B;
        border-radius: 5px;
        color: white;
        padding: 6px 17px 6px 19px;
        font-family: Space Mono;
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0px;
        text-align: center;
        outline:none;
        -webkit-appearance: none;
        :hover {
          cursor: pointer;
          background-color: #9FE8DF;
          color:black;
          border: none;
        }
    }
    
`;

const Input = styled.input`
        width: 146.63px;
        height: 48px;
        background: #F3F9FA !important;
        border-radius: 5px;
        border: none;
        outline-color:#26C2AE !important;
        color: black !important;
        /* padding: 6px 17px 6px 19px; */
        font-family: Space Mono;
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0px;
        text-align: center;
        &:hover{
          cursor: pointer;
          border: 1px solid #26C2AE;
        }
`;