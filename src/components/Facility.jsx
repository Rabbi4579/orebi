import React from 'react'
import { AiFillCar } from 'react-icons/ai';
import Flex from './Flex';
// AiFillCar
const Facility = () => {
    return (
        <Flex className="items-center gap-4">
            <AiFillCar />
            <p className='font-dm font-normal text-base'>Two years warranty</p>
        </Flex>

    )
}

export default Facility