import React from 'react'
import BillInput from './BillInput.js'
import "./Component.css"

function MainDiv() {
  return (
    <div className='MainDiv'>
        <div className="whiteSide">
            <BillInput/>
        </div>
        <div className="greenSide">

        </div>
    </div>
  )
}

export default MainDiv