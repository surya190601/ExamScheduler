import React from 'react'
import LandingPage from './Pages/LandingPage'
import CreateSchedulePage from './Pages/CreateSchedulePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditSchedulePage from './Pages/EditSchedulePage'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<LandingPage/>}/>
                  <Route path="/CreateSchedulePage" element={<CreateSchedulePage/>}/>
                  <Route path="/EditSchedulePage" element={<EditSchedulePage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
