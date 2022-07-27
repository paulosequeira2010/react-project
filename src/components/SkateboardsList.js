import React from 'react'
import Skateboard from './Skateboard'

export default function SkateboardsList(props) {

    return (

        <section className='grid2'>
            {
                props.skateboards.map((b, index) => (
                    <Skateboard skateboard={b} key={index} />
                ))
            }
        </section>

    )
}
