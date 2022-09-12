import React from 'react'
import LandingPage from './Pages/LandingPage'
import CreateSchedulePage from './Pages/CreateSchedulePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditSchedulePage from './Pages/EditSchedulePage'
import DetailedDisplayPage from './Pages/DetailedDisplayPage'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<LandingPage/>}/>
                  <Route path="/CreateSchedulePage" element={<CreateSchedulePage/>}/>
                  <Route path="/EditSchedulePage" element={<EditSchedulePage/>}/>
                  <Route path="/DetailDisplayPage" element={<DetailedDisplayPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
