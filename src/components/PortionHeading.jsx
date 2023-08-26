import React from 'react'

const PortionHeading = ({text, className}) => {
  return (
    <div className={`text-xl font-dm font-bold ${className}`}>{text}</div>
  )
}

export default PortionHeading