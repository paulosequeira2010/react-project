import React, { useState } from 'react'
import ShoesList from './ShoesList'
import { ShoesData } from '../ShoesData'

function ShoesDashboard() {

    const [shoes, setShoes] = useState(ShoesData.shoes);

    return (
        <>
            <h1 id="products-skateboards-title">Shoes</h1>
            <div>
                <ShoesList shoes={shoes} />
            </div>
        </>
    )
}

export default ShoesDashboard