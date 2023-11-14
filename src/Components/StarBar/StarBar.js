import React from 'react'
import { icons } from '../../Data/data'
import "./StarBar.css"
function StarBar() {
    return (
        <div className='starbar' >
            <Bar prop={"Reviews"} name={"ml-[-4rem]"} />
            <Bar prop={"Report Guru"} name={"ml-[4rem]"} />
            <Bar prop={"BestTech"} name={"ml-[8rem]"} />
        </div>
    )
}

const Stars = () => {
    return <span>
        {icons.star}
        {icons.star}
        {icons.star}
        {icons.star}
        {icons.star}
    </span>
}

const Bar = ({ prop, name }) => {
    return (
        <div className={`${name}`}>
            <span className='bar'>  <Stars /> Rated 5 Stars in {prop}</span>
        </div>
    )
}


export default StarBar
