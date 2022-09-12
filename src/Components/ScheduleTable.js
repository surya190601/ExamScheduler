import React from 'react'
import styled from 'styled-components'

const ScheduleTable = (props) => {
    const { data, label } = props
    return (
        <>
            <StyledLabel>{label}</StyledLabel>
            <StyledTableWrapper>
                <StyledTable>
                    <StyledTableRow>
                        <StyledTableHeading>S.No</StyledTableHeading>
                        <StyledTableHeading>Date</StyledTableHeading>
                        <StyledTableHeading>Session</StyledTableHeading>
                        <StyledTableHeading>Course Code</StyledTableHeading>
                        <StyledTableHeading>Subject Name</StyledTableHeading>
                    </StyledTableRow>
                    {data.map((item, index) => {
                        return (
                            <StyledTableRow>
                                <StyledTableData>{index + 1}</StyledTableData>
                                <StyledTableData>{item.date}</StyledTableData>
                                <StyledTableData>
                                    {item.isNoon ? 'AN' : 'FN'}
                                </StyledTableData>
                                <StyledTableData>{item.code}</StyledTableData>
                                <StyledTableData>{item.name}</StyledTableData>
                            </StyledTableRow>
                        )
                    })}
                </StyledTable>
            </StyledTableWrapper>
        </>
    )
}

export default ScheduleTable

const StyledLabel = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;

    color: #000000;
    margin-bottom: 20px;
`

const StyledTableWrapper = styled.div`
    width: 100%;
`
const StyledTable = styled.table`
    border: 1px solid #000000;
    width: 100%;
    height: 200px;
    border-collapse: collapse;
`
const StyledTableHeading = styled.th`
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #5375e2;
    padding: 29px 0px;
`
const StyledTableData = styled.td`
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
    padding: 27px 0px;
`
const StyledTableRow = styled.tr`
    border-bottom: 1px solid black;
    td:last-child {
        width: 250px;
      }
      padding-right:35px;
`

