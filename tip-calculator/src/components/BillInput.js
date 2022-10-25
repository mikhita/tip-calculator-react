import React from 'react'
import { useForm } from "react-hook-form"
import styled from 'styled-components';

function BillInput(props) {
    const {register, handleSubmit,  formState: { errors } } = useForm({
        criteriaMode: "all"
      });
      const onSubmit = data => console.log(data);
  return (

    <div className='billInpuDiv'>
        
        <form onChange={handleSubmit(onSubmit)}>
            <DivBillError>
        <label className='bill' htmlFor='inputBill' style={{margin:"0" , color:" #5E7A7D"}}>Bill</label>
        {errors.billInput && <Ptag role="alert"> {errors.billInput.message}</Ptag>}
            </DivBillError>
            <InputBill  type="number"   id="inputBill"  placeholder='0' value={props.valueBill} 
            style={{outlineColor:errors.billInput?"#E17052":"", }}
            {...register("billInput", {
                 min:{
                    value:1,
                    message:"can't be less than one"
                 },
                 max:{
                    value:100000,
                    message:"can't be more than 100000"
                 }
                })}></InputBill>
                
                
        </form>
    </div>
  )
}

export default BillInput

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
`;