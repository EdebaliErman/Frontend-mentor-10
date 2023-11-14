import React from 'react'
import { page } from '../../Data/data'

function Banner() {
    return (
        <div>
            <h1>{page.header.head}</h1>
            <p>{page.header.headParagraph}</p>
        </div>
    )
}

export default Banner
