import React from 'react'
import BMX from './BMX'

export default function BMXList(props) {

    return (

        <section className='grid2'>
            {
                props.bmx.map((b, index) => (
                    <BMX bmx={b} key={index} />
                ))
            }
        </section>

    )
}
