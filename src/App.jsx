import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import Image from './components/Image'
import Logo from './assets/Logo.png'
import Facility from './components/Facility'
import SubHeading from './components/SubHeading'
import PortionHeading from './components/PortionHeading'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List text="Home" className=""></List>
      <Image src={Logo} className=""/>
      <Facility></Facility>
      <SubHeading text="sub aheading" className="text-49"/>
      <PortionHeading text="Portion Heading" className="text-5xl"/>
      <Button text="Add to Cart"/>
    </>
  )
}

export default App
