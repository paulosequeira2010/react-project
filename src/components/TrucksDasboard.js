import React, { useState } from 'react'
import TrucksList from './TrucksList'
import { TrucksData } from '../TrucksData'

function TrucksDashboard() {

    const [trucks, setTrucks] = useState(TrucksData.trucks);

    return (
        <>
            <h1 id="products-skateboards-title">Trucks</h1>
            <div>
                <TrucksList trucks={trucks} />
            </div>
        </>
    )
}

export default TrucksDashboard