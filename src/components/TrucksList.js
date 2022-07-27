import React from 'react'
import Trucks from './Trucks'

export default function TrucksList(props) {

    return (

        <section className='grid2'>
            {
                props.trucks.map((b, index) => (
                    <Trucks truck={b} key={index} />
                ))
            }
        </section>

    )
}
