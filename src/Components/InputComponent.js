import React from 'react'

const InputComponent = (props) => {
    const {className,type='text',value,placeholder} = props
  return (
    <input className={className} type={type} value = {value} placeholder = {placeholder}/>
  )
}

export default InputComponent