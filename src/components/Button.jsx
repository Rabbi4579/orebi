import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`font-dm font-bold text-sm bg-black py-4 px-16 text-white hover:bg-white hover:text-black border border-solid  border-black duration-300 ${className} `}>{text}</button>
  )
}

export default Button