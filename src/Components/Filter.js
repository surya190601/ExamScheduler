import React from 'react'
import styled from 'styled-components'
import FilterIcon from '../Assets/svg/FilterIcon'
import InputComponent from '../Components/InputComponent'
import TextComponent from '../Components/TextComponent'
import { useState } from 'react'
const Filter = (props) => {
    const {setAllotedCheckButton,setSelectedOption} = props
    
    const handleChangeCheckButton = (event) => {
        setAllotedCheckButton(event.target.checked)
    }
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
            }}
        >
            <StyledText label="Show Allocated" />
            <StyledCheckBox type="checkbox" onChange = {(event) =>{handleChangeCheckButton(event)}}/>
            <StyledText label = "Filter"/>
            <FilterIcon setSelectedOption={setSelectedOption}/>
        </div>
    )
}

export default Filter

const StyledText = styled(TextComponent)`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
`
const StyledCheckBox = styled(InputComponent)`
    margin-left: 15px;
    margin-right: 15px;
    background: #5375E2;
`
