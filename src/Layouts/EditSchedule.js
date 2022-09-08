import React from 'react'
import { useLocation } from 'react-router-dom'

const EditSchedule = () => {
    const location = useLocation()
  const { data } = location.state
  console.log(data);
  return (
    <div>EditSchedule</div>
  )
}

export default EditSchedule