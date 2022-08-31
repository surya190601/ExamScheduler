import React from 'react'

const Button = (props) => {
    const {className,label} = props
  return (
    <>
        <div className={className}>{label}</div>
    </>
  )
}

export default Button