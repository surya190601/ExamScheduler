import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Button from '../Components/Button'
import ScheduleTable from '../Components/ScheduleTable'
const DetailedDisplay = () => {
    const location = useLocation()
    const { item, index } = location.state
    const data = JSON.parse(item)
    console.log(data.subjectDetails)
    return (
        <StyledMainContainer>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '20px',
                }}
            >
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <StyledArrow
                        src="https://i.ibb.co/RBRPtj0/Vector-Arrow.png"
                        alt="Arrow-Back"
                    />
                </Link>
                <StyledTitle>
                    {data.examType} Exam - {data.branch} {data.department} SEM
                    {data.semester}
                </StyledTitle>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '20px',
                }}
            >
                <StyledSchedulesButton label="Schedules" />
                <StyledAllocationButton label="Allocation" />
            </div>
            <StyledWrapper>
                <div style={{marginBottom: '20px'}}>
                <ScheduleTable data = {data.subjectDetails} label = {`${data.examType} Schedule`}/>
                </div>
                <ScheduleTable data = {data.labDetails} label = {"Lab Schedule"}/>
            </StyledWrapper>
        </StyledMainContainer>
    )
}

export default DetailedDisplay

const StyledMainContainer = styled.div`
    position: relative;
    padding: 35px 122px 104px;
    z-index: 1;
`
const StyledArrow = styled.img`
    height: 24px;
    width: 24px;
    margin-top: 4px;
`
const StyledTitle = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
    margin-left: 19px;
`
const StyledSchedulesButton = styled(Button)`
    background: #5375e2;
    padding: 6px 32.5px;
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.03em;
    color: #ffffff;
`
const StyledAllocationButton = styled(Button)`
    border: 1px solid #5375e2;
    padding: 6px 32.5px;
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.03em;
    color: #5375e2;
`
const StyledWrapper = styled.div`
    border: 1px solid #d6d5d7;
    padding: 30px 62px 78px;
`
