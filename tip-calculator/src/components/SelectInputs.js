import React  from 'react'
import styled from 'styled-components'



function SelectInputs(props) {
  const handleClick = (value) => { 
    props.setIsChoosen(value);
  };
  return (
    <>
    {props.array.map((item)=>{
      return <InputButton key={item} type='button'  style={{
        backgroundColor: props.isChoosen===item ? '#9FE8DF' : '',
        color: props.isChoosen===item ? 'black' : '',
      }} onClick={()=>handleClick(item)}>{item}% </InputButton>
    })}  
    </>
  )
}

export default SelectInputs

const InputButton = styled.button`
  
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
        border: none;
        :hover {
          cursor: pointer;
          background-color: #9FE8DF;
          color:black;
          border: none;
        }
    
    
`;


