import React from 'react'
import { icons } from '../../Data/data'

function StarBar() {
    return (
        <div>
            <Bar prop={"Reviews"} />
        </div>
    )
}

const Stars = () => {
    return <span className='flex'>
        {icons.star}
        {icons.star}
        {icons.star}
        {icons.star}
        {icons.star}
    </span>
}

const Bar = ({ prop }) => {
    return (
        <div>
            <Stars /> Rated 5 Stars in {prop}
        </div>
    )
}


export default StarBar
