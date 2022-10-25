import React from 'react'
import styled from 'styled-components'
import img from "./assets/icon-person.svg"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import schema from '../schema.js';


function NumberOfPeople() {
    const {register, handleSubmit,  formState: { errors } } = useForm({
        criteriaMode: "all",
        resolver: yupResolver(schema)
      });
      const onSubmit = data => console.log(data);
  return (
    <NumOfPeopleDiv>
        <form onChange={handleSubmit(onSubmit)}>
            <DivPep>
                <label htmlFor='numOfP'>Number of People</label>
                {errors.numOfPeople && <Ptag role="alert"> {errors.numOfPeople.message}</Ptag>}
            </DivPep>
            <Input id="numOfP"  type="number" placeholder='0'  style={{outlineColor:errors.numOfPeople?"#E17052":""}}
            {...register("numOfPeople")}></Input>
        </form>
    </NumOfPeopleDiv>
  )
}

export default NumberOfPeople

const NumOfPeopleDiv = styled.div`
    margin-top: 38px;
    label{
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
const Ptag = styled.p`
    color:#E17457;
    font-family: Space Mono;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: right;
    /* height: 0%; */
    margin: 0%;
    /* position: relative;
    bottom: 78px; */

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
        &:hover{
            cursor: pointer;
            border: 2px solid #26C2AE;
        }
        
        @media  (min-width: 950px) {
    
            padding-left: 35px;
    
        }
`;
const DivPep = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;