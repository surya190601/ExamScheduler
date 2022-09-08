import React from 'react'
import styled from 'styled-components'

const CardLabelText = (props) => {
    const { label, text } = props
    return (
        <>
            <CardLabel>{label}</CardLabel>
            <CardText>{text}</CardText>
        </>
    )
}

export default CardLabelText

const CardLabel = styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
`
const CardText = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #aba9ae;
`
