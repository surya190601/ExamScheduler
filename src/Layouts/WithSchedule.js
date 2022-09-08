import React from 'react'
import styled from 'styled-components'
import Card from '../Components/Card'
import CreateCard from '../Components/CreateCard'
import Filter from '../Components/Filter'
import InputComponent from '../Components/InputComponent'
import TextComponent from '../Components/TextComponent'
import { CreateScheduleData } from '../Common/data/CreateScheduleData'
import { useState } from 'react'
const WithSchedule = () => {
    const [cardDetails, setCardDetails] = useState(CreateScheduleData)
    const [allotedCheckButton, setAllotedCheckButton] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')
    return (
        <>
            <StyledMainContainer>
                <div>
                    <Filter
                        allotedCheckButton={allotedCheckButton}
                        setAllotedCheckButton={setAllotedCheckButton}
                        setSelectedOption={setSelectedOption}
                        selectedOption={selectedOption}
                    />
                </div>
                <div
                    style={{
                        marginTop: '27px',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: '0px 30px',
                    }}
                >
                    <CreateCard />
                    <Card
                        cardDetails={cardDetails}
                        setCardDetails={setCardDetails}
                        allotedCheckButton={allotedCheckButton}
                        setAllotedCheckButton={setAllotedCheckButton}
                        selectedOption={selectedOption}
                    />
                </div>
            </StyledMainContainer>
        </>
    )
}

export default WithSchedule

const StyledMainContainer = styled.div`
    padding: 35px 102px 65px;
`
