import React from 'react'


function BillInput() {
  return (
    <div className='billInpuDiv'>
        <p className='bill' style={{margin:"0" , color:" #5E7A7D"}}>Bill</p>
        <input  type="number"   id="inputBill"  placeholder='0'/>
    </div>
  )
}

export default BillInput