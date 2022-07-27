import React from 'react'
import Shoes from './Shoes'

export default function ShoesList(props) {

    return (

        <section className='grid2'>
            {
                props.shoes.map((b, index) => (
                    <Shoes shoes={b} key={index} />
                ))
            }
        </section>

    )
}
