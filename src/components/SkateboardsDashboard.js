import React, { useState } from 'react'
import SkateboardsList from './SkateboardsList'
import { SkateboardsData } from '../SkateboardsData'

function SkateboardsDashboard() {

    const [skateboards, setSkateboards] = useState(SkateboardsData.skateboards);

    return (
        <>
            <h1 id="products-skateboards-title">Skateboards</h1>
            <div>
                <SkateboardsList skateboards={skateboards} />
            </div>
        </>
    )
}

export default SkateboardsDashboard