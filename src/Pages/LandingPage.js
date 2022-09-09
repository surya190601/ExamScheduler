import React from 'react'
import Footer from '../Layouts/Footer'
import Header from '../Layouts/Header' 
import NoSchedule from '../Layouts/NoSchedule'
import { CreateScheduleData } from '../Common/data/CreateScheduleData'
import WithSchedule from '../Layouts/WithSchedule'
const LandingPage = () => {
  return (
    <>
       <Header/>
       {CreateScheduleData.length > 0 ? <WithSchedule/>:<NoSchedule/>}
       <Footer/>
    </>
  )
}

export default LandingPage;