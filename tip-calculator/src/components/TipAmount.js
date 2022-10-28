import React from 'react'
import styled from 'styled-components'



function TipAmount(props) {
    
  return (
    <TipsTotal>
        <TipAmounts>
            <p>Tip Amount <span>/person</span></p>
            <div> ${props.tip.toFixed(2)} </div>
        </TipAmounts>
        <Total>
            <p>Total <span>/person</span></p>
            <div>${props.total.toFixed(2)}</div>
        </Total>
    </TipsTotal>
  )
}

export default TipAmount

const TipsTotal = styled.div` 
@media (min-width: 950px) {
    justify-content: space-around;
}`;
const TipAmounts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0%;
    p{
        font-family: Space Mono;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
        width: 40%;
        color: #FFFFFF;

    }
    span{
        font-family: Space Mono;
        font-size: 13px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0px;
        text-align: left;
        color: #7F9D9F;

    }
    div{
        font-family: Space Mono;
        font-size: 32px;
        font-weight: 700;
        line-height: 47px;
        letter-spacing: -0.6666666865348816px;
        text-align: right;
        color: #26C2AE;
        overflow: hidden;
        width: 60%;
    }
`;
const Total = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0%;
    @media (min-width: 950px) {
    margin-top: 30px;
    }
    p{
        font-family: Space Mono;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
        width: 40%;
        color: #FFFFFF;

    }
    span{
        font-family: Space Mono;
        font-size: 13px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0px;
        text-align: left;
        color: #7F9D9F;

    }
    div{
        font-family: Space Mono;
        font-size: 32px;
        font-weight: 700;
        line-height: 47px;
        letter-spacing: -0.6666666865348816px;
        text-align: right;
        color: #26C2AE;
        overflow: hidden;
        width: 60%;
    }
`;
