import React from 'react'
import styled from 'styled-components';



function Inputs(props) {
    
  return (

    <div className='billInpuDiv'>
            <DivBillError>
        <label className='bill' htmlFor={props.id} style={{margin:"0" , color:" #5E7A7D", }}>{props.text}</label>
        <Ptag>{props.error}</Ptag>
            </DivBillError>
            <InputBill   type={props.type}
                error={Boolean(props.errors)}
                placeholder={props.placeholder}
                id={props.id}
                {...props.register(props.label, {
                    valueAsNumber: true,
                    onChange: props.onChange,
                })} 
            style={{outlineColor:props.errors?"#E17052":"", }}
            defaultValue={props.defaultValue || ""}
            /> 
            
    </div>
  )
}

export default Inputs

const InputBill = styled.input`
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
const DivBillError = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-top: 38px;
`;

