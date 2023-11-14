import React from 'react'
import { page } from '../../Data/data'
import './Banner.css'
function Banner() {
    return (
        <div className='banner'>
            <h1>{page.header.head}</h1>
            <p>{page.header.headParagraph}</p>
        </div>
    )
}

export default Banner
