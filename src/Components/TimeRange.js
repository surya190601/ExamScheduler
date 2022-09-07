import React from 'react'
import styled from 'styled-components'
import CustomDropDown from './CustomDropDown'
import InputComponent from './InputComponent'
import TextComponent from './TextComponent'
const TimeRange = (props) => {
    const {
        AMPMOption,
        selectedAmPmDropDown,
        setSelectedAmPmDropDown,
        label,
        setHour,
        setMinute,
        setHour1,
        setMinute1,
    } = props
    const handleChangeHour = (event) => {
        setHour(event.target.value);
    }
    const handleChangeMinute = (event) => {
        setMinute(event.target.value);
    }
    const handleChangeHour1 = (event) => {
        setHour1(event.target.value);
    }
    const handleChangeMinute1 = (event) => {
        setMinute1(event.target.value);
    }
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '30px',
                }}
            >
                <StyledInputText2 label={label} />
                <StyledInput2
                    type="number"
                    onChange={(event) => {
                        handleChangeHour(event)
                    }}
                    max = "12"
                />
                <StyledInput2
                    type="number"
                    onChange={(event) => {
                        handleChangeMinute(event)
                    }}
                    max = "59"
                />
                <div style={{ marginRight: '30px', width: '7%' }}>
                    <CustomDropDown
                        options={AMPMOption}
                        selectedOption={selectedAmPmDropDown}
                        setSelectedOption={setSelectedAmPmDropDown}
                    />
                </div>
                <StyledInputText2_1 label="to" />
                <StyledInput2
                    type="number"
                    onChange={(event) => {
                        handleChangeHour1(event)
                    }}
                    max = "12"
                />
                <StyledInput2
                    type="number"
                    onChange={(event) => {
                        handleChangeMinute1(event)
                    }}
                    max = "59"
                />
                <div style={{ marginRight: '30px', width: '7%' }}>
                    <CustomDropDown
                        options={AMPMOption}
                        selectedOption={selectedAmPmDropDown}
                        setSelectedOption={setSelectedAmPmDropDown}
                    />
                </div>
                <StyledInputText2_2 label="3 hours" />
                <StyledCheckBox type="checkbox" value="AN" />
                <StyledInputText2_2 label={'Set all for ' + label} />
            </div>
        </>
    )
}

export default TimeRange

const StyledInputText2 = styled(TextComponent)`
    margin-top: 21px;
    margin-right: 37px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
`
const StyledInput2 = styled(InputComponent)`
    background: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    padding: 17px 0px 17px 16px;
    margin-right: 30px;
    width: 5%;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
`
const StyledInputText2_1 = styled(TextComponent)`
    margin-top: 21px;
    margin-right: 37px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
`
const StyledInputText2_2 = styled(TextComponent)`
    margin-top: 21px;
    margin-right: 56px;
    color: #767676;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
`
const StyledCheckBox = styled(InputComponent)`
    margin-top: 10px;
    margin-right: 13px;
    color: #767676;
`
