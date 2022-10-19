import React from 'react'
import styled from 'styled-components'
import img from "./assets/icon-person.svg"

function NumberOfPeople() {
  return (
    <NumOfPeopleDiv>
        <p>Number of People</p>
        <Input  type="number" placeholder='0'></Input>
    </NumOfPeopleDiv>
  )
}

export default NumberOfPeople

const NumOfPeopleDiv = styled.div`
    margin-top: 38px;
    p{
        font-family: Space Mono;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
        margin: 0;
        color: #5E7A7D;
    }
`;
const Input = styled.input`
        background: #F3F9FA;
        background-image: url(${img});
        background-repeat: no-repeat;
        background-position-x:17px;
        background-position-y:17px;
        padding-left: 30px;
        padding-right: 12px;
        text-align: end;
        height: 48px;
        width: -webkit-fill-available;
        border-radius: 5px;
        font-family: Space Mono;
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0px;
        border: none;
        outline-color:#26C2AE;
       
`