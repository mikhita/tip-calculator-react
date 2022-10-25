import React, {useState}  from 'react'
import styled from 'styled-components'



function SelectInputs() {
  const [isChoosen, setIsChoosen] = useState();
  
  const handleClick = (value) => { 
    setIsChoosen(value);
  };
  
  const array = [5,10,15,25,50];
  return (
    <InputsDiv>
    {array.map((item)=>{
      return <button key={item} type='button'  style={{
        backgroundColor: isChoosen===item ? '#9FE8DF' : '',
        color: isChoosen===item ? 'black' : '',
      }} onClick={()=>handleClick(item)}>{item}% </button>
    })}  
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
        border: none;
        :hover {
          cursor: pointer;
          background-color: #9FE8DF;
          color:black;
          border: none;
        }
    }
    
`;


