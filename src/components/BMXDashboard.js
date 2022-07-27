import React, { useState } from 'react'
import BMXList from './BMXList'
import { BMXData } from '../BMXData'

function BMXDashboard(props) {

    const [bmx, setBmx] = useState(BMXData.bmx);

    return (
        <>
            <h1 id="products-skateboards-title">bmx</h1>
            <div >

                <BMXList bmx={bmx} />
            </div>
        </>
    )
}

export default BMXDashboard