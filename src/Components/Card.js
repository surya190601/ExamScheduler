import React from 'react'
import styled from 'styled-components'
import TextComponent from './TextComponent'
import EditIcon from '../Assets/svg/EditIcon'
import DeleteIcon from '../Assets/svg/DeleteIcon'
import CardLabelText from './CardLabelText'
import Button from './Button'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const {
        cardDetails,
        setCardDetails,
        allotedCheckButton,
        setAllotedCheckButton,
        selectedOption,
    } = props
    let clonedArray = [...cardDetails]
    const getIndex = (item) =>{
      return cardDetails.findIndex(x => x ===item);
    }
    const onDelete = (item) => {
        const tempCardDetails = [...cardDetails]
        tempCardDetails.splice(getIndex(item), 1)
        setCardDetails(tempCardDetails)
        clonedArray = [...tempCardDetails]
    }
    const filteringOnlyTheAllotedCard = (allotedCheckButton) => {
        if (allotedCheckButton) {
            let tempArray = clonedArray.filter(
                (item) => item.isAlloted === true
            )
            clonedArray = [...tempArray]
        }
    }
    const filteringDataUsingExamType = (selectedOption) => {
        if (selectedOption === 'Semester Exam') {
            let tempArray = clonedArray.filter(
                (item) => item.examType === 'Semester'
            )
            clonedArray = [...tempArray]
        } else if (selectedOption === 'Model Exam') {
            let tempArray = clonedArray.filter(
                (item) => item.examType === 'Model'
            )
            clonedArray = [...tempArray]
        } else if (selectedOption === 'Internal Exam') {
            let tempArray = clonedArray.filter(
                (item) => item.examType === 'Internal'
            )
            clonedArray = [...tempArray]
        }
    }
    const onUpdateArray = (selectedOption, allotedCheckButton) => {
        if (selectedOption) filteringDataUsingExamType(selectedOption)
        else filteringOnlyTheAllotedCard(allotedCheckButton)
    }
    // console.log({data: JSON.stringify(clonedArray[0])});
    return (
        <>
            {onUpdateArray(selectedOption, allotedCheckButton)}
            {clonedArray.map((item, index) => (
                <StyledCardWrapper isAlloted={item.isAlloted}>
                    <StyledContainer>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <div>
                                <StyledHeading
                                    label={`${item.branch} ${item.department} SEM${item.semester}`}
                                />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <Link to="/EditSchedulePage" state={{item: JSON.stringify(item),index:getIndex(item)}}>
                                    <EditIcon />
                                </Link>
                                <DeleteIcon
                                    marginLeft="20px"
                                    onClick={() => {
                                        onDelete(item)
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <StyledText
                                label={`Created on ${item.createdTime}`}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: '12px',
                            }}
                        >
                            <div style={{ width: '30%' }}>
                                <CardLabelText
                                    label="Branch"
                                    text={`${item.branch}`}
                                />
                            </div>
                            <div style={{ width: '30%' }}>
                                <CardLabelText
                                    label="Department"
                                    text={`${item.department}`}
                                />
                            </div>
                            <div style={{ width: '30%' }}>
                                <CardLabelText
                                    label="Semester"
                                    text={`${item.semester}`}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: '17px',
                                marginBottom: '9px',
                            }}
                        >
                            <div style={{ width: '30%' }}>
                                <CardLabelText
                                    label="Subject"
                                    text={`${item.subjectsCount}`}
                                />
                            </div>
                            <div style={{ width: '30%' }}>
                                <CardLabelText
                                    label="Lab"
                                    text={`${item.labsCount}`}
                                />
                            </div>
                            <div style={{ width: '30%' }}>
                                <CardLabelText
                                    label="ExamType"
                                    text={`${item.examType}`}
                                />
                            </div>
                        </div>
                    </StyledContainer>
                    <StyledAllocatedContainer isAlloted={item.isAlloted}>
                        <StyledNotAllocatedText
                            label={
                                item.isAlloted ? 'Allocated' : 'Not Allocated'
                            }
                        />
                        {item.isAlloted ? (
                            <div style={{ padding: '9px 0px' }}>
                                <svg
                                    width="14"
                                    height="11"
                                    viewBox="0 0 14 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 10.5L0 5.54L1.59 4L5 7.35L12.41 0L14 1.58L5 10.5Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        ) : (
                            <StyledAllocateButton label="Allocate" />
                        )}
                    </StyledAllocatedContainer>
                </StyledCardWrapper>
            ))}
        </>
    )
}
export default Card

const StyledCardWrapper = styled.div`
    background: #ffffff;
    border: 1px solid ${(props) => (props.isAlloted ? '#5375E2' : '#FFA500')};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-bottom: 51px;
    width: 391px;
    height: 251px;
`
const StyledContainer = styled.div`
    padding: 20px 11px 0px 33px;
`
const StyledHeading = styled(TextComponent)`
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
`
const StyledText = styled(TextComponent)`
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #aba9ae;
`
const StyledAllocatedContainer = styled.div`
    padding: ${(props) =>
        props.isAlloted ? '13px 35px 15px 40px' : '11px 20px 10px 34px'};
    background: ${(props) => (props.isAlloted ? '#5375E2' : '#FFA500')};
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const StyledNotAllocatedText = styled(TextComponent)`
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #ffffff;
    margin-top:2px
    margin-bottom:7px;
`
const StyledAllocateButton = styled(Button)`
    background: #ffffff;
    border: 1px solid #5375e2;
    border-radius: 5px;
    padding: 9.5px 7px 9.5px 19px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #5375e2;
`
