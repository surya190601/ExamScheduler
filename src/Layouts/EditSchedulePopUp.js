import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Components/Button'
import TextComponent from '../Components/TextComponent'
const CreateSchedulePopUp = (props) => {
    const { branch, dep, sem, openPopUp } = props
    if (!openPopUp) return null
    return (
        <>
            <OverLay>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Text1 label="Go home" />
                    </Link>
                </div>
                <Text2
                    label={`${branch} ${dep} SEM${sem} schedule was successfully edited.`}
                />
                <div style={{ display: 'flex', flexDirection: 'row' ,marginLeft: '251px' }}>
                    <AllocateScheduleButton label="Edit Allocation" />
                </div>
            </OverLay>
        </>
    )
}

export default CreateSchedulePopUp

const OverLay = styled.div`
    width: 54%;
    padding: 1.5% 2.6% 6% 12.6%;
    box-shadow: 0px 3px 5px 0px rgba(50, 50, 50, 0.45);
    position: fixed;
    top: 30%;
    right: 18%;
    background: #ffffff;
    z-index: 1000;
`
const Text1 = styled(TextComponent)`
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    text-decoration-line: underline;
    color: #5375e2;
`
const Text2 = styled(TextComponent)`
    margin-top: 45px;
    font-weight: 700;
    font-size: 25px;
    line-height: 41px;
    color: #000000;
    box-sizing: border-box;
`
const CreateNewScheduleButton = styled(Button)`
    border: 1px solid #5375e2;
    border-radius: 5px;
    font-weight: 600;
    font-size: 16px;
    line-height: 116%;
    display: flex;
    align-items: center;
    color: #5375e2;
    padding: 10.5px 23.5px;
    margin-left: 15%;
    margin-right: 30px;
    margin-top: 55px;
    height: 16px;
`

const AllocateScheduleButton = styled(Button)`
    background: #5375e2;
    border-radius: 5px;
    font-weight: 600;
    font-size: 16px;
    line-height: 116%;
    display: flex;
    align-items: center;
    color: #ffffff;
    padding: 10.5px 28px;
    margin-top: 55px;
`
