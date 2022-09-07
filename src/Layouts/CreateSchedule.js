import React from 'react'
import styled from 'styled-components'
import CustomDropDown from '../Components/CustomDropDown'
import Wrapper from '../Components/Wrapper'
import { useState } from 'react'

import InputComponent from '../Components/InputComponent'
import TextComponent from '../Components/TextComponent'
import Button from '../Components/Button'

import { FormData } from '../Common/data/FormData'
import SubjectLabComponent from '../Components/SubjectLabComponent'
import TimeRange from '../Components/TimeRange'
import CreateSchedulePopUp from './CreateSchedulePopUp'
import { CreateScheduleData } from '../Common/data/CreateScheduleData'
import { Link } from 'react-router-dom'

const CreateSchedule = () => {
    // branches
    const [branch, setBranch] = useState(FormData?.branchanddep || [])
    const [selectedBranch, setSelectedBranch] = useState(branch[0] || {})

    // deps
    const [deps, setdeps] = useState(selectedBranch?.deps || [])
    const [selectedDep, setSelectedDep] = useState('--Select--')

    //ExamType
    const [ExamType, setExamType] = useState([])
    const [selectedExamType, setSelectedExamType] = useState('--Select--')

    //Labs Details
    const [labDetails, setLabDetails] = useState([])

    //Subject Details
    const [subjectDetails, setSubjectDetails] = useState([])

    // Hours And Minutes Details
    const [hours, setHour] = useState('')
    const [minutes, setMinute] = useState('')
    const [hours1, setHour1] = useState('')
    const [minutes1, setMinute1] = useState('')
    const [hours2, setHour2] = useState('')
    const [minutes2, setMinute2] = useState('')
    const [hours3, setHour3] = useState('')
    const [minutes3, setMinute3] = useState('')

    //Semester
    const [sem, setsem] = useState('')
    const handleChangeInSem = (event) => {
        setsem(event.target.value)
        setExamType(FormData?.[selectedDep]?.[event.target.value - 1])
    }

    //AMPMOption
    let AMPMOption = ['AM', 'PM']
    const [selectedAmPmDropDown, setSelectedAmPmDropDown] = useState(
        AMPMOption[0]
    )
    const [selectedAmPmDropDown1, setSelectedAmPmDropDown1] = useState(
        AMPMOption[0]
    )

    // PopUp
    const [openPopUp, setOpenPopUp] = useState(false)

    const setBranchs = (option) => {
        setSelectedBranch(option)
        setdeps(option?.deps)
        setSelectedDep(option?.deps?.[0])
    }

    const setDepartmentDetails = (option) => {
        console.log({ option })
        setSelectedDep(option)
        setExamType(FormData?.[option]?.[0])
        setSelectedExamType(FormData?.[option]?.[0]?.[0]?.ExamType)
    }

    const setexamTypes = (option) => {
        setSelectedExamType(option.ExamType)
        setSubjectDetails(FormData?.[selectedDep]?.[sem - 1]?.[0]?.subjects)
        setLabDetails(FormData?.[selectedDep]?.[sem - 1]?.[0]?.labs)
    }

    const getDateTime = () => {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let day = now.getDate()
        let hour = now.getHours()
        let minute = now.getMinutes()
        let amPm = hour >= 12 ? 'PM' : 'AM';

        month = month.toString().length == 1 ? `0${month}` : `${month}`
        day = day.toString().length == 1 ? `0${day}` : `${day}`
        hour = hour % 12;
        hour = hour ? hour : 12;
        minute = minute < 10 ? `0${minute}` : `${minute}`;
        let dateTime = `${day}/${month}/${year} ${hour}:${minute}${amPm}`
        return dateTime
    }

    return (
        <>
            <StyledMainContainer>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: '20px',
                    }}
                >
                    <Link to = "/" style={{ textDecoration: 'none' }}>
                    <StyledArrow
                        src="https://i.ibb.co/RBRPtj0/Vector-Arrow.png"
                        alt="Arrow-Back"
                    />
                    </Link>
                    <StyledTitle>Create new schedule</StyledTitle>
                </div>
                <StyledWrapper>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '2.689%',
                        }}
                    >
                        <div style={{ marginRight: '2.689%', width: '33.3%' }}>
                            <CustomDropDown
                                options={branch}
                                selectedOption={selectedBranch?.branch}
                                setSelectedOption={setBranchs}
                                label="Branch"
                                optionObjectValue="branch"
                            />
                        </div>
                        <div style={{ marginRight: '2.69%', width: '33.3%' }}>
                            <CustomDropDown
                                options={deps}
                                selectedOption={selectedDep}
                                setSelectedOption={setDepartmentDetails}
                                label="Department"
                            />
                        </div>
                        <div style={{ width: '33.3%' }}>
                            <InputComponent
                                label="Semester"
                                onChange={handleChangeInSem}
                                value={sem}
                            />
                        </div>
                    </div>
                    <div style={{ marginBottom: '2.689%' }}>
                        <CustomDropDown
                            options={ExamType}
                            selectedOption={selectedExamType}
                            setSelectedOption={setexamTypes}
                            label="ExamType"
                            optionObjectValue="ExamType"
                        />
                    </div>
                    <div>
                        <StyledInputText1 label={'Time Range'} />
                    </div>
                    <TimeRange
                        AMPMOption={AMPMOption}
                        selectedAmPmDropDown={selectedAmPmDropDown}
                        setSelectedAmPmDropDown={setSelectedAmPmDropDown}
                        label={'FN'}
                        setHour={setHour}
                        setMinute={setMinute}
                        setHour1={setHour1}
                        setMinute1={setMinute1}
                    />
                    <TimeRange
                        AMPMOption={AMPMOption}
                        selectedAmPmDropDown={selectedAmPmDropDown1}
                        setSelectedAmPmDropDown={setSelectedAmPmDropDown1}
                        label={'AN'}
                        setHour={setHour2}
                        setMinute={setMinute2}
                        setHour1={setHour3}
                        setMinute1={setMinute3}
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '2.689%',
                        }}
                    >
                        <div style={{ marginRight: '2.69%', width: '33.3%' }}>
                            <InputComponent
                                label="Subjects"
                                value={subjectDetails.length}
                            />
                        </div>
                        <div style={{ width: '33.3%' }}>
                            <InputComponent
                                label="Labs"
                                value={labDetails.length}
                            />
                        </div>
                    </div>
                    <SubjectLabComponent
                        details={subjectDetails}
                        setDetails={setSubjectDetails}
                        label="Subject"
                    />
                    <div>
                        <StyledInputText3 label="Labs" />
                    </div>
                    <SubjectLabComponent
                        details={labDetails}
                        setDetails={setLabDetails}
                        label="Lab"
                    />
                </StyledWrapper>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                >
                    <SaveButton
                        label="Save"
                        onClick={() => {
                            setOpenPopUp(true)
                            const data = {
                                branch: selectedBranch.branch,
                                department: selectedDep,
                                semester: sem,
                                examType: selectedExamType,
                                fnFrom: {
                                    hour: hours,
                                    minute: minutes,
                                    AMOrPM: selectedAmPmDropDown,
                                },
                                fnTo: {
                                    hour: hours1,
                                    minute: minutes1,
                                    AMOrPM: selectedAmPmDropDown,
                                },
                                anFrom: {
                                    hour: hours2,
                                    minute: minutes2,
                                    AMOrPM: selectedAmPmDropDown1,
                                },
                                anTo: {
                                    hour: hours3,
                                    minute: minutes3,
                                    AMOrPM: selectedAmPmDropDown1,
                                },
                                subjectsCount: subjectDetails.length,
                                labsCount: labDetails.length,
                                subjectDetails: [...subjectDetails],
                                labDetails: [...labDetails],
                                createdTime:getDateTime()
                            }
                            console.log(data)
                            CreateScheduleData.push(data)
                        }}
                    />
                </div>
                <CreateSchedulePopUp
                    branch={selectedBranch.branch}
                    dep={selectedDep}
                    sem={sem}
                    openPopUp={openPopUp}
                />
            </StyledMainContainer>
        </>
    )
}

export default CreateSchedule

const StyledMainContainer = styled.div`
    position: relative;
    padding: 35px 122px 89px;
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
const StyledWrapper = styled(Wrapper)`
    padding: 37px 55px 50px 55px;
    background: #fbfbfb;
`
const StyledInputText1 = styled(TextComponent)`
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 12px;
    margin-right: 30%;
`
const StyledInputText3 = styled(StyledInputText1)`
    margin-bottom: 30px;
`
const SaveButton = styled(Button)`
    border: 1px solid #5375e2;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    padding: 10.5px 49px;
    color: #ffffff;
    margin-top: 56px;
    background: #5375e2;
`
