import React from 'react'
import { useLocation } from 'react-router-dom'
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
const EditSchedule = () => {
    const location = useLocation()
    const { item, index } = location.state
    const data = JSON.parse(item)
    // branches
    const [branch, setBranch] = useState(FormData?.branchanddep || [])
    console.log(data?.branch)
    const [selectedBranch, setSelectedBranch] = useState(branch[0] || {})

    // deps
    const [deps, setdeps] = useState(selectedBranch?.deps || [])
    const [selectedDep, setSelectedDep] = useState(data?.department)

    //ExamType
    const [ExamType, setExamType] = useState([])
    const [selectedExamType, setSelectedExamType] = useState(data?.examType)

    //Labs Details
    const [labDetails, setLabDetails] = useState(data?.labDetails)

    //Subject Details
    const [subjectDetails, setSubjectDetails] = useState(data?.subjectDetails)

    // Hours And Minutes Details
    const [hours, setHour] = useState(data?.fnFrom?.hour)
    const [minutes, setMinute] = useState(data?.fnFrom?.minute)
    const [hours1, setHour1] = useState(data?.fnTo?.hour)
    const [minutes1, setMinute1] = useState(data?.fnTo?.minute)
    const [hours2, setHour2] = useState(data?.anFrom?.hour)
    const [minutes2, setMinute2] = useState(data?.anFrom.minute)
    const [hours3, setHour3] = useState(data?.anTo?.hour)
    const [minutes3, setMinute3] = useState(data?.anTo?.minute)

    //Semester
    const [sem, setsem] = useState(data.semester)
    const handleChangeInSem = (event) => {
        setsem(event.target.value)
        setExamType(FormData?.[selectedDep]?.[event.target.value - 1])
    }

    //AMPMOption
    let AMPMOption = ['AM', 'PM']
    const [selectedAmPmDropDown, setSelectedAmPmDropDown] = useState(
        data?.fnFrom.AMOrPM
    )
    const [selectedAmPmDropDown1, setSelectedAmPmDropDown1] = useState(
        data?.anFrom.AMOrPM
    )

    // PopUp
    const [openPopUp, setOpenPopUp] = useState(false)

    //CheckBox
    const [setAllForFN, setSetAllForFN] = useState(false)
    const [setAllForAN, setSetAllForAN] = useState(false)

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

    const setexamTypes = async (option) => {
        setSelectedExamType(option.ExamType)
        await setSubjectDetails(
            FormData?.[selectedDep]?.[sem - 1]?.[0]?.subjects
        )
        await setLabDetails(FormData?.[selectedDep]?.[sem - 1]?.[0]?.labs)
    }

    const getDateTime = () => {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let day = now.getDate()
        let hour = now.getHours()
        let minute = now.getMinutes()
        let amPm = hour >= 12 ? 'PM' : 'AM'

        month = month.toString().length == 1 ? `0${month}` : `${month}`
        day = day.toString().length == 1 ? `0${day}` : `${day}`
        hour = hour % 12
        hour = hour ? hour : 12
        minute = minute < 10 ? `0${minute}` : `${minute}`
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
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <StyledArrow
                            src="https://i.ibb.co/RBRPtj0/Vector-Arrow.png"
                            alt="Arrow-Back"
                        />
                    </Link>
                    <StyledTitle>Edit schedule</StyledTitle>
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
                        Hour={hours}
                        Minute={minutes}
                        Hour1={hours1}
                        Minute1={minutes1}
                        setSetAllForFNAN={setSetAllForFN}
                        setAllForFNAN={setAllForFN}
                        subjectDetails={subjectDetails}
                        setSubjectDetails={setSubjectDetails}
                        labDetails={labDetails}
                        setLabDetails={setLabDetails}
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
                        Hour={hours2}
                        Minute={minutes2}
                        Hour1={hours3}
                        Minute1={minutes3}
                        setSetAllForFNAN={setSetAllForAN}
                        setAllForFNAN={setAllForAN}
                        subjectDetails={subjectDetails}
                        setSubjectDetails={setSubjectDetails}
                        labDetails={labDetails}
                        setLabDetails={setLabDetails}
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
                        setSetAllForAN={setSetAllForAN}
                        setSetAllForFN={setSetAllForFN}
                    />
                    <div>
                        <StyledInputText3 label="Labs" />
                    </div>
                    <SubjectLabComponent
                        details={labDetails}
                        setDetails={setLabDetails}
                        label="Lab"
                        setSetAllForAN={setSetAllForAN}
                        setSetAllForFN={setSetAllForFN}
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
                            const dataFromUser = {
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
                                createdTime: getDateTime(),
                                isAlloted: false,
                            }
                            console.log(dataFromUser)
                            CreateScheduleData.splice(index, 1, dataFromUser);
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

export default EditSchedule
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
