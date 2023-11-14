import React from 'react'
import { page } from '../../Data/data'

function Banner() {
    return (
        <div className='w-1/2 flex flex-col gap-3'>
            <h1 className='text-6xl pr-96 text-main font-medium font-sans text-left'>{page.header.head}</h1>
            <p className='text-3xl pr-6 mt-3 text-left text-main opacity-90 font-normal font-sans'>{page.header.headParagraph}</p>
        </div>
    )
}

export default Banner
