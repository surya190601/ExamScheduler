import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
const FilterIcon = (props) => {
    const {setSelectedOption} = props
    const [isOptionsVisible, setIsOptionsVisible] = useState(false)
    const options = ['Semester Exam', 'Model Exam', 'Internal Exam']
    const handleSelected = (option) => {
        setSelectedOption(option);
        setIsOptionsVisible(false);
    };
    return (
        <>
            <StyledDropDown>
                <StyledDropDownComponent>
                    <StyledSelectedOptionWrapper
                        onClick={() => setIsOptionsVisible(!isOptionsVisible)}
                    >
                        <svg
                            width="18"
                            height="11"
                            viewBox="0 0 18 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 9.75C6 9.55109 6.07902 9.36032 6.21967 9.21967C6.36032 9.07902 6.55109 9 6.75 9H11.25C11.4489 9 11.6397 9.07902 11.7803 9.21967C11.921 9.36032 12 9.55109 12 9.75C12 9.94891 11.921 10.1397 11.7803 10.2803C11.6397 10.421 11.4489 10.5 11.25 10.5H6.75C6.55109 10.5 6.36032 10.421 6.21967 10.2803C6.07902 10.1397 6 9.94891 6 9.75ZM3 5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H14.25C14.4489 4.5 14.6397 4.57902 14.7803 4.71967C14.921 4.86032 15 5.05109 15 5.25C15 5.44891 14.921 5.63968 14.7803 5.78033C14.6397 5.92098 14.4489 6 14.25 6H3.75C3.55109 6 3.36032 5.92098 3.21967 5.78033C3.07902 5.63968 3 5.44891 3 5.25ZM0 0.75C0 0.551088 0.0790178 0.360322 0.21967 0.21967C0.360322 0.0790178 0.551088 0 0.75 0H17.25C17.4489 0 17.6397 0.0790178 17.7803 0.21967C17.921 0.360322 18 0.551088 18 0.75C18 0.948912 17.921 1.13968 17.7803 1.28033C17.6397 1.42098 17.4489 1.5 17.25 1.5H0.75C0.551088 1.5 0.360322 1.42098 0.21967 1.28033C0.0790178 1.13968 0 0.948912 0 0.75Z"
                                fill="#5375E2"
                            />
                        </svg>
                    </StyledSelectedOptionWrapper>
                    {isOptionsVisible && (
                        <StyledDropDownOptions>
                            {options.length > 0 &&
                                options?.map((option) => (
                                    <StyledDropDownOption
                                        onClick={() => handleSelected(option)}
                                    >
                                        {option}
                                    </StyledDropDownOption>
                                ))}
                        </StyledDropDownOptions>
                    )}
                </StyledDropDownComponent>
            </StyledDropDown>
        </>
    )
}

export default FilterIcon

const StyledDropDown = styled.div`
    margin-left: 12px;
    position: relative;
    bottom: -6px;
`
const StyledDropDownComponent = styled.div`
    position: relative;
    cursor: pointer;
`

const StyledSelectedOptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

const StyledDropDownOptions = styled.div`
    position: absolute;
    bottom: -5px;
    right: -3px;
    transform: translateY(100%);
    background-color: #ffffff;
    border: 1px solid #e8e8ea;
    border-radius: 5px;
    max-height: 310px;
    overflow: scroll;
    color: #000000;
    z-index: 2;
    padding: 14px 0px;
    width: 392px;
`

const StyledDropDownOption = styled.div`
    padding: 5.5px 24px;
    &:hover {
        background-color: #5375e2;
    }
`
