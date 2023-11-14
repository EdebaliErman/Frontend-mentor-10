import React from 'react'
import { icons } from '../../Data/data'

function StarBar() {
    return (
        <div className='flex flex-col justify-start items-center  ' >
            <Bar prop={"Reviews"} name={"ml-[-4rem]"}/>
            <Bar prop={"Report Guru"} name={"ml-[4rem]"}/>
            <Bar prop={"BestTech"} name={"ml-[8rem]"} />
        </div>
    )
}

const Stars = () => {
    return <span className='flex gap-2'>
        {icons.star}
        {icons.star}
        {icons.star}
        {icons.star}
        {icons.star}
    </span>
}

const Bar = ({ prop,name }) => {
    return (
        <div className={`flex justify-between w-[450px] font-bold text-main text-xl items-center m-4 py-4 p-3 gap-4 bg-starBack rounded-xl ${name}`}>
            <Stars /> Rated 5 Stars in {prop}
        </div>
    )
}


export default StarBar
