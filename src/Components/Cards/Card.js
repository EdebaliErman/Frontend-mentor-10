import React from 'react'

function Card({ item }) {
    return (
        <div className={`w-[400px] gap-8 p-12 m-4 rounded-lg bg-main text-white flex flex-col justify-center items-start ${item.mt}`}>
            <div className='flex justify-center items-center gap-4'>
                <img 
                className='rounded-full w-12'
                src={item.img} 
                alt='img' />
                <div className='text-lg font-medium text-left'>
                    <h1>{item.name}</h1>
                    <h2 className='text-stat'>{item.stat}</h2>
                </div>
            </div>
            <p className='font-bold font-sans'>" {item.comment} "</p>
        </div>
    )
}

export default Card
